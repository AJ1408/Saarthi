# Backend API Documentation

## User Authentication Endpoints
Base path: `/users` (assumed) or direct routes in router (e.g., `/register`, `/login`)

### POST /register
Create a new user account.

Request body (JSON):
- `fullname.firstname` (string, required)
- `fullname.lastname` (string, required)
- `email` (string, required, valid email)
- `password` (string, required, min length 6)

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "secret123"
}
```

Response:
- 201 Created
  - `message`: "User registered successfully"
  - `token`: JWT token
- 400 Bad Request
  - validation errors (array)

### POST /login
Authenticate an existing user.

Request body (JSON):
- `email` (string, required, valid email)
- `password` (string, required, min length 6)

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "secret123"
}
```

Response:
- 200 OK
  - `message`: "Login successful"
  - `token`: JWT token
- 401 Unauthorized
  - `message`: "Invalid email or password"

### GET /users/profile
Retrieve the authenticated user's profile information.

**Authentication required:** Bearer token in Authorization header or token cookie.

Response:
- 200 OK
  - `message`: "User profile retrieved successfully"
  - `user`: User object (excluding password)

### GET /users/logout
Log out the authenticated user by clearing the authentication token.

**Authentication required:** Bearer token in Authorization header or token cookie.

Response:
- 200 OK
  - `message`: "Logout successful"

## Notes
- Passwords are hashed using `bcrypt` before storage.
- JWT is generated using `jsonwebtoken` with `process.env.JWT_SECRET` and expires in 2 hours.
- User schema includes optional `socketId` for real-time tracking.
- Ensure the router is mounted in app.js (e.g., `app.use('/users', require('./routes/user.routes'))`).
