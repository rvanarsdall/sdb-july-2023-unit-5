# Getting Started

- create a `package.json` file
- In the terminal use used the command `npm init -y`
- Update the main: on the package.json to reflect the file you want ran when you start it up. We used `app.js`
- install dependencies that we will need.
- create a file called `.gitignore`

## Dependencies

- Express JS: `npm install express`

## .gitignore file

- `/node_modules` was added so our node_modules folder doesn't get tracked by git.

## Boiler Plate Code for Starting Server

```js
const express = require("express");

const app = express();

let PORT = 4000;

app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
```

- in the terminal you can use `nodemon`

## CRUD

- Create: POST
- Read: GET
- Update: PATCH or PUT
- Delete: DELETE

## Server Stucture (MVC)

- Model: What the data looks like in the Database
- View : What you see in the browser
- Controller: Handles the requests that come in from browser
