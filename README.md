# Subcontractor Demo Project

## Features

- Uses express as its web server.
- Format files with prettier.
- Runs airbnb (strict) rules with eslint.
- Enforce rules and code style with pre-commit hooks. Uses husky and lint-staged.
- Config management via dotenv.
- Dependencies via docker-compose
- ORM via Prisma. Includes migrations and seeders.
- Testable via OpenAPI.

### Migrations and seeders

#### Create migrations

Make your changes in `prisma/schema.prisma` and run the following command to generate the migration.

```shell
npx prisma migrate dev --name "<example>"
```
