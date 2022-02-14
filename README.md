<h1 align="center">Data Warehouse</h1>
<p align="center">Sprint 4 - Acamica</p>

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

Pagina Web de administracion de contactos para uso de empresas de Marketing

### Aplicaciones_requeridas

* [Visual Studio Code](https://code.visualstudio.com/)
* [Node.JS](https://nodejs.org/)
* [Mysql](https://www.mysql.com/)
* [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)

<!-- GETTING STARTED -->
### Dependencias

Las siguientes dependencias son necesarias para ejecutar el proyecto

- express
- cors
- jsonwebtoken
- mysql2
- sequelize
- nodemon

## Instalacion

1. Clonamos el repositorio Git
   ```sh
   git clone https://github.com/lnieva/Data-Warehouse.git
   ```
2. Instalamos las dependencias
   ```sh
   npm run dependencias
   ```
4. Ejecutamos el script `create.sql` en MYSQL
   
5. Iniciamos la API
   ```sh
   node front/app.js
   ```
## Funcionamiento

Ingresar usuario y contraseña validos

- Administrador:

mail: lnieva@acamica.com
password: meolvide

- Single User:

mail: juancacal@gmail.com
password: meolvide

Una vez registrado y logueado el usuario, se recibirá un token, este se incluye en el header - authorization type Bearer Token.

## Contacto
Leonardo Nieva - lnieva@agea.com.ar

Proyecto: [Data_Warehouse](https://github.com/lnieva/Data-Warehouse.git) - [Acamica](https://acamica.com)