# Node.js Express API with Typescript and PostgreSQL, usign Docker
Basic example of an API endpoint using Node.js with Express.js written in Typescript.js, and a PostgreSQL database.

## How to run
Make sure to have Docker and Docker compose installed on your machine then run
```
docker-compose up -d
```

## Run the API without docker
To run the API without docker you need to install Node.js, then run the following commands on the api directory
```
npm install
```

To build and run your application use
```
npm run dev
```


## Containers
| App       | Container name | Ports |
| --------- | -------------- | ----- |
| Postgres  | db             | 5432  |
| Adminer   | adminer        | 8080  |
| Node      | api            | 3000  |

