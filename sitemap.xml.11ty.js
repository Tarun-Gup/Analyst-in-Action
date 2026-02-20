module.exports = class {
  data() {
    return {
      permalink: "/sitemap.xml",
      layout: false,
      eleventyExcludeFromCollections: true
    };
  }

  render(data) {
    const baseUrl = data.site?.url || "https://analystinaction.netlify.app";

    const ignore = new Set([
      "/sitemap.xml",
      "/search/",
      "/README/",
      "/posts/TEMPLATE/"
    ]);

    const pages = data.collections?.all || [];

    const urlNodes = pages
      .filter(p => p.url && !ignore.has(p.url))
      .map(p => {
        const loc = `${baseUrl}${p.url}`;
        const lastmod = p.date ? new Date(p.date).toISOString() : null;

        return [
          "  <url>",
          `    <loc>${loc}</loc>`,
          lastmod ? `    <lastmod>${lastmod}</lastmod>` : null,
          "  </url>"
        ].filter(Boolean).join("\n");
      })
      .join("\n");

    return [
      `<?xml version="1.0" encoding="UTF-8"?>`,
      `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
      urlNodes,
      `</urlset>`
    ].join("\n");
  }
};