// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api/',
  photoUrl: 'http://localhost:8080/api/images/',
  keycloakUrl: 'http://localhost:8000/auth/realms/serwis-aukcyjny/protocol/openid-connect/token',
  ClientId : 'webapp',
  ClientSecret: 'ed6ffe01-10d0-4c96-84b3-693a759f55bd',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
