// @ts-check
Error.stackTraceLimit = 50;

/** @param {import('@11ty/eleventy/src/UserConfig')} eleventyConfig */
module.exports = function(eleventyConfig) {
  return {
    templateFormats: ['html', 'md', 'njk', '11ty.cjs'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: './docs',
    },
  };
}


