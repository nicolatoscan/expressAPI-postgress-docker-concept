# Express API and PostgreSQL, usign Docker
Basic example of an API endpoint using Node.js with Express.js, and a PostgreSQL database.

## How to run
Make sure to have Docker and Docker compose installed on your machine then run
```
docker-compose up -d
```

## Containers
| App       | Container name | Ports |
| --------- | -------------- | ----- |
| Postgres  | db             | 5432  |
| Adminer   | adminer        | 8080  |
| Node      | api            | 3000  |

