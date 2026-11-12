export const environment = {
  production: true,
  URL: 'http://localhost:8011/api/v1/azangue',
  LOGOUT_URL: "http://localhost:8011/logout",
  firebase: {
    apiKey: "AIzaSyD_oB87Kx4dDOeOiZwPtCylhVUPUivIrqs",
    authDomain: "website-sidof.firebaseapp.com",
    projectId: "website-sidof",
    storageBucket: "website-sidof.firebasestorage.app",
    messagingSenderId: "221552624697",
    appId: "1:221552624697:web:4f34a7aab1b1bf8fe539e8",
    measurementId: "G-16M8H5YMRF"
  },
  // siteUrl: 'https://sidof.net',
  siteUrl: 'https://website-sidof.firebaseapp.com',
  indexable: true, // passer à true dans environment.ts (production) au lancement de sidof.net
};