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