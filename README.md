# Node-Typescript-Starter

Run the docker container for local development by using the following command

--- docker-compose -f docker-compose.yml -docker-compose.override.yml up -d --build


Run the docker container for production by using the following command

--- docker-compose -f docker-compose.yml -docker-compose.prod.yml up -d --build

You can also pass the environment variables using *-e VARIABLE_NAME=...*
