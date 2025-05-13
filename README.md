# ⛄ Cloudy Nest - The challenge of managing the blogs.

**Software version:** 0.1.0  
**Node.js version:** 22.14.0 (LTS)  
**Next.js version:** 15.3.2  
**React.js version:** 19.0.0

## Features

- routing: App routing with 1 main layout and 2 sub main layout for Auth & Dashboard.
- Rendering mechanism: globaly client side base on a dashboard need to render.
- API connection: Restful base on axios, Authentication is token base that we stored in localstorage, every api used in a special hooks to managing them rapid & cleaner.
- Access controlling: basic access control base on access to layouts, without permission handling.
- Forms Controlling: Formik & yup used for managing forms and input validations.
- Error handlers: used default error boundry for general errors, custom api error handlers for connecting to back-end, that is in services utils directory.
- state managing: context used for keep user information, components are function base & used useState hook.
- styles: tailwind.


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
