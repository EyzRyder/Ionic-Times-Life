// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCOp9hWsVoczaTki1GVv_zka7hKkQZ_cwc",
    authDomain: "times-new-life.firebaseapp.com",
    projectId: "times-new-life",
    storageBucket: "times-new-life.appspot.com",
    messagingSenderId: "391973753598",
    appId: "1:391973753598:web:523e5dcaa15192f7e14baf"
  },
  news: {
    api_key: 'ebc48f55665f43258270f92a66f50a0b',
    url_base: 'https://newsapi.org/v2/'
  },
  ExerciseDB: {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5272259bacmshbc289ff18460e32p16a5aajsn6f9687de1d28',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  }
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
