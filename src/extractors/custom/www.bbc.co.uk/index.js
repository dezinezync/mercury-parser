export const WwwBbcCoUkExtractor = {
  domain: 'www.bbc.co.uk',

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
      'article',
    ],

    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {
      'figure': $node => {
        let $img = $node.find('img')?.['0']
        if ($img) {
          $node.replaceWith($img)
        }
      },
      '.ssrcss-vk3nhx-ComponentWrapper': $node => {
        let img = $node.find('img')?.[0]
        if (img) {
          $node.replaceWith(img)
        }
      },
      '.ssrcss-18mjolk-ComponentWrapper': $node => {
        let img = $node.find('img')?.[0]
        if (img) {
          $node.replaceWith(img)
        }
      },
      '.ssrcss-uf6wea-RichTextComponentWrapper': $node => {
        let p = $node.find('p')?.[0]
        if (p) {
          $node.replaceWith(p)
        }
      }
    },

    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [
      '.ssrcss-94m6rd-HeadingWrapper',
      '#piano-inline1',
      '#piano-inline2',
      '#piano-inline3'
    ],
  },
};
