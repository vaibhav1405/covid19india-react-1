if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"48a53665e9a5b7c3b812d5d6ba82ad13","url":"2607bfc30afc84ea4e21.worker.js"},{"revision":"46e30a1eefb4b7892f3e5c4cc58fdd79","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"46e30a1eefb4b7892f3e5c4cc58fdd79","url":"index.html"},{"revision":"2c8f860fdcc85eaa73ed6ec7d4e83df4","url":"precache-manifest.2c8f860fdcc85eaa73ed6ec7d4e83df4.js"},{"revision":"40aae3fc0bf6250d96e2b633934d069a","url":"static/css/15.c5ef3726.chunk.css"},{"revision":"7d4e1e17bdf366f877b4d150879e4be7","url":"static/js/0.4e9d56d0.chunk.js"},{"revision":"6027546b8b9a7ab00aee69dbe40be8c0","url":"static/js/1.c0339597.chunk.js"},{"revision":"c4fdafffa66714a58c33d2a42711b7fc","url":"static/js/10.9e3f2304.chunk.js"},{"revision":"9e850d19f7ee6640a6c4c0cf8c961c7c","url":"static/js/11.40f621d0.chunk.js"},{"revision":"82467f6cf0cc0bf9af13d635ab0df1ff","url":"static/js/12.dec1d0ae.chunk.js"},{"revision":"096fee898e0b50ec5b4485ef2cdd4737","url":"static/js/13.96ce3f32.chunk.js"},{"revision":"c1708c9f36531c061ece43f373655fdd","url":"static/js/14.63f5ae27.chunk.js"},{"revision":"36c375acdc6c6a2d9f7b2c9be68e90f5","url":"static/js/15.7eb668e8.chunk.js"},{"revision":"289ccd1814ee21725b116c2591c6bf31","url":"static/js/16.d9c7d0e6.chunk.js"},{"revision":"b3776b54f6f6603f88914d42c00caeeb","url":"static/js/17.1becda0e.chunk.js"},{"revision":"7846a95ff0d41379fce7a3822e6b16c3","url":"static/js/18.a1682762.chunk.js"},{"revision":"cc6cc1af065cde69c59baab689f4ae52","url":"static/js/19.e036a738.chunk.js"},{"revision":"22a0ea3abb6535a17d1d2ae3bbadffe7","url":"static/js/2.852d72c6.chunk.js"},{"revision":"948d341b33c959b894a1433213ee2306","url":"static/js/20.c9d5c07a.chunk.js"},{"revision":"b06a8f482e27e6700cb982d9505d06a2","url":"static/js/21.0941bf20.chunk.js"},{"revision":"e60c36cc1f844c45192e42d96f18b27f","url":"static/js/22.b9a592e5.chunk.js"},{"revision":"8393905034396be67e538822658babab","url":"static/js/23.2f6deecc.chunk.js"},{"revision":"27ab6305c996f97e2530c67e918e3baa","url":"static/js/24.601f9193.chunk.js"},{"revision":"48f6c0a7b66d5583292d123916c6bcab","url":"static/js/25.bb64025f.chunk.js"},{"revision":"bfcaba91a044c681fd3a85020516bb0f","url":"static/js/26.cdd961c2.chunk.js"},{"revision":"b7f0337a5ad090d769688dc4463f9f99","url":"static/js/27.22f8152c.chunk.js"},{"revision":"b8ed6cc1d446acb238eb846db257ed4d","url":"static/js/28.ba4df0bb.chunk.js"},{"revision":"11a3a8e2702fc75b5ce45dcf0774ab36","url":"static/js/29.bf273d4f.chunk.js"},{"revision":"a0ac6d90f855433940989d7fbf6d851f","url":"static/js/3.6fe98d4a.chunk.js"},{"revision":"50406aff46310ceb7a2bb2bb97e546db","url":"static/js/30.4cac4c47.chunk.js"},{"revision":"0fed23e6802ff990b30f049c0d21acd4","url":"static/js/31.e89f5f0f.chunk.js"},{"revision":"c8c006e2105c0adc8bbc7b40be5f7e61","url":"static/js/32.635cfbe3.chunk.js"},{"revision":"51ccae0894752f06100f2ac5fd09298d","url":"static/js/33.928b91fd.chunk.js"},{"revision":"7b1d56618a61e5db3543f0b27b114527","url":"static/js/34.219e32e3.chunk.js"},{"revision":"8697db9d35e3c8a108eff90cf8596fce","url":"static/js/35.d8534153.chunk.js"},{"revision":"df64a025b1a864649f1c9888111a38cf","url":"static/js/36.1430e46e.chunk.js"},{"revision":"b14616e5e282d44f2ba3581eb4633128","url":"static/js/37.e517f828.chunk.js"},{"revision":"9f2402e6752b39228b734e2de6e4067c","url":"static/js/4.1a8f30b0.chunk.js"},{"revision":"a2dd7702cc8797a5895a81e8cc53f551","url":"static/js/5.518f6213.chunk.js"},{"revision":"d0d7ef8e4064d25ffc2cc81df2d57287","url":"static/js/6.41d6f301.chunk.js"},{"revision":"f77b0ff0a823e49862f1f8617fad3d4c","url":"static/js/9.d81e2da9.chunk.js"},{"revision":"cf85c12fbc0a7ac00310759833ef24d3","url":"static/js/main.78678c70.chunk.js"},{"revision":"4bf9b793c363cf56c8fbcdb20d0b3e30","url":"static/js/runtime-main.979b62fb.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://api\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
