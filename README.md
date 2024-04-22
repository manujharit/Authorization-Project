# Authorization Project

This project is a simple implementation of user authentication and authorization using React, Redux, and Node.js. It includes a client-side application and a server-side API.

## Project Structure

The project is divided into two main directories: `client` and `server`.

### Client Directory

The `client` directory contains the React application and its associated files. Here's an overview of the directory structure:

```
client/
  |- dist/
  |   |- index.html
  |- src/
  |   |- components/
  |   |   |- SignUp.js
  |   |   |- LoginPage.js
  |   |   |- LoggedIn.js
  |   |   |- Body.js
  |   |- hooks/
  |   |   |- useScreenSize.js
  |   |- redux/
  |   |   |- store.js
  |   |   |- action.js
  |   |- utils/
  |   |   |- validators.js
  |   |- app.js
  |   |- ...
  |- index.js
  |- index.css
  |- package.json
  |- package-lock.json
  |- tailwind.config.js
```

- The `dist` directory contains the production-ready build of the application.
- The `src` directory contains the main source code of the React application.
  - The `components` directory contains the individual React components used in the application.
  - The `hooks` directory contains custom React hooks used in the application.
  - The `redux` directory contains the Redux store and action files for managing the application state.
  - The `utils` directory contains utility functions used throughout the application.
  - The `app.js` file is the main entry point of the React application.
- The `index.js` and `index.css` files are the entry points for the application.
- The `package.json` and `package-lock.json` files contain the project dependencies and configuration.
- The `tailwind.config.js` file contains the configuration for Tailwind CSS.

### Server Directory

The `server` directory contains the Node.js API and its associated files. Here's an overview of the directory structure:

```
server/
  |- src/
  |   |- config/
  |   |   |- config.js
  |   |- controllers/
  |   |   |- userController.js
  |   |- handler/
  |   |   |- handler.js
  |   |- model/
  |   |   |- model.js
  |   |- routes/
  |   |   |- router.js
  |   |- validator/
  |       |- validator.js
  |- app.js
  |- package.json
  |- package-lock.json
```

- The `src` directory contains the main source code of the Node.js API.
  - The `config` directory contains configuration files for the API.
  - The `controllers` directory contains the controller functions for handling user-related operations.
  - The `handler` directory contains the request handler functions.
  - The `model` directory contains the database models.
  - The `routes` directory contains the API route definitions.
  - The `validator` directory contains the validation functions for user input.
- The `app.js` file is the main entry point of the Node.js API.
- The `package.json` and `package-lock.json` files contain the project dependencies and configuration.

## Building and Running the Application

To build and run the application, follow these steps:

1. Navigate to the `client` directory and install the dependencies:
   ```
   cd client
   npm install
   ```

2. Build the client application:
   ```
   npm run build
   ```

3. To change the client port (default is 3000), open the `client/package.json` file and modify the `"start"` script in the `"scripts"` section. For example:
   ```json
   "scripts": {
     "start": "parcel index.html --port 3001",
     ...
   }
   ```
   Replace `3001` with your desired client port number.

4. Navigate to the `server` directory and install the dependencies:
   ```
   cd ../server
   npm install
   ```

5. To change the server port (default is 3000), open the `server/app.js` file and locate the line where the server is being started. Modify the port number to your desired value. For example:
   ```javascript
   const port = process.env.PORT || 3002;
   ```
   Replace `3002` with your desired server port number.

6. Start the server:
   ```
   npm start
   ```

7. Open your web browser and visit `http://localhost:3001` (or the client port you specified) to access the application.

## Editing the Code

To make changes to the application, you can edit the relevant files in the `client/src` and `server/src` directories. After making changes, rebuild the client application and restart the server to see the updates.

## Future Improvements

Here are some planned improvements and additions to the project:

1. Encryption:
   - [ ] Add encryption for requests sent from the client to the server to enhance security.
   - [ ] Implement JWT (JSON Web Token) authentication to secure the API endpoints.

2. Authorization Code:
   - [ ] Implement an authorization code system using salt for additional security.
   - [ ] The server will generate an authorization code and send it to the client.
   - [ ] The client will send the authorization code back to the server to obtain a JWT token for authentication.
   - [ ] The authorization code will have an expiry time and will be stored in the server cache.

3. Caching:
   - [ ] Implement caching mechanisms to improve performance and reduce server load.
   - [ ] Store frequently accessed data in the server cache to minimize database queries.

4. Error Handling:
   - [ ] Enhance error handling mechanisms on both the client and server sides.
   - [ ] Provide meaningful error messages to the user for better user experience.

5. Testing:
   - [ ] Add unit tests and integration tests to ensure the reliability and stability of the application.
   - [ ] Implement automated testing workflows to catch potential bugs and regressions.

6. Documentation:
   - [ ] Improve documentation for the project, including API documentation and code comments.
   - [ ] Provide detailed instructions for setting up and running the application in different environments.