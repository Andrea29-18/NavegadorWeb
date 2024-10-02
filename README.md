# HTTP Client Application

Este es un programa de escritorio desarrollado en **Electron** y **Node.js** que permite realizar peticiones HTTP simulando el funcionamiento básico de un navegador web. Soporta los métodos HTTP: **GET**, **POST**, **PUT**, y **DELETE**, con una interfaz gráfica que permite visualizar y guardar las respuestas.

## Características

- **Caja de texto** para capturar la URL del recurso.
- **ComboBox** para seleccionar el método HTTP (GET, POST, PUT, DELETE).
- **Área de texto** para ingresar el cuerpo de la solicitud (solo para POST y PUT).
- **Radios** para seleccionar el tipo de visualización de la respuesta: Raw (texto crudo) o HTML.
- **Botón "Consultar"** para lanzar la petición HTTP.
- **Botón "Guardar respuesta"** para guardar la respuesta en un archivo con la extensión basada en el tipo MIME de la respuesta.
- **Visualización** del código de estado, tipo MIME y el cuerpo de la respuesta en dos formatos diferentes (raw y HTML).

## Dependencias

Para ejecutar este programa, asegúrate de tener instaladas las siguientes dependencias:

- **Node.js** (versión 12 o superior).
- **Electron**.
- **Axios** (para realizar peticiones HTTP).
- **FS** (para guardar archivos).

Las dependencias se pueden instalar usando **npm**.

## Instalación

1. Clona este repositorio o descarga los archivos.

   ```bash
   git clone <tu-repositorio>
   cd <nombre-del-proyecto>
   ```

2. Instala las dependencias necesarias con **npm**.

   ```bash
   npm install
   ```

   Las dependencias principales que se instalarán son:
   - `electron`: Para crear la interfaz gráfica.
   - `axios`: Para realizar las peticiones HTTP.
   - `fs`: Para manejar la creación y escritura de archivos en Node.js.

3. Ejecuta la aplicación con **npm**:

   ```bash
   npm start
   ```

## Estructura del Proyecto

```
.
├── src/
│   ├── index.html  # Archivo principal HTML
│   ├── renderer.js # Lógica de la interfaz gráfica y manejo de eventos
├── main.js         # Archivo principal que inicia Electron
├── package.json    # Archivo de configuración del proyecto
└── README.md       # Documentación del proyecto
```

## Cómo Ejecutar el Programa

1. Abre el programa utilizando el comando `npm start`.
2. Ingresa la URL del recurso que deseas consultar.
3. Selecciona el método HTTP (GET, POST, PUT o DELETE) desde el desplegable.
4. Si seleccionas **POST** o **PUT**, ingresa un cuerpo de solicitud en formato JSON en el área de texto proporcionada.
5. Elige cómo deseas visualizar la respuesta: 
   - **Raw**: Muestra la respuesta en formato de texto tal cual como se recibe.
   - **HTML**: Si la respuesta es HTML, será representada en el formato de página.
6. Haz clic en el botón **Consultar** para enviar la petición.
7. Para guardar la respuesta, haz clic en el botón **Guardar respuesta**. La respuesta se guardará con la extensión correspondiente basada en el tipo MIME.

## Pruebas y Ejemplos

### Ejemplos de URLs

Puedes probar las siguientes URLs para realizar solicitudes **GET**, **POST**, **PUT**, y **DELETE**:

### 1. **GET** Request

- **URL:** `https://jsonplaceholder.typicode.com/posts/1`
- **Método:** `GET`
- **Descripción:** Obtiene los datos de un post con ID 1.

### 2. **POST** Request

- **URL:** `https://jsonplaceholder.typicode.com/posts`
- **Método:** `POST`
- **Cuerpo:**

  ```json
  {
    "title": "foo",
    "body": "bar",
    "userId": 1
  }
  ```

- **Descripción:** Crea un nuevo post con los datos proporcionados en el cuerpo de la solicitud.

### 3. **PUT** Request

- **URL:** `https://jsonplaceholder.typicode.com/posts/1`
- **Método:** `PUT`
- **Cuerpo:**

  ```json
  {
    "id": 1,
    "title": "foo",
    "body": "bar",
    "userId": 1
  }
  ```

- **Descripción:** Actualiza un post existente con ID 1 con los datos proporcionados en el cuerpo de la solicitud.

### 4. **DELETE** Request

- **URL:** `https://jsonplaceholder.typicode.com/posts/1`
- **Método:** `DELETE`
- **Descripción:** Elimina el post con ID 1.

### Pruebas Adicionales

Puedes probar los siguientes recursos para verificar que el programa puede manejar diferentes tipos de respuestas y MIME types:

1. **Página web**: `https://uv.mx/fei`
2. **PDF**: `https://www.uv.mx/fei/files/2024/04/ISOF-202501-2.pdf`
3. **Imagen**: `https://www.uv.mx/fei/files/2023/01/LIS2.png`
4. **Datos JSON**: `https://jsonplaceholder.typicode.com/comments`

## Notas Importantes

- Asegúrate de ingresar el cuerpo de la solicitud en formato JSON válido para las peticiones **POST** y **PUT**.
- Las respuestas se guardan automáticamente con la extensión correspondiente al tipo MIME (por ejemplo, `.html`, `.json`, `.png`, `.pdf`).