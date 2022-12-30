// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // ENV_URL: 'https://ui-service-twin-builder.azurewebsites.net',
  ENV_URL: "http://localhost:3001",
  //ENV_URL:"http://cm-enso-api-cognitive-platform-sit.apps.lz-np1.ent-ocp4-useast2.aws.internal.das",
  // ENV_URL: "https://shop-node-service.onrender.com",
  SEARCH_URL: "https://search-api-service-twin-builder.azurewebsites.net",
  MARS_URL: "",
  CONFIG_URL: "",
  INTELLIAUTH_URL:
    "https://enso-api-cognitive-platform-sit.apps.ent-ocp4-np1-har.antmdc.internal.das",
  POLICY_URL:
    "https://aim-dna-api-cognitive-platform.apps.ent-ocp4-prod-ric.antmdc.internal.das",
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
