class Sitemap {
  data() {
    return {
      permalink: "/sitemap.xml",
      eleventyExcludeFromCollections: true
    };
  }

  render(data) {
    const siteUrl =
      (data.site && data.site.url)
        ? data.site.url
        : "https://analystinaction.netlify.app";

    const urls = (data.collections && data.collections.all ? data.collections.all : [])
      .filter(item => item && item.url && item.url !== "/404.html");

    const body = urls.map(item => {
      return `  <url>
    <loc>${siteUrl}${item.url}</loc>
  </url>`;
    }).join("\n");

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>`;
  }
}

module.exports = Sitemap;
