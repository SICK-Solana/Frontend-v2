import {clientsClaim as workbox_core_clientsClaim} from 'C:/Users/Vighnesh/Desktop/comeback/Frontend/node_modules/workbox-core/clientsClaim.mjs';
import {precacheAndRoute as workbox_precaching_precacheAndRoute} from 'C:/Users/Vighnesh/Desktop/comeback/Frontend/node_modules/workbox-precaching/precacheAndRoute.mjs';
import {cleanupOutdatedCaches as workbox_precaching_cleanupOutdatedCaches} from 'C:/Users/Vighnesh/Desktop/comeback/Frontend/node_modules/workbox-precaching/cleanupOutdatedCaches.mjs';
import {registerRoute as workbox_routing_registerRoute} from 'C:/Users/Vighnesh/Desktop/comeback/Frontend/node_modules/workbox-routing/registerRoute.mjs';
import {NavigationRoute as workbox_routing_NavigationRoute} from 'C:/Users/Vighnesh/Desktop/comeback/Frontend/node_modules/workbox-routing/NavigationRoute.mjs';
import {createHandlerBoundToURL as workbox_precaching_createHandlerBoundToURL} from 'C:/Users/Vighnesh/Desktop/comeback/Frontend/node_modules/workbox-precaching/createHandlerBoundToURL.mjs';/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */








self.skipWaiting();

workbox_core_clientsClaim();


/**
 * The precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
workbox_precaching_precacheAndRoute([
  {
    "url": "assets/index-CFdlrlJM.js",
    "revision": null
  },
  {
    "url": "assets/index-DGY3a7ce.css",
    "revision": null
  },
  {
    "url": "index.html",
    "revision": "191f91289b266f12addab0f5862a928e"
  },
  {
    "url": "registerSW.js",
    "revision": "1872c500de691dce40960bb85481de07"
  },
  {
    "url": "service-worker.js",
    "revision": "f73232e840c144bb6ef4dd5c3b480574"
  },
  {
    "url": "icon-1080.png",
    "revision": "60da3224b173e8a9bbd72a6c4c90384f"
  },
  {
    "url": "icon-192.png",
    "revision": "19000833b75c4490038284c2085885e6"
  },
  {
    "url": "icon-512.png",
    "revision": "4ef5ddff42ea7b81d6f2d08fa8a7216d"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "181d1dd54ba8d2ac7eea28b9d401027a"
  }
], {});
workbox_precaching_cleanupOutdatedCaches();
workbox_routing_registerRoute(new workbox_routing_NavigationRoute(workbox_precaching_createHandlerBoundToURL("index.html")));






