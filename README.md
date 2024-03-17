# Node Server API Documentation

This document provides instructions for interacting with the Node server and details the available APIs and their endpoints.

## Setup

To run the server, execute the following command:

```
node server.js
```

The server will run on the following base URL:

```
http://localhost:8080
```

## APIs

### Retrieve List of Categories

This endpoint retrieves a list of categories.

- HTTP Method: GET
- URL: `/categories`

#### Query Parameters

- None

#### Response

- Status: 200 OK
- Content-Type: application/json

Example Response:

```json
[
    {
        "id": ...,
        "name": ...,
        ...
    },
    {
        "id": ...,
        "name": ...,
        ...
    }
]
```
### Retrieve Specific Category

This endpoint retrieves a specific category by ID.

- HTTP Method: GET
- URL: `/categories?id=2`

#### Query Parameters

- id (required): The ID of the category.

#### Response

- Status: 200 OK
- Content-Type: application/json

Example Response:

```json
{
    "id": ...,
    "name": ...,
    ...
}
```

### Retrieve List of Cuisines

This endpoint retrieves a list of cuisines.

- HTTP Method: GET
- URL: `/cuisines`

#### Query Parameters

- None

#### Response

- Status: 200 OK
- Content-Type: application/json

Example Response:

```json
[
    {
        "id": ...,
        "name": ...,
        ...
    },
    {
        "id": ...,
        "name": ...,
        ...
    }
]
```

### Retrieve Specific Cuisine

This endpoint retrieves a specific cuisine by ID.

- HTTP Method: GET
- URL: `/cuisines?id=2`

#### Query Parameters

- id (required): The ID of the cuisine.

#### Response

- Status: 200 OK
- Content-Type: application/json

Example Response:

```json
{
    "id": ...,
    "name": ...,
    ...
}
```
### Retrieve List of Restaurants

This endpoint retrieves a list of restaurants.

- HTTP Method: GET
- URL: `/restaurants`

#### Query Parameters

- None

#### Response

- Status: 200 OK
- Content-Type: application/json

Example Response:

```json
[
    {
        "id": ...,
        "name": ...,
        ...
    },
    {
        "id": ...,
        "name": ...,
        ...
    }
]
```

### Retrieve Specific Restaurant

This endpoint retrieves a specific restaurant by ID.

- HTTP Method: GET
- URL: `/restaurants?id=2`

#### Query Parameters

- id (required): The ID of the restaurant.

#### Response

- Status: 200 OK
- Content-Type: application/json

Example Response:

```json
{
    "id": ...,
    "name": ...,
    ...
}
```

### Retrieve List of Fooditems

This endpoint retrieves a list of fooditems.

- HTTP Method: GET
- URL: `/fooditems`

#### Query Parameters

- None

#### Response

- Status: 200 OK
- Content-Type: application/json

Example Response:

```json
[
    {
        "id": ...,
        "title": ...,
        ...
    },
    {
        "id": ...,
        "title": ...,
        ...
    }
]
```

### Retrieve Specific Fooditem

This endpoint retrieves a specific fooditem by ID.

- HTTP Method: GET
- URL: `/fooditems?id=2`

#### Query Parameters

- id (required): The ID of the fooditem.

#### Response

- Status: 200 OK
- Content-Type: application/json

Example Response:

```json
{
    "id": ...,
    "title": ...,
    ...
}
```

### Retrieve List of Menus

This endpoint retrieves a list of menus.

- HTTP Method: GET
- URL: `/menus`

#### Query Parameters

- None

#### Response

- Status: 200 OK
- Content-Type: application/json

Example Response:

```json
[
    {
        "id": ...,
        "restaurantId": ...,
        ...
    },
    {
        "id": ...,
        "restaurantId": ...,
        ...
    }
]
```

### Retrieve Specific Menu

This endpoint retrieves a specific menu by ID.

- HTTP Method: GET
- URL: `/menus?id=2`

#### Query Parameters

- id (required): The ID of the menu.

#### Response

- Status: 200 OK
- Content-Type: application/json

Example Response:

```json
{
    "id": ...,
    "restaurantId": ...,
    ...
}
```
### Retrieve List of Menuitems

This endpoint retrieves a list of menuitems.

- HTTP Method: GET
- URL: `/menuitems`

#### Query Parameters

- None

#### Response

- Status: 200 OK
- Content-Type: application/json

Example Response:

```json
[
    {
        "id": ...,
        "menuId": ...,
        ...
    },
    {
        "id": ...,
        "menuId": ...,
        ...
    }
]
```

### Retrieve Specific Menuitem

This endpoint retrieves a specific menuitem by ID.

- HTTP Method: GET
- URL: `/menuitems?id=2`

#### Query Parameters

- id (required): The ID of the menuitem.

#### Response

- Status: 200 OK
- Content-Type: application/json

Example Response:

```json
{
    "id": ...,
    "menuId": ...,
    ...
}
```

### Retrieve List of Users

This endpoint retrieves a list of users.

- HTTP Method: GET
- URL: `/users`

#### Query Parameters

- None

#### Response

- Status: 200 OK
- Content-Type: application/json

Example Response:

```json
[
    {
        "id": ...,
        "username": ...,
        ...
    },
    {
        "id": ...,
        "username": ...,
        ...
    }
]
```

### Retrieve Specific User

This endpoint retrieves a specific user by username.

- HTTP Method: GET
- URL: `/users?username=john`

#### Query Parameters

- username (required): The username of the user.

#### Response

- Status: 200 OK
- Content-Type: application/json

Example Response:

```json
{
    "id": ...,
    "username": ...,
    ...
}
```

### User Login

This endpoint retrieves a specific user based on the provided username and password in the request body.

- HTTP Method: POST
- URL: `/login`

#### Request Body

- username (required): The username of the user.
- password (required): The password of the user.

#### Response

- Status: 200 OK
- Content-Type: application/json

Example Response:

```json
{
    "id": ...,
    "username": ...,
    ...
}
```
