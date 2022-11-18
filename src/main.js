// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Import main css
import '~/assets/style/style.scss'

import DefaultLayout from '~/layouts/Default.vue'


export default function (Vue, { router, head, isClient }) {

  // Add an external CSS file
  head.link.push({
    rel: 'icon',
    href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨‍💻</text></svg>'
  });
  
 
  head.link.push({
    rel: "me",
    href: "https://mastodon.social/@huntlyc"
  });
  
  head.link.push({
    rel: 'icon',
    href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨‍💻</text></svg>'
  });

  head.script.push({
      src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
      body: false
  });
  head.script.push({
      src: '/assets/js/netlify-cms.js',
      body: true
  });


  // Add an external Javascript before the closing </body> tag
  // head.script.push({
  //   src: '//www.instagram.com/embed.js',
  //   body: true
  // })

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
