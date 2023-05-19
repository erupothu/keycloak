#### Springboot keycloak

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

#### create maven quickstart project
> mvn archetype:generate -DarcheypeArtifactId=maven-archetype-quickstart  
> groupId: com.companyName  
> artifactId: projectName  
> package: com.company.project  
> version: 1.0.0  

```
... Add Spring boot and keycloak dependencies

<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>3.0.5</version>
    <relativePath/> <!-- lookup parent from repository -->
  </parent>

  <properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <project.reporting.outputEncoding>utf-8</project.reporting.outputEncoding>
    <maven.compiler.target>17</maven.compiler.target>
    <maven.compiler.source>17</maven.compiler.source>
  </properties>

  <dependencies>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-security</artifactId>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-oauth2-client</artifactId>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-oauth2-resource-server</artifactId>
    </dependency>

  </dependencies>

  <build>
    <pluginManagement>
      <plugins>
        <plugin>
          <groupId>org.springframework.boot</groupId>
          <artifactId>spring-boot-maven-plugin</artifactId>
        </plugin>
      </plugins>
    </pluginManagement>
  </build>

```

> mvn clean install
> mvn exec:java -Dexec.mainClass="com.viha.App"

#### Postman call API
> GET [http://localhost:8081/admin/welcome]
```
Header
Authorization: Bearer {{token}}

