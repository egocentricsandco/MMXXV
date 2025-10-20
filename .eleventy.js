module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("./src/pages", function (collectionApi) {
    return collectionApi.getFilteredByGlob("./src/pages/*.md").sort((a, b) => {
      return b.date - a.date; // Sort newest first
    });
  });
  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addWatchTarget("./src/css/");

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
