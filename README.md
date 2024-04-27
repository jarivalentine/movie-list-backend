# vue-workshop-setup

## Benodigdheden

- [Node](https://nodejs.org/en/download) (min v16.20.2)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) (min v8.19.4)
- [Docker engine ](https://docs.docker.com/engine/install/) (Easy via Docker desktop)
- [OMDb API Key](https://www.omdbapi.com/apikey.aspx) (Choose free: recieve an activation link and your API key)

## Project setup

clone the repository and navigate to the project directory, install the dependencies and copy the .env.example file to .env

```bash
git clone git@github.com:jarivalentine/vue-workshop-backend.git ; cd vue-workshop-backend ; npm install ; cp .env.example .env
```

1. Run `docker compose up -d`
2. Run `npx prisma migrate dev`
3. Run `npm run dev`
