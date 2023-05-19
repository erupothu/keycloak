#### keycloak server setup
> create new realm [test]  
> create new client [test-client]  
> create realm-role [ADMIN_ROLE]  
> create user [harish]  add credentials and assign role ADMIN_ROLE

#### Postman Generate token
> POST [http://localhost:8080/realms/test/protocol/openid-connect/token]  
```
Body (x-wwww-form-urlencoded)
username:harish
password:******
grant_type:password
client_id:test-client
client_secret:****************
```
```
test script
var data = JSON.parse(responseBody);
postman.setEnvironmentVariable("token", data.access_token);
```

#### maven Quarkus project

> mvn io.quarkus.platform:quarkus-maven-plugin:3.0.3.Final:create  
> groupId: com.companyName  
> artifactId: projectName  
> package: com.company.project  
> version: 1.0.0 

```
Add keycloak dependencies

```

> mvn install  
> ./mvnw quarkus:dev  

#### Postman call API
> GET [http://localhost:9091/api/admin/grant]
```
Header
Authorization: Bearer {{token}}