module.exports = function (eleventyConfig) {

  // 🚫 Ignore disabled pages folder
  eleventyConfig.ignores.add("_pages_disabled/**");

  // Copy static files into _site
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("robots.txt");

  // ✅ Date format filter (Exact format: 19 Feb 2026)
  // Handles both Date objects and date strings safely.
  eleventyConfig.addFilter("readableDate", function(dateObj) {
    if (!dateObj) return "";

    const d = (dateObj instanceof Date) ? dateObj : new Date(dateObj);
    if (isNaN(d.getTime())) return "";

    const day = String(d.getDate()).padStart(2, "0");
    const month = d.toLocaleString("en-GB", { month: "short" });
    const year = d.getFullYear();

    return `${day} ${month} ${year}`;
  });

  /* ============================= */
  /* MAIN POSTS COLLECTION (Newest First) */
  /* ============================= */

  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi
      .getFilteredByGlob("./posts/*.md")
      .slice() // ✅ avoid mutating original
      .sort((a, b) => b.date - a.date);
  });

  /* ============================= */
  /* TAG-BASED COLLECTIONS (Newest First) */
  /* ============================= */

  function sortByDateDesc(items) {
    return items
      .slice() // ✅ avoid mutating original
      .sort((a, b) => b.date - a.date);
  }

  eleventyConfig.addCollection("dax", (api) =>
    sortByDateDesc(api.getFilteredByTag("dax"))
  );

  eleventyConfig.addCollection("powerbi", (api) =>
    sortByDateDesc(api.getFilteredByTag("powerbi"))
  );

  // Collection name: dataModeling | tag in posts: data-modeling
  eleventyConfig.addCollection("dataModeling", (api) =>
    sortByDateDesc(api.getFilteredByTag("data-modeling"))
  );

  eleventyConfig.addCollection("performance", (api) =>
    sortByDateDesc(api.getFilteredByTag("performance"))
  );

  eleventyConfig.addCollection("tools", (api) =>
    sortByDateDesc(api.getFilteredByTag("tools"))
  );

  eleventyConfig.addCollection("architecture", (api) =>
    sortByDateDesc(api.getFilteredByTag("architecture"))
  );

  eleventyConfig.addCollection("deployment", (api) =>
    sortByDateDesc(api.getFilteredByTag("deployment"))
  );

  eleventyConfig.addCollection("fabric", (api) =>
    sortByDateDesc(api.getFilteredByTag("fabric"))
  );

  eleventyConfig.addCollection("capacity", (api) =>
    sortByDateDesc(api.getFilteredByTag("capacity"))
  );

  // Collection name: bestPractices | tag in posts: best-practices
  eleventyConfig.addCollection("bestPractices", (api) =>
    sortByDateDesc(api.getFilteredByTag("best-practices"))
  );

  /* ============================= */
  /* Allowed Topic Tags */
  /* ============================= */

  eleventyConfig.addGlobalData("topicTags", [
    "dax",
    "powerbi",
    "data-modeling",
    "performance",
    "tools",
    "architecture",
    "deployment",
    "fabric",
    "capacity",
    "best-practices"
  ]);

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site",
    },
  };
};













