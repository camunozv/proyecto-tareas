# Aplicación de Lista de Tareas

Este proyecto consiste en:
- **Backend**: API NestJS para gestión de tareas
- **Frontend**: Aplicación móvil en Flutter

## Requisitos Previos

- Node.js (versión 16 o superior)
- npm o yarn
- SDK de Flutter
- SDK de Dart
- PostgreSQL (u otra base de datos de preferencia)

## Configuración del Backend (NestJS)

### 1. Instalar dependencias

```bash
cd backend
npm install
```

### 2. Configuración de la base de datos

Crear un archivo `.env` en la carpeta `backend`:

```env
DATABASE_URL=postgresql://usuario:contraseña@localhost:5432/todo_db
PORT=3000
```

### 3. Ejecutar migraciones de la base de datos

```bash
npm run typeorm migration:run
```

### 4. Iniciar el servidor de desarrollo

```bash
npm run start:dev
```

La API estará disponible en `http://localhost:3000`

### Endpoints de la API

| Método | Endpoint       | Descripción              |
|--------|---------------|--------------------------|
| GET    | /tasks        | Obtener todas las tareas |
| GET    | /tasks/:id    | Obtener una tarea específica |
| POST   | /tasks        | Crear una nueva tarea    |
| PATCH  | /tasks/:id    | Actualizar una tarea     |
| DELETE | /tasks/:id    | Eliminar una tarea       |

## Configuración del Frontend (Flutter)

### 1. Instalar dependencias

```bash
cd frontend
flutter pub get
```

### 2. Configurar URL base de la API

Editar `lib/config.dart`:

```dart
const String apiBaseUrl = 'http://localhost:3000';
```

### 3. Ejecutar la aplicación

Para web:
```bash
flutter run -d chrome
```

Para Android:
```bash
flutter run -d android
```

Para iOS:
```bash
flutter run -d ios
```

## Ejecutar Ambas Aplicaciones Juntas

1. Abrir dos terminales
2. En la primera terminal:
```bash
cd backend && npm run start:dev
```
3. En la segunda terminal:
```bash
cd frontend && flutter run -d chrome
```

## Notas de Desarrollo

- El backend genera automáticamente documentación Swagger en `http://localhost:3000/api`
- Hot reload está activado tanto para frontend como backend durante el desarrollo
- El backend usa TypeORM para operaciones con la base de datos
- El frontend usa el paquete http para comunicación con la API

## Solución de Problemas

Si encuentras problemas de CORS:
1. Editar `backend/src/main.ts`
2. Añadir configuración CORS:

```typescript
app.enableCors({
  origin: 'http://localhost:<puerto-flutter>',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
});
```
