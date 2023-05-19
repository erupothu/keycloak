#### Keycloak Server setup in ubuntu

Download: [https://www.keycloak.org/downloads.html]

Terminal:
wget https://github.com/keycloak/keycloak/releases/download/15.0.2/keycloak-15.0.2.tar.gz
tar -xvzf keycloak-15.0.2.tar.gz

cd keycloak
./kc.sh start-dev

Login: [http://localhost:8080/login]

Configure Database:
> sudo apt install mysql-server
> mysql -u root -p
> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Root@123';
> create database keycloak;

nano keycloak/keycloak.conf
```
db=mysql
db-username=keycloak
db-password=password
db-url=jdbc:postgresql://localhost/keycloak
```
> ./kc.sh start-dev

Login: [http:localhost:8080]

Change Themes of each realm:
cd keycloak/lib/lib/main/org.keycloak.keycloak-themes-21.1.1.jar
extract -> login
cd themes
mkdir test-custom-theme
cd test-cusstom-theme
cp ../../login-them test-curtom-theme
update css and properties base to keycloak
done...

Login -> test-realm -> realm-settings -> themes -> select test-custom-theme
[	http://localhost:8080/admin/test-realm/console]



