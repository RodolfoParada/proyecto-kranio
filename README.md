#### crea, estructura y planifica el proyecto en 5 dias, dentro del archivo architecture.md que se encuentra en la carpeta docs.

#### frontend
# TaskFlow – Frontend

TaskFlow es una aplicación frontend desarrollada con Next.js que simula un sistema de gestión de tareas y proyectos.  
Este proyecto forma parte de una práctica enfocada en **arquitectura frontend, estado global y protección de rutas**.

##### Tecnologías utilizadas
- Next.js (Pages Router)
- React
- TypeScript
- Tailwind CSS
- Zustand (estado global)
- Jest + Testing Library (testing)
- ESLint

##### Estructura del proyecto
```
src/
├─ pages/
│  ├─ _app.tsx
│  ├─ index.tsx
│  ├─ login.tsx
│  └─ dashboard.tsx
├─ components/
│  ├─ Layout.tsx
│  ├─ AuthProvider.tsx
│  ├─ DashboardStats.tsx
│  └─ RecentActivity.tsx
├─ stores/
│  └─ authStore.ts
└─ styles/
   └─ globals.css
```

#### Autenticación
La aplicación implementa una **autenticación simulada (fake auth)** usando Zustand.
- El usuario puede iniciar sesión
- El estado se mantiene entre recargas
- Las rutas protegidas redirigen al login si no hay sesión activa

#### Dashboard
El dashboard muestra información simulada del usuario y actividad reciente, demostrando:
- Protección de rutas
- Uso de componentes reutilizables
- Manejo de estado global

#### Testing
Se incluye configuración de Jest y Testing Library para pruebas unitarias básicas.

#### Ejecución del proyecto
#### en la carpeta frontend (cd frontend) ejecutar
Instalar dependencias:
```bash
npm install
```

```levanta el proyecto
   npm run dev
```   

```levanta el proyecto
   npm run build
```   

#### Backend
##### Tecnologías utilizadas
- Node.js
- TypeScript
- Express
- Prisma
- JWT
- bcript
- Testing

##### Estructura del proyecto
```
backend/
├── src/
│   ├── config/             # Configuración de base de datos (Prisma) y variables globales
│   │   ├──database.ts
│   │   └── env.ts 
│   ├── controllers/        # Manejadores de peticiones HTTP (req, res)
│   │   ├── authController.ts
│   │   └── projectController.ts
│   ├── middleware/         # Validaciones de JWT y manejo de errores
│   │   └── auth.ts
│   ├── models/         # no lo uso
│   │   └── index.ts
│   ├── routes/             # Definición de endpoints y prefijos de ruta
│   │   ├── auth.ts
│   │   └── projects.ts  
│   ├── services/           # Lógica de negocio e interacción directa con Prisma
│   │   ├── authService.ts
│   │   └── projectService.ts
│   ├── utils/              # Funciones de ayuda (JWT, hash de contraseñas)
│   │   └── jwt.ts
│   ├── validators/         # Esquemas de validación (Joi o Zod)
│   │   └── authValidators.ts
│   │   └── projectValidators.ts
│   ├── app.ts              # Configuración de Express (sin el listen)
│   └── index.ts            # Punto de entrada y arranque del servidor
├── tests/
│   └── integration/        # Pruebas de integración (Jest + Supertest)
│       ├── auth.test.ts
│       └── projects.test.ts
├── prisma/                 # Esquema de la base de datos y migraciones
│   ├── schema.prisma
│   └── migrations/
│   └── prisma/
├── .env                    # Variables sensibles (No subir a Git)
├── .env.test                   
├── .gitignore              # Archivos excluidos de Git
├── jest.config.js          # Configuración de los tests
├── package-lock.json            
├── package.json            # Scripts y dependencias
└── tsconfig.json           # Configuración de TypeScript

```

#### Autenticación
La API implementa autenticación real basada en JWT.
- Registro e inicio de sesión de usuarios
- Contraseñas protegidas mediante hashing
- Generación y validación de tokens JWT
- Middleware que protege rutas privadas y valida la sesión del usuario

#### Gestión de Proyectos
El backend expone endpoints REST para la administración de proyectos asociados a un usuario.
- Creación, lectura, actualización y eliminación de proyectos (CRUD)
- Control de acceso: cada usuario solo puede acceder a sus propios proyectos
- Validación de existencia y propiedad de los recursos

#### Aquirtectura
La aplicación sigue una arquitectura modular y escalable.
- Separación clara entre controllers, services y middlewares
- Lógica de negocio aislada del manejo HTTP
- Uso de Prisma como capa de acceso a datos

#### Testing
Se implementan tests de integración para validar el comportamiento real del proyecto.
- Pruebas de autenticación (register / login)
- Pruebas de rutas protegidas
- Limpieza de base de datos entre tests
- Uso de Jest y Supertest

#### Ejecución del proyecto
#### en la carpeta backend (cd backend) ejecutar
Instalar dependencias:
```bash
npm install
```

```levanta el proyecto
   npm run dev
```   

```visualiza el testing
   npm test
```   


#### Integración 

##### cypress instalación global
```
npm install -g cypress
```
##### se levanta cypress
```
npx cypress open
```

##### cd frontend instalar
```
npm install axios
```
```
mkdir cypress/fixtures cypress/integration
```

##### cd backend instalar
```
npm install supertest
```

#### levantar el backend y el frontend
```
npm run dev
```

#### endopoints que muestran la comunicación del backend al frontend
```
http://localhost:4000/api
```
```
http://localhost:4000/api/auth
```
```
http://localhost:4000/api/projects
```

#### instalación clonar el proyecto
#### cd backend instalar
    ```
    npm install
    ```
#### levantar el backend
```
npm run dev
```    
#### cd frontend instalar
    ```
    npm install
    ```
#### levantar el frontend
```
npm run dev
```    
#### se debe lebantar el backend y luego el frontend para probar los endpoits.



#### Deploy del backend en el render

#### en el navegador 
  ```
  https://proyecto-kranio-backend.onrender.com/api
  ```
  ```
  https://proyecto-kranio-backend.onrender.com/api/auth
  ```
#### este endpoint se visualiza con error en local no sucede
  ```
https://proyecto-kranio-backend.onrender.com/api/projects
```