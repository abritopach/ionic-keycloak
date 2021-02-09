export const environment = {
  production: true,
  keycloak: {
    // Url of the Identity Provider.
    url: 'http://localhost:8080/auth/',

    // Realm.
    realm: 'RealmTest',

    // The SPA's id.
    // The SPA is registerd with this id at the auth-server.
    clientId: 'ionic-keycloak',
  }
};
