# Social Network API

![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)

## Description
The application **social-network-api** allows a user to easily view and interact with information from a database named **socialDB**. Clients can manage users, users' thoughts, friend lists and reactions to the users' thoughts within the database. Clients can choose to view or add users and thoughts, as well as add friends and reactions to users' thoughts.  Clients can also change and delete users, thoughts, friend lists and reactions.

Because this application is not deployed, the following walkthrough videos  demonstrate the **social-network-api** application's functionality:

[social-network-api: Start the server]()

[social-network-api: Users - GET, POST, PUT, DELETE]()

[social-network-api: Thoughts - GET, POST, PUT, DELETE]()

[social-network-api: Users' Friend List - POST & DELETE]()

[social-network-api: Reactions to thoughts - PUT & DELETE]()
## Installation

This application requires Node.JS to be installed. The user should run ```npm install``` in their terminal to load the following npm packages: Express.js (version 4.18.2) and Mongoose (version 7.2.2).

## Usage
To invoke the application and start the server, run the following command in the terminal.

```node index.js```

Because there is not currently a front end for this application, test the api routes for the **socialDB** database using Insomnia. 

The client can test GET all users and thoughts AND POST new users and thoughts from the following api routes:

```localhost:3001/api/users```   AND    ```localhost:3001/api/thoughts```

To POST a new user, follow the example below:
```
{
    "username": "lernantino",
    "email": "lernantino@gmail.com"
}
```
To POST a new thought, follow the example below:
```
{
    "thoughtText": "Here's a cool thought...",
    "username": "lernantino",
    "userId": "647d0f837927d7a52b222832"
}
```
To GET one user, update (PUT) one user or DELETE one user, use the following route:
```localhost:3001/api/users/:userId```

To GET one thought, update (PUT) one thought or DELETE one thought, use the following route:
```localhost:3001/api/thoughts/:thoughtId```

To POST or DELETE a friend from a user's list, use the following route:
```localhost:3001/api/users/:userId/friends/:friendId```

To POST a reaction from a thought, use the following route:
```localhost:3001/api/thoughts/:thoughtId/reactions```

To DELETE a reaction from a thought, use the following route:
```localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId```

## Credits

The Unit 18 NoSQL Activities 23, 24, 25 & 26 were utilized in building the models, routes and controllers for the **social-network-api** application.

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Questions
For any further information about this application or questions you might have, please visit my GitHub profile
[meghansimmons](https://github.com/meghansimmons/social-network-api).