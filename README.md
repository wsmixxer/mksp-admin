# MKSP Makerspace Administration

Open source software for managing your budding Makerspace

## Tech Stack

- Next.js deployed on Vercel Now
- Authentication through Auth0
- Database and serverless functions through Hasura (hosted on Heroku)

## Setup

Begin by cloning this repository

### Auth0 Setup

1. Create or log into your Auth0 account.
1. Create a new regular web application.
1. Copy your local repository `.env.example` file to `.env` and enter the Domain, Client ID, and Client Secret from your new Auth0 application's settings page.
1. Add rules found in `auth0` folder (!Important! `upsert-user.js` should be listed before `hasura-jwt-claim.js` in Auth0 so that the rules are executed in the correct order, especially for first time logins).

### Hasura Testing/Development Setup

1. Download and install docker ([Docker desktop](https://www.docker.com/products/docker-desktop) suggested)
1. ```# in a new directory run
   wget https://raw.githubusercontent.com/hasura/graphql-engine/stable/install-manifests/docker-compose/docker-compose.yaml
   ```

# or run

curl https://raw.githubusercontent.com/hasura/graphql-engine/stable/install-manifests/docker-compose/docker-compose.yaml -o docker-compose.yml```

1. Run Hasura and Postgres locally by running `docker-compose up -d`
1. Head to `http://localhost:8080/console` to open your local Hasura console

### Hasura Production Setup

1. Click to deploy GraphQL Engine on Heroku with the free Postgres add-on:
   [![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/hasura/graphql-engine-heroku)
1. [Generate JWT secret](https://hasura.io/jwt-config/) and add it to Config Vars under Heroku settings using the variable name `HASURA_GRAPHQL_JWT_SECRET`.
1. Pick a value for `HASURA_GRAPHQL_ADMIN_SECRET` and add the variable to Heroku's Config Vars.
1. (Optional) add the `HASURA_GRAPHQL_UNAUTHORIZED_ROLE` var.
1. Fill in local `hasura/config.yaml` file with:
   - admin_secret: `HASURA_GRAPHQL_ADMIN_SECRET` value from Heroku
   - endpoint: https://<yourappname>.herokuapp.com/
1. Populate the hasura database:

```bash
 cd hasura
 hasura migrate apply
```

### Finish Auth0 Setup

1. Add values to the "global configuration object". Accessible through your Auth0 dashboard in the settings subheader under the Rules page.
   - `HASURA_GRAPHQL_ADMIN_SECRET` (copy value from HASURA_GRAPHQL_ADMIN_SECRET in heroku)
   - `HASURA_GRAPHQL_URL` (eg https://<yourappname>.herokuapp.com/v1/graphql)
1. Fill out the callback and redirect URLs for your Auth0 app under Applications > (your application) > Settings.

### Install Dependencies

```bash
 yarn install
 yarn dev
```

## Deploy with Vercel now

- Update `REDIRECT_URI` and `POST_LOGOUT_REDIRECT_URI` in the `now.json` file
- add all the secrets (start with @ in the file) [with the cli](https://zeit.co/docs/v2/build-step/#using-environment-variables-and-secrets)
