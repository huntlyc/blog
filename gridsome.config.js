// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
//cover_image (width: 770, height: 380, blur: 10)
//

module.exports = {
  siteName: 'Huntly Cameron',
  // icon: './src/assets/favicon.svg',
  templates: {
    Post: '/:slug',
    Tag: '/tag/:id'
  },
  plugins: [
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: "gridsome-plugin-service-worker",
      options: {
        networkFirst: {
          cacheName: "hc-v1",
          routes: [
            "/",
            /\.(js|css|png)$/, // means "every JS, CSS, and PNG images"
          ],
        },
      },
    },
    {
      use: "gridsome-plugin-manifest",
      options: {
          background_color: "#4C566A",
          icon_path: "src/assets/icon.png",
          name: "Huntly Cameron",
          short_name: "Blog",
          theme_color: "#4C566A",
          lang: "en",
      },
    },
  ],
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs',
        [ '@noxify/gridsome-plugin-remark-embed', {
          'enabledProviders' : ['Instagram']
      }]
      ]
    }
  },
}
