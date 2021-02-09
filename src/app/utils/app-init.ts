import { KeycloakService } from 'keycloak-angular';

import { environment } from '../../environments/environment';

export function initializerKeycloak(keycloak: KeycloakService): () => Promise<any> {
    return (): Promise<any> => {
        return new Promise(async (resolve, reject) => {
            try {
                await keycloak.init({
                    config: {
                        url: environment.keycloak.url,
                        realm: environment.keycloak.realm,
                        clientId: environment.keycloak.clientId
                    },
                loadUserProfileAtStartUp: false,
                initOptions: {
                    onLoad: 'login-required',
                    checkLoginIframe: true
                },
                bearerExcludedUrls: []
                });
                resolve(true);
            } catch (error) {
                reject(error);
            }
        });
    };
}
