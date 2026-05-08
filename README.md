# Distri Leal 🛒

> Proyecto de portafolio — Sitio web para distribuidora ficticia de alimentos y snacks.

[![Netlify Status](https://api.netlify.com/api/v1/badges/distrileal/deploy-status)](https://distrileal.netlify.app/)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Vanilla-1572B6?logo=css3&logoColor=white)

## 🌐 Demo en vivo

**[https://distrileal.netlify.app/](https://distrileal.netlify.app/)**

---

## 📋 Acerca del proyecto

Sitio web desarrollado con **React** y **Vite** que simula la presencia digital de una distribuidora de alimentos y productos de consumo. Incluye catálogo de productos organizado por categorías y un diseño responsive construido con CSS vanilla.

> **Nota:** Este es un proyecto ficticio con fines educativos y de portafolio. Los productos y datos mostrados son de ejemplo y no representan una empresa real.

---

## 🚀 Tech Stack

| Tecnología | Versión | Uso |
|---|---|---|
| React | 19 | UI y componentes |
| Vite | 7 | Bundler y servidor de desarrollo |
| React Router DOM | 7 | Navegación entre vistas |
| CSS3 (Vanilla) | — | Estilos y diseño responsive |

---

## ✨ Características

- Catálogo de productos con filtrado por categorías
- Diseño responsive (mobile-first)
- UI limpia con CSS vanilla sin dependencias de UI frameworks
- Componentes reutilizables organizados por feature
- Datos de productos desacoplados de los componentes

---

## 📁 Estructura del proyecto

```
src/
├── App.jsx
├── main.jsx
├── styles/
│   └── globals.css
├── layouts/
│   ├── Header/
│   ├── Footer/
│   ├── MainLayout/
│   ├── CategoriesSection/
│   └── FeaturedProducts/
└── data/
    └── products.js
```

---

## ⚙️ Instalación y uso local

### Requisitos

- Node.js 18+
- npm o bun

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/JeisonRedondo/distri-leal.git
cd distri-leal

# 2. Instalar dependencias
npm install
# o con bun
bun install

# 3. Iniciar servidor de desarrollo
npm run dev
```

### Scripts disponibles

```bash
npm run dev      # Servidor de desarrollo (con --host para red local)
npm run build    # Build para producción → genera carpeta dist/
npm run preview  # Previsualizar el build de producción
npm run lint     # Linting con ESLint
```

---

## 📦 Deploy

El proyecto está desplegado en **Netlify** con deploy continuo desde la rama `main`.

Build command: `npm run build`  
Publish directory: `dist`

---

## 📄 Licencia

MIT — ver [LICENSE](./LICENSE) para más detalles.
