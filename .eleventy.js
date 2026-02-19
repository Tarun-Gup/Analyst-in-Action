module.exports = function (eleventyConfig) {

  // 🚫 Ignore disabled pages folder
  eleventyConfig.ignores.add("_pages_disabled/**");

  // Copy static files into _site
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("robots.txt");

  // Date format filter (Exact format: 19 Feb 2026)
  eleventyConfig.addFilter("readableDate", function(dateObj) {
    const date = new Date(dateObj);

    const day = String(date.getDate()).padStart(2, "0");
    const month = date.toLocaleString("en-GB", { month: "short" });
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  });

  /* ============================= */
  /* MAIN POSTS COLLECTION (Newest First) */
  /* ============================= */

  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi
      .getFilteredByGlob("./posts/*.md")
      .sort((a, b) => b.date - a.date);
  });

  /* ============================= */
  /* TAG-BASED COLLECTIONS (Newest First) */
  /* ============================= */

  function sortByDateDesc(collection) {
    return collection.sort((a, b) => b.date - a.date);
  }

  eleventyConfig.addCollection("dax", (api) =>
    sortByDateDesc(api.getFilteredByTag("dax"))
  );

  eleventyConfig.addCollection("powerbi", (api) =>
    sortByDateDesc(api.getFilteredByTag("powerbi"))
  );

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













