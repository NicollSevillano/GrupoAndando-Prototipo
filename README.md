# Grupo Andando 🦶

Landing page para la **Fundación Grupo Andando**, ONG que brinda apoyo escolar y acompañamiento educativo en la Villa 21-24 del barrio de Barracas, Buenos Aires, desde 2011.

La página está pensada para ser dinámica y directa: cuenta quiénes son, muestra fotos de su trabajo, conecta con sus redes sociales y permite que cualquier persona se sume como voluntario a través de un formulario simple.

## ✨ Funcionalidades

- **Hero** con fondo animado a partir del logo de la fundación
- **Historia** de la fundación, basada en cobertura periodística real
- **Countdown** al próximo encuentro/meet de puertas abiertas
- **Galería de fotos** (en desktop se ven todas; en mobile se muestran 4 al azar en cada recarga)
- **Testimonios** de voluntarios
- Sección **Sumate** con accesos directos a Instagram, TikTok, Facebook y WhatsApp
- **Formulario "Quiero sumarme"**, conectado vía [Make](https://www.make.com/) a un bot de Telegram que notifica al equipo cuando alguien lo completa
- Botón flotante de WhatsApp
- Diseño responsive: la versión mobile prioriza una experiencia simple y directa (logo, historia breve, fotos, redes y formulario), mientras que desktop muestra la experiencia completa

## 🛠️ Stack

- [Angular](https://angular.dev/) 21
- CSS puro (sin frameworks de estilos)
- [Make](https://www.make.com/) + Telegram Bot para las notificaciones del formulario

## 🚀 Cómo correr el proyecto localmente

### Requisitos
- [Node.js](https://nodejs.org/) y npm
- [Angular CLI](https://angular.dev/tools/cli) (`npm install -g @angular/cli`)

### Instalación

```bash
git clone https://github.com/TU-USUARIO/grupo-andando-web.git
cd grupo-andando-web
npm install
```

### Configuración del formulario

El formulario de "Quiero sumarme" necesita una URL de webhook (Make u otro servicio) para funcionar. Copiá el archivo de ejemplo y completá la tuya:

```bash
cp src/app/config.example.ts src/app/config.ts
```

Editá `src/app/config.ts` y reemplazá el valor por tu URL real de webhook. Este archivo está en `.gitignore` y no se sube al repositorio.

### Servidor de desarrollo

```bash
ng serve
```

Abrí `http://localhost:4200/` en el navegador. La app se recarga automáticamente al modificar el código.

## 📦 Build de producción

```bash
ng build
```

Los archivos compilados quedan en `dist/`.

## 🧪 Tests

```bash
ng test
```

## 📂 Assets

Las imágenes estáticas (logo, fotos de la galería) van dentro de la carpeta `public/`, no en `src/assets` (por la configuración de esta versión del Angular CLI).

## 🤝 Cómo colaborar con la fundación

Si querés sumarte como voluntario o conocer más sobre Grupo Andando, visitá la web en vivo o seguilos en sus redes sociales (los links están en la sección "Sumate" de la página).
