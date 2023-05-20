import Keycloak from 'keycloak-js';

// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'
const keycloak = Keycloak({
  url: 'http://localhost:8080',
  realm: 'test',
  clientId: 'test-client',
});

keycloak.init(
    {
        onLoad: 'login-required',
        flow: 'hybrid',
        silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
    }
)
export default keycloak;