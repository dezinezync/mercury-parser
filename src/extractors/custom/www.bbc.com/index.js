export const WwwBbcComExtractor = {
  domain: 'www.bbc.com',

  title: {
    selectors: ['h1#main-heading'],
  },

  author: {
    selectors: ['.ssrcss-1pjc44v-Contributor strong'],
  },

  date_published: {
    selectors: [['.ssrcss-1hizfh0-MetadataSnippet time', 'datetime']],
  },

  dek: {
    selectors: [null],
  },

  lead_image_url: {
    selectors: [
      ['meta[name="twitter:image:src"]', 'value'],
      ['.ssrcss-evoj7m-Image', 'src'],
    ],
  },

  content: {
    selectors: [
      'article.ssrcss-5h7eao-ArticleWrapper div.ssrcss-uf6wea-RichTextComponentWrapper',
    ],

    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},

    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [
      'header.ssrcss-94m6rd-HeadingWrapper',
      '.ssrcss-18mjolk-ComponentWrapper',
    ],
  },
};
