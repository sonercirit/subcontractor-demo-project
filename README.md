# Subcontractor Demo Project

## Features

- Uses express as its web server.
- Format files with prettier.
- Runs airbnb (strict) rules with eslint.
- Enforce rules and code style with pre-commit hooks. Uses husky and lint-staged.
- Config management via dotenv.
- Dependencies via docker-compose.
- ORM via Prisma. Includes migrations and seeders.
- Testable via OpenAPI.

### Running docker-compose

Docker compose includes the postgres DB, the app itself and the swagger UI.

App is at http://localhost:7822

Swagger is at http://localhost:7777

Swagger includes examples as well as documentation. Raw swagger file is at `./openapi.yaml`

### Migrations and seeders

Make your changes in `prisma/schema.prisma` and run the following command to generate the migration.

```shell
npm run migrate
```

You can run the seeder with

```shell
npm run seed
```

### Developing and running locally

After running the migration and the seeders, run the following commands:

```shell
cp .env.defaults .env
npm run start
```
