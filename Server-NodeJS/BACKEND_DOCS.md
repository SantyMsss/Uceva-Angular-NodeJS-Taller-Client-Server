# Backend Documentation (Node.js & Express)

Este es el documento oficial técnico para el servidor (backend) desarrollado como parte del entorno Cliente-Servidor.

## Arquitectura y Estructura
El proyecto sigue una arquitectura organizada en capas, separando las responsabilidades de negocio de las rutas de HTTP, facilitando la escalabilidad y legibilidad.

```
Server-NodeJS/
├── src/
│   ├── app.ts                  # Punto de inicio (inicializa express y configuraciones)
│   ├── config/                 # Configuraciones (Variables de entorno, Swagger)
│   ├── domain/                 # Entidades del dominio e interfaces (Modelos)
│   │   ├── erros/              # Manejo de errores custom
│   │   └── interfaces/         # Definición de las interfaces de Typescript
│   └── presentation/           # Capa de presentación (Endpoints)
│       ├── routes.ts           # Enrutador central (AppRoutes)
│       ├── server.ts           # Inicialización del servidor HTTPS
│       └── modules/            # Módulos del API (Controladores, Rutas y Servicios)
└── BACKEND_DOCS.md             # Esta documentación
```

## Requisitos Previos e Instalación
Para poder ejecutar este proyecto debes contar con Node.js `>= 18` instalado.

1. **Instalar dependencias:**  
Dentro del directorio `Server-NodeJS/` ejecuta:  
`npm install`

2. **Variables de entorno (.env):**  
Asegúrate de contar con el archivo de variables `.env` basándote en un posible `.env.template` u opciones que dicte el entorno como `PORT=3000`. Utiliza `env-var` en `config/envs.ts` como parte de la estrategia preexistente de este proyecto para parsearlos de manera segura (por cuestiones academicas lo dejo en el readme y sin el .gitignore).

## Despliegue y Ejecución

*   **En Desarrollo:** `npm run start` (Levanta el servidor con ts-node-dev usando respawn y escuchando los cambios en los archivos)
*   **En Producción:** Compilar el código con `tsc` y luego correr el JS usando Node nativo.

## Descripción de los Nuevos Módulos (Corte 2 - Taller)

Se añadieron 3 módulos para extender la arquitectura base y dotar de más funciones al e-commerce/aplicación. Todos ellos regresan datos ficticios simulados gracias a `faker.js`.

1.  **Categories (`/api/categories`)**: Maneja categorías de elementos, descripciones y jerarquización ficticia.
2.  **Stores (`/api/stores`)**: Módulo de tiendas/sedes, con información sobre las ubicaciones, nombres y direcciones de negocio.
3.  **Orders (`/api/orders`)**: Entidad que engloba un listado de transacciones entre usuarios, el total facturado y estados realistas de compra ("pending", "completed", "cancelled").

## Listado de Endpoints y Documentación Swagger

Toda la documentación técnica se genera dinámicamente con Swagger.  
**Puedes acceder a la UI intercativa del API en la ruta central del backend:**  
`GET /api-docs`

Alternativamente, el listado directo de todas las APIs definidas:

| Método  | Ruta                  | Descripción                            |
| :-----: | :-------------------: | :------------------------------------- |
| **GET** | `/api/users/:count`   | Genera y lista `:count` usuarios      |
| **GET** | `/api/products/:count`| Genera y lista `:count` productos      |
| **GET** | `/api/categories`      | Obtiene todas las categorías simuladas |
| **GET** | `/api/categories/:id`  | Obtiene una categoría por su ID         |
| **POST**| `/api/categories`      | Crea una nueva categoría                 |
| **PUT** | `/api/categories/:id`  | Actualiza una categoría                 |
| **DELETE**|`/api/categories/:id`  | Elimina una categoría                   |
| **GET** | `/api/stores`          | Obtiene todas las tiendas              |
| **GET** | `/api/stores/:id`      | Obtiene una tienda por su ID            |
| **POST**| `/api/stores`          | Crea una nueva tienda                    |
| **PUT** | `/api/stores/:id`      | Actualiza una tienda                    |
| **DELETE**|`/api/stores/:id`      | Elimina una tienda                      |
| **GET** | `/api/orders`          | Obtiene todos los pedidos              |
| **GET** | `/api/orders/:id`      | Obtiene un pedido por su ID            |
| **POST**| `/api/orders`          | Crea un nuevo pedido                     |
| **PUT** | `/api/orders/:id`      | Actualiza un pedido                     |
| **DELETE**|`/api/orders/:id`      | Elimina un pedido                       |
