# 🛒 TechNovaStore - Plataforma de E-Commerce de Tecnología

Una plataforma de e-commerce moderna y escalable especializada en productos tecnológicos, construida con las últimas tecnologías frontend.

## 📋 Tabla de Contenidos

- [Características](#características)
- [Arquitectura](#arquitectura)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación](#instalación)
- [Uso](#uso)
- [Características Implementadas](#características-implementadas)
- [Necesidad de Backend](#necesidad-de-backend)

---

## ✨ Características

### **Frontend**

- ✅ Catálogo dinámico con múltiples categorías
- ✅ Sistema avanzado de filtrado (precio, marca, RAM, almacenamiento)
- ✅ Detalles de productos completos con especificaciones técnicas
- ✅ Comparador de productos en tiempo real
- ✅ Carrito de compras
- ✅ Lista de deseos
- ✅ Búsqueda y filtrado inteligente
- ✅ Dashboard de usuario
- ✅ Sistema de reseñas y calificaciones
- ✅ Tema oscuro/claro
- ✅ Paginación optimizada
- ✅ Interfaz responsiva

### **Datos Simulados**

- 📦 **39 productos** distribuidos en 4 categorías principales
- 💻 **Laptops**: 15 productos (MacBook, Dell, ASUS, Lenovo, HP, etc.)
- 📱 **Teléfonos**: 8 productos (iPhone, Samsung, Google, OnePlus, etc.)
- 🎧 **Audio**: 8 productos (Sony, Bose, Apple AirPods, Sennheiser, etc.)
- 🎁 **Accesorios**: 8 productos (Power banks, cables, protectores, etc.)

---

## 🏗️ Arquitectura

### **Arquitectura General**

```
┌─────────────────────────────────────────────────┐
│           REACT + VITE (Frontend)               │
├─────────────────────────────────────────────────┤
│                                                  │
│  ┌──────────────────────────────────────────┐  │
│  │        React Components (JSX)             │  │
│  │  - Pages (Home, Catalog, ProductDetail)  │  │
│  │  - Layout (Header, Sidebar, Footer)      │  │
│  │  - UI Components (Cards, Pagination)     │  │
│  └──────────────────────────────────────────┘  │
│                      ↓                          │
│  ┌──────────────────────────────────────────┐  │
│  │        Custom Hooks & Logic               │  │
│  │  - useCatalogPaginationLogic              │  │
│  │  - useFilterSidebarLogic                  │  │
│  │  - useWishlistLogic                       │  │
│  │  - useCardSummaryLogic                    │  │
│  └──────────────────────────────────────────┘  │
│                      ↓                          │
│  ┌──────────────────────────────────────────┐  │
│  │      Data Layer (products.js)             │  │
│  │  - PRODUCTS (Base de datos local)         │  │
│  │  - Helper functions (filter, search)      │  │
│  └──────────────────────────────────────────┘  │
│                      ↓                          │
│  ┌──────────────────────────────────────────┐  │
│  │     Styled-Components & Theming           │  │
│  │  - Dark/Light mode                        │  │
│  │  - Responsive design                      │  │
│  └──────────────────────────────────────────┘  │
│                                                  │
└─────────────────────────────────────────────────┘
                        ↓
          [NECESITA CONECTARSE A BACKEND]
```

### **Flujo de Datos Actual (Frontend)**

```
User Interaction
       ↓
React Component State
       ↓
Custom Hooks (useCatalogPaginationLogic, useFilterSidebarLogic)
       ↓
Filter/Sort Logic
       ↓
Data from products.js (Mock Data)
       ↓
Styled Components Rendering
       ↓
UI Update
```

---

## 🛠️ Tecnologías Utilizadas

### **Core Frontend**

| Tecnología            | Versión | Propósito                             |
| --------------------- | ------- | ------------------------------------- |
| **React**             | 18.x    | Librería de UI, componentes reactivos |
| **Vite**              | 5.x     | Build tool ultra-rápido, dev server   |
| **React Router**      | 6.x     | Routing y navegación SPA              |
| **Styled-Components** | 6.x     | CSS-in-JS para estilos dinámicos      |

### **Herramientas de Desarrollo**

| Herramienta   | Propósito                            |
| ------------- | ------------------------------------ |
| **ESLint**    | Linting y validación de código       |
| **Babel/SWC** | Transpilación de código moderno      |
| **Vite HMR**  | Hot Module Replacement en desarrollo |

### **Librerías de UI & Iconos**

| Librería              | Propósito                                    |
| --------------------- | -------------------------------------------- |
| **React Icons**       | Iconos SVG (Material Design, Font Awesome)   |
| **Styled-Components** | Sistema de theming y componentes estilizados |

### **Estado & Lógica**

| Característica       | Implementación                               |
| -------------------- | -------------------------------------------- |
| **State Management** | React Hooks (useState, useMemo, useCallback) |
| **Context API**      | Podría usarse para estado global             |
| **Custom Hooks**     | Lógica reutilizable separada                 |
| **Memoization**      | useMemo, useCallback para optimización       |

---

## 📁 Estructura del Proyecto

```
TechNovaStore/
├── src/
│   ├── App.jsx                           # Componente raíz, routing principal
│   ├── main.jsx                          # Punto de entrada
│   ├── GlobalStyles.js                   # Estilos globales
│   │
│   ├── Componets/                        # Componentes reutilizables
│   │   ├── layout/                       # Componentes de layout
│   │   │   ├── Header/                   # Navegación principal
│   │   │   ├── Newsletter/               # Suscripción newsletter
│   │   │   ├── Catalog/
│   │   │   │   └── FilterSidebar/        # Sistema de filtrados avanzados
│   │   │   ├── Home/                     # Componentes home
│   │   │   ├── ProductDetail/            # Detalles del producto
│   │   │   └── UserDashboard/            # Dashboard de usuario
│   │   │
│   │   ├── ui/                           # Componentes UI puros
│   │   │   ├── Pagination/               # Paginación inteligente
│   │   │   ├── ProductCard/              # Card de producto
│   │   │   ├── CatalogProductCard/       # Card en catálogo
│   │   │   ├── CartItem/                 # Item del carrito
│   │   │   ├── Breadcrumbs/              # Rutas de navegación
│   │   │   └── ProductGallery/           # Galería de imágenes
│   │   │
│   │   └── theme/                        # Temas de aplicación
│   │       └── themes.js                 # Configuración dark/light
│   │
│   ├── Pages/                            # Páginas principales
│   │   ├── TechStoreHomePage/            # Página de inicio
│   │   ├── TechStoreCatalog/             # Catálogo de productos
│   │   │   ├── TechStoreCatalog.jsx
│   │   │   ├── useCatalogPaginationLogic.js  # Hook de paginación
│   │   │   └── Styled.TechStoreCatalog.js
│   │   ├── TechStoreProductDetail/       # Detalles del producto
│   │   ├── TechStoreCardSummary/         # Resumen del carrito
│   │   ├── TechStoreCompare/             # Comparador de productos
│   │   ├── TechStoreWishlist/            # Lista de deseos
│   │   └── TechStoreUserAccountDashboard/  # Dashboard
│   │
│   └── Data/                             # Capa de datos
│       ├── products.js                   # Base de datos mock (39 productos)
│       ├── home.js                       # Datos home
│       ├── catalog.js                    # Datos catálogo
│       ├── compare.js                    # Datos comparación
│       ├── wishlist.js                   # Datos wishlist
│       └── index.js                      # Exportaciones
│
├── public/                               # Archivos estáticos
├── package.json                          # Dependencias
├── vite.config.js                        # Configuración Vite
├── eslint.config.js                      # Configuración ESLint
└── README.md                             # Este archivo
```

---

## 💾 Capas de Datos

### **Data Layer (products.js)**

```javascript
export const PRODUCTS = {
  // 39 productos organizados por ID
  101: { id, brand, name, category, price, specs, ... },
  102: { ... },
  ...
}

// Helper functions
export const filterProducts(filters)      // Filtra productos
export const getCategories()              // Obtiene todas las categorías
export const getBrandsByCategory(cat)     // Marcas por categoría
export const getPriceRange(category)      // Rango de precios
export const getStorageOptions(cat)       // Opciones de almacenamiento
export const getRamOptions(category)      // Opciones de RAM
```

---

## 🚀 Instalación

### **Requisitos Previos**

- Node.js 16+
- npm o yarn

### **Pasos de Instalación**

```bash
# 1. Clonar el repositorio
git clone <repo-url>
cd TechNovaStore

# 2. Instalar dependencias
npm install

# 3. Ejecutar en desarrollo
npm run dev

# 4. Compilar para producción
npm run build

# 5. Previsualizar build
npm run preview
```

---

## 📖 Uso

### **Navegación Principal**

- **Home**: Página de inicio con categorías destacadas
- **Laptops/Phones/Audio/Accessories**: Catálogos por categoría
- **Producto**: Detalles completos con especificaciones
- **Carrito**: Ver y gestionar items
- **Wishlist**: Guardar productos favoritos
- **Comparar**: Comparar múltiples productos
- **Dashboard**: Panel de usuario

### **Funcionalidades Disponibles**

#### **Catálogo & Filtrado**

```javascript
// Seleccionar categoría desde Header
// Filtros automáticos se adaptan a la categoría
// Aplicar filtros: precio, marca, RAM, almacenamiento
// Ver resultados en tiempo real
```

#### **Búsqueda de Productos**

```javascript
// Barra de búsqueda en Header
// Filtrado dinámico por nombre y specs
```

#### **Paginación Inteligente**

- Primera página: muestra 1, 2
- Página 2: muestra 1, 2 (sin repetición)
- Páginas centrales: muestra [...] números [...]
- Última página: muestra n-1, n

---

## 🎯 Características Implementadas

### **1. Sistema de Categorías Dinámicas**

```javascript
const CATEGORY_MAP = {
  laptops: "Laptops",
  phones: "Phones",
  audio: "Audio",
  accessories: "Accessories",
};
```

- ✅ URLs dinámicas `/catalog/:category`
- ✅ Cambio automático de filtros por categoría
- ✅ Conteo de productos por categoría

### **2. Filtrado Avanzado**

```javascript
// Filtro de Precio
- Input numérico min/max
- Rango dinámico por categoría

// Filtro de Marcas
- Solo marcas disponibles en la categoría
- Se actualiza dinámicamente

// Filtro de RAM/Storage
- Opciones basadas en specs reales
- Se oculta si no hay opciones
```

### **3. Hooks Personalizados**

#### **useCatalogPaginationLogic**

```javascript
const {
  currentPage,
  totalPages,
  totalItems,
  productsPage,
  sortBy,
  handlePageChange,
  handleSortChange,
} = useCatalogPaginationLogic({
  productType: "Phones",
  pageSize: 6,
  appliedFilters: filters,
});
```

#### **useFilterSidebarLogic**

```javascript
const {
  filters,
  openSections,
  categories,
  brands,
  ramOptions,
  storageOptions,
  priceRange,
  toggleSection,
  handleCheckboxChange,
  handleReset,
} = useFilterSidebarLogic(currentCategory);
```

### **4. Componentes Reutilizables**

| Componente             | Ubicación                       | Props                            |
| ---------------------- | ------------------------------- | -------------------------------- |
| **ProductCard**        | `ui/ProductCard/`               | id, brand, title, price          |
| **CatalogProductCard** | `ui/CatalogProductCard/`        | Propiedades extendidas           |
| **Pagination**         | `ui/Pagination/`                | currentPage, totalPages          |
| **FilterSidebar**      | `layout/Catalog/FilterSidebar/` | currentCategory, onFiltersChange |
| **Header**             | `layout/Header/`                | navItems, onToggleTheme          |

### **5. Theming & Darkmode**

```javascript
// En GlobalStyles.js & themes.js
- Light Mode
- Dark Mode
- Transiciones suaves
- Variables CSS dinámicas
```

---

## ⚠️ NECESIDAD DE BACKEND

### **Limitaciones Actuales (Frontend-Only)**

❌ **No hay persistencia de datos**

- Todos los datos están en mock en `products.js`
- Los cambios se pierden al recargar
- No hay base de datos real

❌ **No hay autenticación**

- Sin login/logout real
- Sin gestión de sesiones
- Sin JWT o tokens

❌ **No hay carrito real**

- El carrito no se guarda
- No hay gestión de inventario
- No se puede completar compra

❌ **No hay búsqueda en servidor**

- La búsqueda es local solamente
- Sin índices de búsqueda
- Sin recomendaciones basadas en datos

❌ **Sin análisis ni reportes**

- No hay tracking de vistas
- Sin datos de vendedor
- Sin análisis de comportamiento

❌ **Escalabilidad limitada**

- Con millones de productos sería lento
- Sin optimización de queries
- Sin caching estratégico

---

## 🔧 Arquitectura Backend Necesaria

### **Stack Recomendado**

```
Backend Ideal:
├── Node.js + Express/NestJS
├── PostgreSQL o MongoDB
├── Redis (caching)
├── JWT Authentication
└── REST API o GraphQL

Alternativas:
├── Python + Django/FastAPI + PostgreSQL
├── Java + Spring Boot + PostgreSQL
└── Go + Gin + PostgreSQL
```

### **API Endpoints Necesarios**

```javascript
// Autenticación
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/logout
POST   /api/auth/refresh-token

// Productos
GET    /api/products                    // Todos
GET    /api/products/:id                // Uno específico
GET    /api/products/category/:cat      // Por categoría
POST   /api/products                    // Crear (admin)
PUT    /api/products/:id                // Actualizar (admin)
DELETE /api/products/:id                // Eliminar (admin)

// Filtrado avanzado
POST   /api/products/search
POST   /api/products/filter

// Carrito
GET    /api/cart
POST   /api/cart/items
PUT    /api/cart/items/:id
DELETE /api/cart/items/:id

// Pedidos
GET    /api/orders
POST   /api/orders
GET    /api/orders/:id

// Wishlist
GET    /api/wishlist
POST   /api/wishlist/:product-id
DELETE /api/wishlist/:product-id

// Usuarios
GET    /api/users/profile
PUT    /api/users/profile
GET    /api/users/orders

// Reseñas
GET    /api/reviews/:product-id
POST   /api/reviews/:product-id
```

### **Modelo de Base de Datos**

```sql
-- Tablas principales necesarias
├── users (id, email, password, profile)
├── products (id, name, price, category, stock)
├── categories (id, name, description)
├── brands (id, name)
├── specifications (id, product_id, spec_name, spec_value)
├── cart_items (id, user_id, product_id, quantity)
├── orders (id, user_id, total, status, created_at)
├── order_items (id, order_id, product_id, quantity, price)
├── wishlist (id, user_id, product_id)
└── reviews (id, product_id, user_id, rating, comment)
```

### **Autenticación & Seguridad**

```javascript
// JWT Flow
1. Usuario hace login → Backend genera JWT
2. Frontend guarda JWT en localStorage/cookie
3. Cada request incluye: Authorization: Bearer <token>
4. Backend valida token antes de procesar
5. Token expira después de X tiempo → refresh token
```

---

## 📊 Estadísticas del Proyecto

```
Frontend Stats:
├── React Components: 25+
├── Custom Hooks: 4
├── Styled Components: 50+
├── Líneas de Código: 3000+
├── Productos Mock: 39
├── Categorías: 4
└── Páginas: 8

Productos Distribuidos:
├── Laptops: 15 productos (Apple, Dell, ASUS, etc.)
├── Phones: 8 productos (Apple, Samsung, Google, OnePlus, etc.)
├── Audio: 8 productos (Sony, Bose, Apple, Sennheiser, etc.)
└── Accessories: 8 productos (Power banks, cables, protectores)
```

---

## 🎓 Próximos Pasos

### **Corto Plazo (Sin Backend)**

- [ ] Persistencia con LocalStorage
- [ ] Más datos de productos
- [ ] Búsqueda mejorada
- [ ] Más animaciones

### **Largo Plazo (Con Backend)**

- [ ] Implementar API REST
- [ ] Autenticación real
- [ ] Base de datos
- [ ] Sistema de pagos
- [ ] Gestión de inventario
- [ ] Admin panel
- [ ] Notificaciones por email
- [ ] Analytics

---

## 📝 Licencia

Este proyecto es de código abierto bajo licencia MIT.

---

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para cambios grandes:

1. Fork el repositorio
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📞 Contacto

Para preguntas o sugerencias, abre un issue en el repositorio.

---

**Construido con ❤️ usando React + Vite + Styled-Components**
