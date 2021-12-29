# typescript-rest-api

## Technology Stack

- [**Node.js 16.10.0**](https://nodejs.org/en/)
- [**TypeScript 4.4.4**](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-3.html)
- [**Docker**](https://www.docker.com/get-started)

## Requirements

For development, you will need the following installed in your environment:

- Node.js
- NPM
- Git

## Node installation

Just go on the [official Node.js website](https://nodejs.org/) and download the 16.10.0 version.
Also, ensure that you have `git` available, `npm` might need it (You can find git [here](https://git-scm.com/)).

To verify that the installation of Node was successful, please run the following commands.

```bash
    $ node --version
    v16.10.0

    $ npm --version
    7.19.1
```

## Installation

Clone and install app:

```bash
    git clone https://github.com/mwaszkiewicz/typescript-rest-api.git
    cd typescript-rest-api
    npm ci
```

## Configuring the app

- Open .env file and inject your credentials so it looks like this:

```text
PORT=8001
BASE_URL=http://localhost
```

## Running tests

To run the tests please use the following command:

```bash
    npm test
```

## Running the project

```bash
    npm run dev
```
