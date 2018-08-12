/*jshint esversion: 6 */

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('restaurant-static-v1').then((cache) => {
      return cache.addAll([
        '/',
        './restaurant.html',
        './js/dbhelper.js',
        './js/main.js',
        './js/restaurant_info.js',
        './css/styles.css',
        './data/restaurants.json',
        './img/1.jpg',
        './img/2.jpg',
        './img/3.jpg',
        './img/4.jpg',
        './img/5.jpg',
        './img/6.jpg',
        './img/7.jpg',
        './img/8.jpg',
        './img/9.jpg',
        './img/10.jpg'
      ]);
    })
  );
});
