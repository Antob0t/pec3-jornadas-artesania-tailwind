# II Jornadas de Artesanía - PEC 3

Proyecto desarrollado como parte de la asignatura de desarrollo web, centrado en la migración de un sitio web estático a una arquitectura **Utility-First CSS** utilizando **Tailwind CSS**.

## Descripción del Proyecto
Este proyecto reconstruye el sitio web de las "II Jornadas de Artesanía en Alcalá del Júcar" (desarrollado originalmente en la PEC 2). El objetivo principal ha sido la adopción de Tailwind CSS (v4) para gestionar el diseño, eliminando dependencias de librerías de componentes (Bootstrap) y optimizando el código mediante técnicas de **Atomic CSS**, componentes reutilizables con `posthtml-include` y la creación de utilidades personalizadas mediante `@apply`.

El resultado es un sitio web **Neo-brutalista**, totalmente responsive, con código limpio y modularizado.

## Características Técnicas
- **Framework:** Tailwind CSS v4.
- **Preprocesador:** CSS para la organización de capas y variables.
- **Modularización:** Uso de `posthtml-include` para componentes (Header, Footer, Tarjetas, Migas de pan, etc.).
- **Diseño:** Estilo Neo-brutalista con sombras complejas y bordes definidos.
- **IA Generativa:** Implementación de páginas adicionales asistidas por IA para el diseño UI/UX.

## Estructura del Proyecto
```text
├── dist/                # Archivos compilados para producción
├── src/                 # Código fuente
│   ├── assets/          # Imágenes y estilos (Sass)
│   ├── views/           # Componentes reutilizables (HTML)
│   └── index.html       # Página principal
├── .parcel-cache/       # Caché de compilación
├── package.json         # Dependencias y scripts
└── README.md            # Documentación del proyecto