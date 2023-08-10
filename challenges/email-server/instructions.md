# Email Server

In this challenge you will put your skills to the test. You are given a blank folder called `email-server` all the files and folders you will have to create based on what you have learned so far this week.

## Task List

- [ ] npm init - y
- [ ] update package.json to point to proper file (not index.js)
- [ ] npm i express
- [ ] boiler plate for your app listening on port 4000
- [ ] add express.json()
- [ ] create endpoint for "http://localhost:4000/user/register"
- [ ] create endpoint for "http://localhost:4000/user/login"
- [ ] create controller folder
- [ ] create file "user.controller.js"
- [ ] add boiler plate for controller (require and module.exports)
- [ ] create users.json file in the assets folder
- [ ] create a read function
- [ ] create a write function

## About user/register endpoint

- expected request body should look like {username: "rob@test.com", password:"1234"}
- this endpoint will be responsible for adding the username and password to the user.json file
- res.json({message: "user added"})

## About the user/login endpoint

- expected request body should look like {username: "rob@test.com", password:"1234"}
- You should see if you can find a match based on the user name (findOne)
- If you fail to find the user in the users.json then you need to throw an error and send that to the client (postman)
- You need to verify that the passwords match (compare)
- res.json({message: "user found", user: {username: "rob@test.com", password: "1234"}})

## Postman

- [ ] create a collection called email server
- [ ] save your register to postman
- [ ] save your login to postman
