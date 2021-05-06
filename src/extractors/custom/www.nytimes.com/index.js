export const NYTimesExtractor = {
  domain: 'www.nytimes.com',

  title: {
    selectors: [
      'h1.g-headline',
      'h1[itemprop="headline"]',
      'h1.headline',
      'h1 .balancedHeadline',
    ],
  },

  author: {
    selectors: [
      ['meta[name="author"]', 'value'],
      '.g-byline',
      '.byline',
      ['meta[name="byl"]', 'value'],
    ],
  },

  content: {
    selectors: ['article#story section.meteredContent'],

    transforms: {
      '.ehw59r15': $node => {
        let $img = $node.find('img')?.['0']
        if ($img) {
          $node.replaceWith($img)
        }
        else {
          return null
        }
      },
    },

    clean: [
      '.ad',
      '.NYTAppHideMasthead',
      'header#story-header',
      '.story-body-1 .lede.video',
      '.visually-hidden',
      '#newsletter-promo',
      '.promo',
      '.comments-button',
      '.hidden',
      '.comments',
      '.supplemental',
      '.nocontent',
      '.story-footer-links',
    ],
  },

  date_published: {
    selectors: [['meta[name="article:published"]', 'value']],
  },

  lead_image_url: {
    selectors: [['meta[name="og:image"]', 'value']],
  },

  dek: null,

  next_page_url: null,

  excerpt: null,
};
