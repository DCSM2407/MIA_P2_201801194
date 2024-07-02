# Manual Técnico - AVICAR

## Introducción
AviCar es una aplicación diseñada para gestionar viajes y alquiler de automóviles para turistas. Este manual técnico proporciona información detallada sobre la arquitectura, tecnologías y configuraciones necesarias para implementar y mantener el sistema AviCar.

## Arquitectura del Sistema
El sistema AviCar consta de tres componentes principales:
1. **Backend**: Desarrollado en NodeJS.
2. **Frontend**: Desarrollado utilizando un framework JavaScript (Angular, React, Vue).
3. **Gestor de Datos**: Utiliza archivos JSON.

## Requisitos Técnicos
1. **Backend**: NodeJS
2. **Frontend**: Angular, React o Vue
3. **Gestión de Datos**: Archivos JSON
4. **Servicios en la Nube**: AWS (Cognito, S3, EC2)
5. **Control de Versiones**: Git

## Servicios en la Nube
### MONGO DB
- Utilizado para el registro y autenticación de usuarios.
- Almacenamiento de la informacion.

### AWS S3
- Almacena fotos de perfil de los usuarios.
- Configurar buckets para almacenamiento seguro.

### AWS EC2
- Hospeda la aplicación backend y frontend.
- Configurar instancias para el despliegue de la aplicación.

## Configuración de Usuarios IAM
Crear usuarios IAM con permisos específicos para manejar servicios de AWS:
1. **Usuario para Cognito**: Permisos para gestionar el User Pool.
2. **Usuario para S3**: Permisos para gestionar los buckets de almacenamiento.
3. **Usuario para EC2**: Permisos para gestionar instancias y configuraciones.

## Estructura de Datos a Almacenar en JSON
### Ejemplo de Estructura de Usuarios
```json
{
    "usuarios": [
        {
            "id": 1,
            "nombre": "John",
            "apellido": "Doe",
            "usuario": "johndoe",
            "fotoPerfil": "url_a_la_foto",
            "correoElectronico": "john.doe@example.com",
            "contrasena": "hashed_password",
            "tipoUsuario": "turista"
        }
    ]
}
```
### Ejemplo de Estructura de Vuelos
```json
{
    "vuelos": [
        {
            "id": 1,
            "nombreAgencia": "Agencia 1",
            "ciudadOrigen": "Ciudad A",
            "ciudadDestino": "Ciudad B",
            "diasVuelo": ["Lunes", "Viernes"],
            "precioVuelo": 200
        }
    ]
}
```

### Ejemplo de Estructura de Autos
```json
{
    "autos": [
        {
            "id": 1,
            "nombreAgencia": "Agencia 2",
            "marca": "Toyota",
            "placa": "XYZ-123",
            "modelo": "Corolla",
            "precio": 50,
            "ciudadVehiculo": "Ciudad C"
        }
    ]
}
```

## Implementación del Backend
### Configuración del Entorno
1. Instalar NodeJS y npm.
2. Configurar un nuevo proyecto con npm init.
3. Instalar dependencias necesarias
**npm install express body-parser aws-sdk jsonfile**

### Ejemplo de Código para el Servidor


## Implementación del Frontend
### Configuración del Entorno
1. Instalar Angular, React o Vue CLI.
2. Crear un nuevo proyecto utilizando el CLI correspondiente.
3. Configurar servicios y componentes según las necesidades de la aplicación.
### Ejemplo de Configuración en Angular
1. Instalar Angular CLI:
**npm install -g @angular/cli**
2. Crear un nuevo proyecto:
**ng new avicar**
3. Crear componentes y servicios necesarios
**ng generate component login**
**ng generate service auth**

## Despliegue en AWS EC2
### Configuración de la Instancia
1. Crear una nueva instancia EC2 con Amazon Linux.
2. Instalar NodeJS y configurar el entorno.
3. Clonar el repositorio del proyecto desde Git.
4. Instalar dependencias y ejecutar el servidor

    **git clone https://github.com/usuario/avicar.git**
**cd avicar**
**npm install**
**npm start**

## Capturas de Pantalla y Descripcion
