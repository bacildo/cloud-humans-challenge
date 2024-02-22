# Challenge Cloud Humans

# How to use.

- Node version 20.11.0
- npm install, to realize the package installation.
- npm run build, to realize the build, if necessary.
- npm run dev, to enter in develop mode.
- npm run docker-run to docker.
- docker compose -up to run in a container mode.
-
- To make a request, use a software from your choice (postman, insomnia, thunder client) or any other.
- Using the POST method, you can send the bofy, to the following route: localhost:3000/api/pro-applications
- You can use this example of JSON body, to test the request.
  
  {
  "age": 23,
  "education_level": "high_school",
  "past_experiences": {
    "sales": false,
    "support": false
  },
  "internet_test": {
    "download_speed": 20.4,
    "upload_speed": 20.2
  },
  "writing_score": 0.3,
  "referral_code": "token1234"
}


# Techical Decisions

Node.js (Backend): Node.js is chosen for its lightweight and efficient runtime, because of handling asynchronou operations, is a good choice to work withe queries and API requests.

Express.js (Server): A simple and flexible way to build web applications and APIs. 

Routing Controllers (Routing): Easier to manage and maintain the application's routing logic.

TypeORM (Object-Relational Mapping): Provides a set of features for defining entities, managing database connections, and performing database operations.

Typescript: Superset of JavaScript that adds static typing and other feature, improving code quality and maintainability.

# About the project
- This API show if a user is elegible or not to do some actions, accordingly with his score. 
