# 📱 Challenge React Native

Aplicación desarrollada con **Expo + React Native**, con login básico, feed de comentarios y listado de productos con filtros.

---

## 🚀 Setup & Build

```bash
# Instalar dependencias
npm install

# Levantar en entorno Expo
npm start

# Android
npm run android

# iOS (macOS)
npm run ios

## 🧭 Navegación
- **RootNavigator** como punto de entrada.  
- **Stack** inicial para manejar login → Tabs.  
- **Bottom Tabs** con dos secciones:  
  - **Feed** (default)  
  - **Productos**

---

## ✨ Funcionalidades

### 🔐 Login
- Credenciales hardcodeadas: `admin / 1234`.  
- Persistencia de sesión con `AsyncStorage`.  
- Cierre de sesión desde perfil.  

### 💬 Feed
- Lista con avatar/iniciales, nombre, fecha y comentario.  
- Pull-to-refresh y estados de carga/vacío.  
- Datos mock en `assets/feed.json`.  

### 🛒 Productos
- Listado con imagen, título y precio.  
- Filtros por búsqueda y rango de precio.  
- Paginación con control de duplicados.  
- Pull-to-refresh y estados de carga/vacío.  

### 💳 Compra simulada
- Checkout ficticio con feedback visual (snackbar).  

---

## 🧠 Decisiones técnicas
- **Estado global:** Redux Toolkit (escalable y claro).  
- **Estilos:** styled-components (estética consistente).  
- **Datos:** mocks locales en `assets/`.  
- Se omitió React Query por simplicidad y tiempo(fetching manual con paginación).  

---

## ⚠️ Limitaciones conocidas
- Algunos `styled-components` quedaron definidos dentro de los mismos componentes (no alcanzó el tiempo para separarlos en archivos propios).  
- No se implementó **React Query** por cuestiones de tiempo (el fetching se maneja de forma manual).  
