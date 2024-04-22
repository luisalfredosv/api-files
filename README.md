# ApiFiles

Here are the instructions to use the project.

## Installation

It is necessary to have installed Git and Node.js, preferably version 14.21.3.

Open a terminal, go to the preferred directory, and execute the following command.

```bash
git clone https://github.com/luisalfredosv/api-files.git
```

We wait for the project to download, after that we navigate to the `api-files` folder and execute

```bash
npm i
```

## Execution

To install the project dependencies, once the download is finished you can run the project with the following command

```bash
npm start
```

this runs in production mode or if you want to run it in development mode

```bash
npx nodemon ./src/server.js
```

Wait a few seconds and you will see the message in the terminal that the host where it is running and the default port: 3002

## Execution whit Docker

This project can be easily containerized using Docker. Follow these steps to build and run the Docker container:

1. Ensure Docker is running on your machine.
2. Build the Docker image:

```bash
docker-compose build
```

3. Once the image is built successfully, you can start the Docker container:

```bash
docker-compose up
```

This will start the application inside a Docker container, and it will be accessible at <http://localhost:3002>.

4. To stop the container, press Ctrl + C in the terminal where it's running.

## Tests

This project includes unit and integration tests, to run them use the following command while in the project directory

```bash
npm run test
```
