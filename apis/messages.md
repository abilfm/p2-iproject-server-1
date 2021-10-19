## GET /messages
Description: Show all messages

Response:

- Status: 200
- Body:

```json
[
  {
    "id": 1,
    "name": "user1",
    "email": "user1@mail.com",
    "subject": "subject1",
    "message": "message1",
    "createdAt": "2021-10-19T08:49:42.437Z",
    "updatedAt": "2021-10-19T08:49:42.437Z"
   }
  .
  .
  .
]
```

---
## POST /messages
Description: Sending suggestion from user to admin

Request:

- Data:

```json
{
  "name": "string",
  "email": "string",
  "subject": "string",
  "message": "text"
}
```

Response:

- Status: 201
- Body:

```json
{
    "id": 1,
    "name": "user1",
    "email": "user1@mail.com",
    "subject": "subject1",
    "message": "message1",
    "updatedAt": "2021-10-19T08:50:40.171Z",
    "createdAt": "2021-10-19T08:50:40.171Z"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Name is required"
}
OR
{
  "message": "Invalid email format"
}
```
---

## DELETE /messages/:id
Description: Delete user's suggestion message by id

Request:

- Params:
    - id: "integer"

Response:

- Status: 200
- Body:

```json
{
  "message": "Message has successfully been deleted"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Message is not found"
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