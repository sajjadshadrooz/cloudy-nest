# ⛄ Cloudy Nest - The challenge of managing the ArvanCloud blogs.

**Software version:** 0.1.0  
**Node.js version:** 22.14.0 (LTS)  
**Next.js version:** 15.3.2  
**React.js version:** 19.0.0

## Development

```sh
npm i
npm run dev
```

### Env File

```sh
NEXT_PUBLIC_BASE_URL = localhost:3000
NEXT_PUBLIC_API_BASE_URL = https://api-3281216083-arvancloud-challenge.apps.ir-central1.arvancaas.ir/api

NEXT_PUBLIC_APP_NAME = 'Arvancloud Challenge'
```

### Code Clean

- Install Prettier in VSCode
- Set "Format on Save" in settings
- Set formatter to Prettier

## Deployment

```sh
switch to Master branch
npm run build
pm2 start "npm start" --name cloudy-nest
pm2 save
pm2 startup
```
