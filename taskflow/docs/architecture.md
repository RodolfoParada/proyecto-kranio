#### Planificación: 

##### Dia 1: 
 ##### crear la estructura del proyecto
   ```# Crear estructura del proyecto
   mkdir taskflow && cd taskflow
   mkdir frontend backend database infrastructure docs
   ```
   ```# Inicializar repositorios
   cd frontend && npx create-next-app@latest . --typescript --tailwind
   cd ../backend && npm init -y && npm install express typescript
   ```
   ```# Instalar herramientas de desarrollo
   npm install -g prisma // se instalo de forma global luego dentro del frontend se inicializo el siguiente comando npx prisma init
   npm install -g vercel railway // se instalo de forma global y dentro de fronstend se inicialializo el siguiente comando vercel
   ```
   ```# Crear archivos base
   touch README.md docs/architecture.md docs/api.md
   ```
 ##### el proyecto es un sistema de tickets
   

##### Dia 2:
 ##### instalar las dependecnias
   ##### Instalar dependencias del frontendcd 
   ##### frontend
   ```
   npm install next react react-dom typescript tailwindcss
   npm install zustand axios lucide-react
   npm install -D @testing-library/react @testing-library/jest-dom @testing-library/user-event
   npm install -D jest jest-environment-jsdom eslint eslint-config-next
   ```
   ##### Configurar Tailwind
   ```
   npx tailwindcss init -p
   ```
   ##### Configurar testing
   ```
   touch jest.config.js
   ```


##### Dia 3:
   ##### instalar las dependencias
   ##### Instalar dependencias del backend
   ##### cd backend
   ```
   npm install express prisma @prisma/client bcryptjs jsonwebtoken
   npm install cors helmet express-rate-limit joi winston
   npm install -D typescript @types/node tsx nodemon jest supertest
   npm install -D @types/express @types/bcryptjs @types/jsonwebtoken
   npm install -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser
   ```
##### Inicializar Prisma
   ```
   npx prisma init
   npx prisma generate
   ```
#### Crear estructura de carpetas
    ```
    mkdir -p src/{controllers,models,routes,services,middleware,config,utils,validators} 
    ```

##### Dia 4:
  ##### instalar las dependencias
  ##### Instalar dependencias de testing e integración
   ```
   cd frontend && npm install axios
   cd ../backend && npm install supertest
   npm install -g cypress
   ```
   ##### Configurar Cypress
   ```
   cd frontend && npx cypress install
   mkdir cypress/fixtures cypress/integration
   ```
   ##### Variables de entorno
   ```
   cp .env.example .env
   ```
   ##### Configurar API URLs, database, secrets


##### Dia 5:
  ##### instalar las dependencias
  ##### Instalar herramientas de despliegue
  ```
  npm install -g vercel railway pm2
  ```
  ###### Configurar dominios
  ##### 1. Comprar dominio (Namecheap, GoDaddy, etc.)
  ##### 2. Configurar DNS
  ##### 3. Obtener SSL certificates
  ##### 4. Configurar CDN (Cloudflare)

  ##### Crear portafolio
  ```
  npx create-next-app portfolio --typescript --tailwind
  ```
  ```
  cd portfolio
  npm install lucide-react
  ```
##### Desplegar
```
vercel --prod
```
```
railway login
```
```
railway link
```
```
railway up
```