//https://www.polymer-project.org/1.0/toolbox/service-worker
//https://jakearchibald.com/2014/offline-cookbook/
//https://googlechrome.github.io/sw-toolbox/docs/master/tutorial-api.html
//https://github.com/GoogleChrome/sw-precache#options-parameter

module.exports = {
  staticFileGlobs: [
    '/index.html',
    '/manifest.json',
    '/bower_components/webcomponentsjs/webcomponents-lite.min.js'
  ],

  navigateFallback: '/index.html'

  // navigateFallbackWhitelist: [/^(?!.*\.html$|\/data\/).*/],
  // Only paths that match the whitelist fall back to /index.html. In this case, the whitelist includes all files except those that end in .html (for HTML imports) and ones with /data/ in the path (for dynamically-loaded data).

  // runtimeCaching: [
  //   {
  //     urlPattern: /\/src\/images\/.*/,
  //     handler: 'cacheFirst', //networkFirst, cacheFirst, fastest, cacheOnly, networkOnly
  //     options: {
  //       cache: {
  //         maxEntries: 110,
  //         name: 'images-cache'
  //       }
  //     }
  //   }
  // ]
};
