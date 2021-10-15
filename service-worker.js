if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"901f354246de3bcd1ce7dc061ad2f855","url":"404.html"},{"revision":"0c209acdd19f6732370568f7a6ae0bdf","url":"ece08537062c28a2a7c1.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"901f354246de3bcd1ce7dc061ad2f855","url":"index.html"},{"revision":"3a9110ae9e9919cf864852f316e8e086","url":"static/css/2.1432c553.chunk.css"},{"revision":"1139c7f91659b8d1e1f13fd2fdfdf753","url":"static/css/21.f5f9d973.chunk.css"},{"revision":"fa58b34f703b8f212cb370759f77815a","url":"static/css/22.abf343ae.chunk.css"},{"revision":"038a830223503314180873a2c08b9a52","url":"static/js/0.3d2b55ab.chunk.js"},{"revision":"94c7873ffb45301752d84845019397bb","url":"static/js/1.292cbfe1.chunk.js"},{"revision":"cc77b2a1cb089e8bc1b94a70111a28cd","url":"static/js/12.03842a95.chunk.js"},{"revision":"85893631d8ceea7ee80e950a1e6ac646","url":"static/js/13.bd8344ea.chunk.js"},{"revision":"31724d6c7b0c77c7a4b2160cc9cbcb2d","url":"static/js/14.f3166771.chunk.js"},{"revision":"298a9197c13b73ab749a384cfb63ce1c","url":"static/js/15.3349faa3.chunk.js"},{"revision":"41891a7eecca793407228a9748aac6c7","url":"static/js/16.ff48d2af.chunk.js"},{"revision":"80a94b4d1084d0f105d57cd2fa2fd5ce","url":"static/js/17.beedacc2.chunk.js"},{"revision":"65f7169289c95c3d198a9d481d9355eb","url":"static/js/18.7dc9ef53.chunk.js"},{"revision":"42517ae6477e8e1a88170b059a36a10d","url":"static/js/19.6603b937.chunk.js"},{"revision":"9e1d7b65707ab45fc810945d17a1cee4","url":"static/js/2.366b601a.chunk.js"},{"revision":"be1ef9efcbcbe4d36122daf8504e90bd","url":"static/js/20.240a04d1.chunk.js"},{"revision":"0db713db0c8295812c89863ba02e9040","url":"static/js/21.d4223f05.chunk.js"},{"revision":"21184cc1caffbd0e46b28ea3b6aff028","url":"static/js/22.4d88f692.chunk.js"},{"revision":"9143f65f0f0d7c49ffaf2fe879218843","url":"static/js/23.590b369b.chunk.js"},{"revision":"5d94792c24b785f181901db56c27523b","url":"static/js/24.011f15a6.chunk.js"},{"revision":"2c73b303141c95b09433c1910813ac99","url":"static/js/25.ba337a84.chunk.js"},{"revision":"317b167667cd1e16bc23185d28285d49","url":"static/js/26.eb7f6c13.chunk.js"},{"revision":"29f477932ea4cee853b4930544debc8a","url":"static/js/27.b359e32b.chunk.js"},{"revision":"0781d2320ce5663d175392b3df908ba0","url":"static/js/28.38092025.chunk.js"},{"revision":"5648df273127545117bd9dd67ca6590c","url":"static/js/29.18ee1686.chunk.js"},{"revision":"3181f147f74a294e7043f41fa48788f7","url":"static/js/3.5ea0a475.chunk.js"},{"revision":"eb39e28604d9f47d7e7ee47bcbe29ae4","url":"static/js/30.4f4dc585.chunk.js"},{"revision":"b1451e5332f14140ba952a0811aeede2","url":"static/js/31.2eb4a85e.chunk.js"},{"revision":"b152da9a16849e7b9df646e979678466","url":"static/js/32.02b2960c.chunk.js"},{"revision":"349e7ad2fc08f8054629b563468f6bc4","url":"static/js/33.bc66a3bd.chunk.js"},{"revision":"115f532793a4b539494a4d69e30746cc","url":"static/js/34.ab960202.chunk.js"},{"revision":"357ba13b9cf98c11e31b40ac2619dfdb","url":"static/js/35.759e7885.chunk.js"},{"revision":"b5a7de1527a49d3972a0ba05b4cdf8ee","url":"static/js/36.c9d7dcf7.chunk.js"},{"revision":"62cea45d407bb68bc943cb9640a7fd9a","url":"static/js/37.44214827.chunk.js"},{"revision":"c68b1bf8f02c7cbb1d416e63c8bf60c5","url":"static/js/38.b854a616.chunk.js"},{"revision":"b7ab472aae6f6c92cc12ec372b34b793","url":"static/js/39.77f0fe93.chunk.js"},{"revision":"790e1d33656c2ae278bd35043eca2682","url":"static/js/4.de3e7cc2.chunk.js"},{"revision":"ad9972eabb6039f0d4724d7bea45d821","url":"static/js/40.84b2359b.chunk.js"},{"revision":"17f0d72671be10a95bdf98b0d42cad10","url":"static/js/41.2f6d27f8.chunk.js"},{"revision":"0a0a27ab5a4c3d785518dd85b3bcf0b7","url":"static/js/42.3a616d0f.chunk.js"},{"revision":"fe84d04f51d1ad89d42e580f316c7619","url":"static/js/43.6ee47843.chunk.js"},{"revision":"0be29040efe978a133c59ba313ee218b","url":"static/js/44.694c8ddd.chunk.js"},{"revision":"8fd985c0bc9ae388350997558cc45429","url":"static/js/45.e9b2d3f9.chunk.js"},{"revision":"a5483a5bb0b0a98302cf07d2452f7244","url":"static/js/46.8c39b76b.chunk.js"},{"revision":"fe3156fed30837a3df4ee65a8c1c9d7b","url":"static/js/5.c5ce36d5.chunk.js"},{"revision":"64ca663decffa3d9eb7369c3e6fe61e5","url":"static/js/6.d45dc536.chunk.js"},{"revision":"23afd2f4fcd9571d0827fc5f79600801","url":"static/js/7.d3661f2d.chunk.js"},{"revision":"97cb028ca778dcc2ebe953a0ed79396c","url":"static/js/8.6e1e43ee.chunk.js"},{"revision":"3504d30aaf2770e6b4d91aba3266e420","url":"static/js/9.6a558fda.chunk.js"},{"revision":"7da20f7ec3c1f5e4b0d3709cb50a4709","url":"static/js/main.cee33426.chunk.js"},{"revision":"4a1616592dc4a68ac3a2ca6328ca4542","url":"static/js/runtime-main.64d919b6.js"}]);

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
      new RegExp('https://data\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
