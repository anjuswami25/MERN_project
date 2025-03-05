# MEARN Project

This project is a full-stack application built using the MEARN stack (MongoDB, Express, React, Node.js). It provides a platform for users to create, read, update, and delete data.

## Features
- User authentication and management
- Responsive design using Bootstrap
- Real-time updates with React
- RESTful API for backend communication

## Installation Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. Install frontend dependencies:
   ```bash
   cd fron
   npm install
   ```

3. Install backend dependencies:
   ```bash
   cd BACKEND
   npm install
   ```

4. Create a `.env` file in the `BACKEND` directory and add your environment variables.

## Usage
To start the development server for the frontend:
```bash
cd fron
npm run dev
```

To start the backend server:
```bash
cd BACKEND
npm run start
```

## API Endpoints
- **GET /api/users**: Retrieve all users
- **POST /api/users**: Create a new user
- **GET /api/users/:id**: Retrieve a user by ID
- **PUT /api/users/:id**: Update a user by ID
- **DELETE /api/users/:id**: Delete a user by ID

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## License
This project is licensed under the MIT License.
