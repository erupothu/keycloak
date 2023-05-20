// var session = require('express-session');
// var Keycloak = require('keycloak-connect');
import session from 'express-session';
import Keycloak from 'keycloak-connect';
import dotenv from 'dotenv';

dotenv.config();

var keycloakConfig ={
    "realm": process.env.REALM?process.env.REALM:'test',
    "auth-server-url": process.env.URL?process.env.URL:'http://localhost:8080',
    "ssl-required": process.env.SSL_REQUIRED?process.env.SSL_REQUIRED:'external',
    "resource": process.env.RESOURCE?process.env.RESOURCE:'test-client',
    'confidential-port': 0,
    "bearerOnly": process.env.BEARERONLY?process.env.BEARERONLY:true,
    "credentials": {
        "secret": process.env.SECRET?process.env.SECRET:'WVWo1aA8ELMivdPO8dDFs2Tecp66UiVZ'
    }
}

var memoryStore = new session.MemoryStore();
var keycloak = new Keycloak({store: memoryStore}, keycloakConfig);

export const hello = () => console.log("say hello");

export const initKeycloak = () =>{
    
    console.log(keycloak)
    if (keycloak) {
        console.warn("Trying to init Keycloak again!");
        return keycloak;
    } 
    else {
        console.log("Initializing Keycloak...");
        var memoryStore = new session.MemoryStore();
    keycloak = new Keycloak({ store: memoryStore }, keycloakConfig);
        return keycloak;
    }
};

export const getKeycloak = () => {
    if (!keycloak){
        console.error('Keycloak has not been initialized. Please called init first.');
    } 
    return keycloak;
}