import plugin_gridsome_plugin_service_worker_6 from "/home/huntly/code/blog/node_modules/gridsome-plugin-service-worker/gridsome.client.js"
import plugin_gridsome_plugin_manifest_7 from "/home/huntly/code/blog/node_modules/gridsome-plugin-manifest/gridsome.client.js"

export default [
  {
    run: plugin_gridsome_plugin_service_worker_6,
    options: {"networkFirst":{"cacheName":"hc-v1","routes":["/",{}]},"cacheFirst":{"cacheName":"cf-v1","routes":[]},"cacheOnly":{"cacheName":"co-v1","routes":[]},"networkOnly":{"cacheName":"no-v1","routes":[]},"precachedRoutes":[],"staleWhileRevalidate":{"cacheName":"swr-v1","routes":[]}}
  },
  {
    run: plugin_gridsome_plugin_manifest_7,
    options: {"background_color":"#4C566A","icon_path":"src/assets/icon.png","name":"Huntly Cameron","short_name":"Blog","theme_color":"#4C566A","lang":"en","display":"minimal-ui","file_name":"manifest.json","orientation":"any","scope":"/","start_url":"/","dir":"auto","prefer_related_applications":false,"related_applications":[]}
  }
]
