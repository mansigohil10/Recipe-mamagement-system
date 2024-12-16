Recipe App

This is a recipe application built with the MERN stack (MongoDB, Express.js, React.js, and Node.js). It allows users to sign up, log in, log out and perform CRUD operations on recipes. The project consists of two controllers: the user controller for authentication and the recipe controller.

Features

User authentication (sign up, log in, and log out)

Recipe management (create, read, update, and delete recipes)

User authentication middleware for protected routes

API documentation using Swagger UI



## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mansigohil10/Recipe-mamagement-system.git
   
2. Install dependencies:

    ```bash
    npm install

3. .env file

     ```
    MONGO_URI=your_mongo_db_connection_string
    PORT=5050
    JWT_SECRET=your_jwt_secret_key

    ```

4. Start the development server:

   ```bash
   npm start
   The server should now be running at http://localhost:${port}
.

*---Routes---*

*___For User :___ *

POST /user/register: Create a new user account.

POST /user/login: Log in to an existing user account.

GET /user/logout: Log out the current user.


*___For Recipe :___* 

POST /recipe/add: create a recipe

GET /recipe/: Get a all recipe 

GET /recipe/:recipeId: Get a recipe by its ID.

DELETE /recipe/delete/:recipeId: Delete a recipe by its ID.

PATCH /recipe/update/:recipeId: Update a recipe by its ID.

