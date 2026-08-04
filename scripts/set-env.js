const fs = require('fs');

const webhookUrl = process.env.MAKE_WEBHOOK_URL || 'https://hook.us2.make.com/l8h1vwomwyfg2dhos36ogtdtxrv46re5';

const contenido = `export const MAKE_WEBHOOK_URL = '${webhookUrl}';\n`;

fs.writeFileSync('./src/app/config.ts', contenido);
console.log('config.ts generado correctamente');