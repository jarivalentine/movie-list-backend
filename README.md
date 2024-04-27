# movie-list-backend

## Requirements

- [Node](https://nodejs.org/en/download) (v20)
- [Docker Engine](https://docs.docker.com/engine/install/) (Docker Desktop)

## Setup

### Server setup

Clone de server en installeer dependencies

```sh
git clone git@github.com:jarivalentine/movie-list-backend.git
```

```sh
cd movie-list-backend
```

```sh
npm install
```

Database setup

```sh
cp example.env .env
```

```sh
docker compose up -d
```

```sh
npx prisma migrate dev
```

Vraag een OMDb API key aan
1. Ga naar https://www.omdbapi.com/apikey.aspx
2. Klik op FREE, vul in en submit
3. Ga naar je email inbox en activeer de API key
4. Paste de API key als value voor `API_KEY` in de `.env` file

Start de server

```sh
npm run dev
```
