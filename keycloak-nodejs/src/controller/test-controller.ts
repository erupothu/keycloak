import { Router } from 'express';
import {getKeycloak} from '../config/keycloak-config'

const usersRouter = Router();
const keycloak = getKeycloak();


usersRouter.get('/invalid', keycloak.protect('realm:INVALID_ROLE'), function(req, res){
    res.send("Hello Anonymous");
});
usersRouter.get('/user', keycloak.protect('realm:ADMIN_ROLE'), function(req, res){
    res.send("Hello User");
});

usersRouter.get('/public', function(req, res){
    // console.log(keycloak)
    res.send("Hello Admin");
});

usersRouter.get('/all-user', function(req, res){
    res.send("Hello All User");
});

export default usersRouter;