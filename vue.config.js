module.exports = {
  publicPath: '/',
  outputDir: "dist",
  pwa: {
    workboxPluginMode: "GenerateSW",
    workboxOptions: {
      cacheId: "guest-list",
      swDest: "service-worker.js",
      clientsClaim: true,
      skipWaiting: true,
      navigateFallback: "index.html",
      exclude: [/\.map$/, /_redirects/],
      // Define runtime caching rules.
      runtimeCaching: [
        {
          urlPattern: /\.(?:png|jpg|jpeg|svg|ico)$/,
          handler: "cacheFirst",
          options: {
            cacheName: "images",
            expiration: {
              maxEntries: 100
            }
          }
        },
        {
          urlPattern: /\.(?:css|js)$/,
          handler: "networkFirst",
          options: {
            networkTimeoutSeconds: 2,
            cacheName: "assets",
            expiration: {
              maxEntries: 50
            },
            broadcastUpdate: {
              channelName: 'assets-update',
            },
          }
        },
      ]
    }
  },
}