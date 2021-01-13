# Evento Virtual - The 8Agency technical challenge

## Como instalar e iniciar el proyecto

### 1 - Clonar el repositorio

Clonar el repositorio completo desde el siguiente [link](https://github.com/fvittorello/evento-virtual/).

O desde la consola ingresando:

```
git clone https://github.com/fvittorello/evento-virtual.git
```

### 2 - Instalación de dependencias

Con la consola posicionada dentro de la carpeta /client y luego /server repetir el siguiente comando

```
npm install
```

### 3 - Crear la base de datos

- Abrir con XAMPP u otro programa alternativo que soporte MySQL un servidor local e inicializar los servicios de Apache y MySQL.
- Corroborar que el puerto en que se está ejecutando es el `3306`
- Abrir el panel de control del servicio MySQL
- Generar una nueva base de datos llamada `evento_virtual`.
- Dentro del `panel de control` de la base de datos creada importar el archivo `server/db/database.sql`.

### 4 - Iniciar el servidor

- Se deberá crear un archivo `.env` dentro de la carpeta `/server`.
- El archivo `.env` debe tener las siguientes variables si se utilizan los valores por defecto o sus nuevos valores en caso de haberlos modificado.

```
DB_HOST = localhost
DB_USER = root
DB_NAME = evento_virtual
DB_PASS = ''
DB_PORT = 3306
```
