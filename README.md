# Task Manager API Documentation

Welcome to the documentation for the Task Manager API. This API allows you to perform basic CRUD (Create, Read, Update, Delete) operations on tasks. The API endpoints are based on the `/api/v1/tasks` route.

## Base URL

The base URL for accessing the Task Manager API is `https://example.com`.

## Authentication

Authentication is not required to access the Task Manager API. However, if you plan to use this API in a production environment, it is strongly recommended to implement proper authentication and authorization mechanisms.

## Endpoints

### 1. Get all tasks

Retrieve a list of all tasks.

- **HTTP Method:** GET
- **Endpoint:** `/api/v1/tasks`

#### Response

- **Status Code:** 200 (OK)
- **Response Body:**

```json
[
    {
        "completed": false,
        "_id": "6499e00d026a0c525c99e026",
        "name": "Read",
        "__v": 0
    },
    {
        "completed": true,
        "_id": "6499e00d026a0c525c99e027",
        "name": "Write",
        "__v": 0
    },
    ...
]
```

### 2. Create a new task

Create a new task.

- **HTTP Method:** POST
- **Endpoint:** `/api/v1/tasks`

#### Request Body

- **Content Type:** application/json
- **Request Body:**

```json
{
    "name": "Task Name",
    "completed": false
}
```

- The `name` field is required and should contain the name of the task.
- The `completed` field is optional and indicates whether the task is completed or not. If not provided, the task will be considered incomplete by default.

#### Response

- **Status Code:** 201 (Created)
- **Response Body:**

```json
{
    "completed": false,
    "_id": "6499e00d026a0c525c99e028",
    "name": "Task Name",
    "__v": 0
}
```

### 3. Get a single task

Retrieve details of a specific task.

- **HTTP Method:** GET
- **Endpoint:** `/api/v1/tasks/:id`

- Replace `:id` in the endpoint with the actual ID of the task you want to retrieve.

#### Response

- **Status Code:** 200 (OK)
- **Response Body:**

```json
{
    "completed": false,
    "_id": "6499e00d026a0c525c99e028",
    "name": "Task Name",
    "__v": 0
}
```

### 4. Update a task

Update an existing task.

- **HTTP Method:** PUT
- **Endpoint:** `/api/v1/tasks/:id`

- Replace `:id` in the endpoint with the actual ID of the task you want to update.

#### Request Body

- **Content Type:** application/json
- **Request Body:**

```json
{
    "name": "Updated Task Name",
    "completed": true
}
```

- Both the `name` and `completed` fields are optional, but at least one field must be present in the request body.

#### Response

- **Status Code:** 200 (OK)
- **Response Body:**

```json
{
    "completed": true,
    "_id": "6499e00d026a0c525c99e028",
    "name": "Updated Task Name",
    "__v": 0
}
```

### 5. Delete a task



Delete an existing task.

- **HTTP Method:** DELETE
- **Endpoint:** `/api/v1/tasks/:id`

- Replace `:id` in the endpoint with the actual ID of the task you want to delete.

#### Response

- **Status Code:** 204 (No Content)

## Error Handling

In case of errors, the API will return the appropriate HTTP status code along with an error message in the response body. The possible error status codes are:

- **400 (Bad Request):** The request is invalid or missing required parameters.
- **404 (Not Found):** The requested resource (task) does not exist.
- **500 (Internal Server Error):** An unexpected error occurred on the server.

## Conclusion

This concludes the documentation for the Task Manager API. You can use the provided endpoints to perform basic CRUD operations on tasks. If you have any further questions or need assistance, please contact our support team.