<h1 align="center">Delilah_Resto</h1>
<p align="center">Sprint 3 - Acamica</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Contenidos</summary>
  <ol>
    <li>
      <a href="#Acerca_del_proyecto">Acerca del proyecto</a>
      <ul>
        <li><a href="#Aplicaciones_requeridas">Aplicaciones requeridas</a></li>
        <li><a href="#Dependencias">Dependencias</a></li>
      </ul>
    </li>
    <li><a href="#Instalacion">Instalacion</a></li>
    <li><a href="#Funcionamiento">Funcionamiento</a></li>
    <li><a href="#Contacto">Contacto</a></li>
  </ol>
</details>

## Acerca_del_proyecto

API para pedidos de comida. Como cliente, podés registrarte, ver el listado de nuestros productos y hacer una orden. Los administradores del restaurante tienen la posibilidad de recibir pedidos y actualizarlos.

### Aplicaciones_requeridas

* [Visual Studio Code](https://code.visualstudio.com/)
* [Node.JS](https://nodejs.org/)
* [Mysql](https://www.mysql.com/)
* [MySQL Workbench](https://dev.mysql.com/downloads/workbench/) 
* [Postman](https://www.postman.com/downloads/)


<!-- GETTING STARTED -->
### Dependencias

Las siguientes dependencias son necesarias para ejecutar el proyecto

- express
- cors
- dotenv
- jsonwebtoken
- mysql2
- sequelize

## Instalacion

1. Clonamos el repositorio Git
   ```sh
   git clone https://github.com/lnieva/Delilah_Resto.git
   ```
2. Instalamos las dependencias
   ```sh
   npm run dependencias
   ```
3. Configuramos el arcivho `.env` con los datos de la Base de Datos instalada
   ```JS
   DB_HOST=localhost (NOMBRE DEL SERVIDOR)
   DB_NAME=delilahresto (NOMBRE DE LA BASE)
   DB_PORT=3306 (PUERTO DE LA BASE DE DATOS)
   DB_USER=root (USUARIO DE CONEXION A LA BASE DE DATOS)
   DB_PASS=meolvide (PASSOWRD DEL USUARIO)
   DB_DIALECT=mysql (LENGUAJE DE LA BASE DE DATOS)
   JWT="-h?/H52xaM74W4YvuFhN=/7)" (LLAVE SECRETA PARA GENERAR EL TOKEN)
   ```
5. Ejecutamos el script `create.sql` en MYSQL
   
4. Iniciamos la API
   ```sh
   node app.js
   ```
## Funcionamiento

Para realizar pruebas puede ejecutar en POSTMAN los endpoint que figuran en [Swagger-lnieva](https://app.swaggerhub.com/apis/lnieva/delilah-resto/1.0.0)
o cargando el archivo `spec.yml` en https://editor.swagger.io/ para visualizar todos los endpoint y realizar las pruebas necesarias.

Una vez registrado y logueado el usuario, se recibirá un token, este se incluye en el header - authorization type Bearer Token.

## Contacto
Leonardo Nieva - lnieva@agea.com.ar

Proyecto: [Delilah_Resto](https://github.com/lnieva/Delilah_Resto.git) - [Acamica](https://acamica.com)