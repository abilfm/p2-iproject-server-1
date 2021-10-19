## POST /register
Description: Add new user to access wishlist database

Request:

- Data:

```json
{
  "username" : "string",
  "email" : "string",
  "password" : "string",
  "role" : "string",
  "phoneNumber" : "integer",
  "address" : "integer"
}
```

Response:

- Status: 201
- Body:

```json
{
  "id": 1,
  "email": "user1@mail.com"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": [
    "Username is required",
    "Email is required",
    "Invalid email format",
    "Email is already exist",
    "Password is required",
    "Password must be more than 5 characters",
    "Phone Number is required",
    "Address is required"
  ]
}
```
---

## POST /login
Description: Authenticating user for accessing wishlist database

Request:

- Data:

```json
{
  "username" : "string",
  "email" : "string"
}
```

Response:

- Status: 200
- Body:

```json
{
  "access_token": "<access_token>"
}
```

_Response (401- Unauthorized)_

```json
{
  "message": "Invalid Email/Password"
}
```
---

## Global Error

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal Server Error"
}
```
---