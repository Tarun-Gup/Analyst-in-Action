module.exports = function (eleventyConfig) {

  // 🚫 Ignore disabled pages folder
  eleventyConfig.ignores.add("_pages_disabled/**");

  // Copy CSS into _site
  eleventyConfig.addPassthroughCopy("style.css");

  // Date format filter
  eleventyConfig.addFilter("readableDate", function(dateObj) {
    return new Date(dateObj).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  });

  /* ============================= */
  /* MAIN POSTS COLLECTION (Newest First) */
  /* ============================= */

  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi
      .getFilteredByGlob("./posts/*.md")
      .sort((a, b) => b.date - a.date);   // ✅ Proper date sorting
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










