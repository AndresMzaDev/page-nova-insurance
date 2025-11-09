# Nova Insurance Group - Website

Este es el sitio web oficial de Nova Insurance Group, construido con Next.js 16, TypeScript y Tailwind CSS.

## 🚀 Características

- ✅ Diseño moderno y responsivo
- ✅ Soporte multi-idioma (Inglés/Español) con cambio dinámico de idioma
- ✅ Optimizado para SEO
- ✅ Formulario de cotización funcional con FormSubmit
- ✅ Centro de conocimiento (Knowledge Center) con artículos sobre seguros
- ✅ Página "Acerca de" dedicada
- ✅ Animaciones suaves y transiciones
- ✅ 100% TypeScript para máxima seguridad de tipos
- ✅ Navegación fluida con scroll suave

## 📦 Instalación

El proyecto ya está configurado. Para iniciarlo:

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🔧 Configuración del Formulario de Contacto

El formulario de cotización utiliza **FormSubmit** para el envío de emails. La configuración se encuentra en el componente `QuoteForm.tsx`.

Para cambiar el email de destino, edita la prop `email` en:

- `app/page.tsx` (línea 1012)
- `app/components/QuoteForm.tsx` (valor por defecto)

El formulario está configurado para enviar a: `andes_nmeza@hotmail.com`

## 📝 Personalización

### Cambiar Contenido

- **Traducciones**: Edita el objeto `translations` en `app/page.tsx` (líneas 31-373)
- **Artículos del Knowledge Center**: Edita `app/data/knowledge-center.json`
- **Estilos**: Modifica las clases de Tailwind o `app/globals.css`
- **Imágenes**: Reemplaza las imágenes en la carpeta `public/`

### Información de Contacto

La dirección y teléfono se pueden cambiar en la sección de Contact del componente `app/page.tsx`.

Dirección actual:

```
10171 Two Notch Rd, Suite C
Columbia, SC 29229
Teléfono: (803) 555-0123
Email: info@novainsurancegroup.com
```

## 🌐 Despliegue

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
netlify deploy --prod --dir=.next
```

## 📚 Estructura del Proyecto

```
page-nova-insurance/
├── app/
│   ├── about/
│   │   └── page.tsx              # Página "Acerca de"
│   ├── components/
│   │   └── QuoteForm.tsx         # Componente del formulario de cotización
│   ├── data/
│   │   └── knowledge-center.json # Datos de los artículos del Knowledge Center
│   ├── knowledge-center/
│   │   ├── [slug]/
│   │   │   └── page.tsx          # Página dinámica de artículos
│   │   └── page.tsx              # Listado de artículos
│   ├── layout.tsx                # Layout principal con metadata
│   ├── page.tsx                  # Página principal con todos los componentes
│   ├── globals.css               # Estilos globales
│   └── favicon.ico
├── public/                        # Archivos estáticos (imágenes, logos)
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

## 🛠️ Tecnologías Utilizadas

- **Next.js 16**: Framework React con App Router
- **TypeScript**: Tipado estático
- **Tailwind CSS 4**: Estilos utilitarios
- **Lucide React**: Iconos modernos
- **React 19**: Hooks (useState, useContext, useEffect)
- **FormSubmit**: Servicio de envío de formularios

## 📄 Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm run start`: Inicia el servidor de producción
- `npm run lint`: Ejecuta el linter

## 📞 Soporte

Para preguntas o soporte, contacta a Nova Insurance Group:

- Email: info@novainsurancegroup.com
- Teléfono: (803) 555-0123
- Dirección: 10171 Two Notch Rd, Suite C, Columbia, SC 29229

## 📄 Licencia

© 2025 Nova Insurance Group. Todos los derechos reservados.
