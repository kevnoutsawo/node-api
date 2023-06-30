# Node/Express API Demo

This is a simple Node.js and Express.js API project that provides basic CRUD operations for managing users. It uses JSON data to store and manipulate user information from an in-memory array.

## Prerequisites

- Node.js installed on your machine
- npm (Node Package Manager) installed on your machine

## Installation

1. Clone this repository to your local machine using the following command:

   ```bash
   git clone https://github.com/kevnoutsawo/node-api.git
   ```

2. Change to the project's directory:

   ```bash
   cd node-api
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the API server by running the following command:

   ```bash
   npm run dev
   ```

2. By default, the API server will run on port 3000. You can access it at `http://localhost:3000`.

## API Endpoints

### Get all users

- URL: `/users`
- Method: GET
- Description: Retrieves a list of all users.
- Example Response:
  ```json
  [
    {
      "id": 1,
      "name": "Simon"
    },
    {
      "id": 2,
      "name": "Brett"
    },
    {
      "id": 3,
      "name": "William"
    }
  ]
  ```

### Create a new user

- URL: `/users`
- Method: POST
- Description: Creates a new user.
- Request Body:
  ```json
  {
    "name": "John"
  }
  ```
- Example Response:
  ```json
  {
    "id": 4,
    "name": "John"
  }
  ```

### Update an existing user

- URL: `/users`
- Method: PUT
- Description: Updates an existing user.
- Request Body:
  ```json
  {
    "id": 1,
    "name": "Updated Name"
  }
  ```
- Example Response:
  ```json
  [
    {
      "id": 1,
      "name": "Updated Name"
    },
    {
      "id": 2,
      "name": "Brett"
    },
    {
      "id": 3,
      "name": "William"
    }
  ]
  ```

### Delete a user

- URL: `/users`
- Method: DELETE
- Description: Deletes a user.
- Request Body:
  ```json
  {
    "id": 1
  }
  ```
- Example Response:
  ```json
  [
    {
      "id": 2,
      "name": "Brett"
    },
    {
      "id": 3,
      "name": "William"
    }
  ]
  ```

### Get a specific user

- URL: `/users/:id`
- Method: GET
- Description: Retrieves a specific user by their ID.
- URL Parameters:
  - `id`: The ID of the user to retrieve.
- Example Response:
  ```json
  {
    "id": 2,
    "name": "Brett"
  }
  ```

Note: The API requires authorization to access the `GET /users/:id` endpoint. The API key should be provided in the `Authorization` header.

## Authorization

The API uses a simple API key for authorization. The API key should be included in the `Authorization` header of the request. If the provided API key matches the one stored in the server's environment variables, the request will be authorized. Otherwise, a `401 Unauthorized` response

## Live Demo

URL : node-api-production-ddce.up.railway.app
API KEY : demo