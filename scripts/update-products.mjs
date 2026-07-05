import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'src', 'data', 'products.ts');
let content = fs.readFileSync(file, 'utf8');
content = content.replace(/\.(png|jpg|jpeg)"/gi, '.webp"');
fs.writeFileSync(file, content);
console.log('Updated products.ts to use .webp extensions');
