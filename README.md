# Tokosh de Cajón Peruano — cajonperuano.frate.lat

Sitio construido en **React (Vite) + Tailwind CSS v4 + Framer Motion**, misma
estructura y stack que el proyecto Freestyle Católico.

## Estado actual

- Todas las secciones de contenido (Hero, Proyecto, Álbum/24 pistas, Metodología,
  Cronograma, Facilitadores, Aliados, Equipo, Donadores, Footer)
- Modal de Convocatoria (perfil: líderes/miembros de Juntas Vecinales, 25-70 años)
- Modal de Donación — mismo flujo que Freestyle (monto mínimo S/ 15, anonimato,
  normalización de nombre). El pago con Culqui está SIMULADO, igual que en el
  otro proyecto — falta conectar el backend real.
- Pendiente (fuera de este entregable): backend Node/Express compartido para
  Culqui y para las postulaciones de convocatoria de los 3 proyectos.

## Desarrollo local

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm install
npm run build
```

## Despliegue en el VPS (Contabo, 173.212.200.11)

Mismo procedimiento que freestyle-catolico:

```bash
cd cajon-peruano
npm install
npm run build
sudo mkdir -p /var/www/cajonperuano
sudo cp -r dist/* /var/www/cajonperuano/
```

Server block de Nginx:
```nginx
server {
    listen 80;
    server_name cajonperuano.frate.lat;
    root /var/www/cajonperuano;
    index index.html;
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

Luego: `sudo nginx -t && sudo systemctl reload nginx`, y (recomendado)
`sudo certbot --nginx -d cajonperuano.frate.lat`.

(Pendiente, se hará después) Agregar el registro DNS tipo A para
`cajonperuano` -> `173.212.200.11` en Namecheap.
