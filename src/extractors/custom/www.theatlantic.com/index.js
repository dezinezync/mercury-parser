// Rename CustomExtractor
// to fit your publication
export const TheAtlanticExtractor = {
  domain: 'www.theatlantic.com',
  title: {
    selectors: [
      'h1.hed',
    ],
  },

  author: {
    selectors: [
      'article#article .article-cover-extra .metadata .byline a',
    ],
  },

  content: {
    selectors: [
      '.article-body',
    ],

  // Is there anything in the content you selected that needs transformed
  // before it's consumable content? E.g., unusual lazy loaded images
    transforms: [
    ],

  // Is there anything that is in the result that shouldn't be?
  // The clean selectors will remove anything that matches from
  // the result
    clean: [

    ],
  },

  date_published: null,

  lead_image_url: null,

  dek: null,

  next_page_url: null,

  excerpt: null,
};