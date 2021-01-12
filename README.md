# Chuck Norris joke application 

This repo contains both the server and the client implementations for the Joke App.


#### Server:
The server was built using nodeJs and has an Apollo GraphQL implementation that consumes an externally hosted chuck norris Api
#### Client:
The client was built using React and Apollo client that consumes the server's Apollo server API

### Requirements:
 - Node and npm

### Setup
 - Navigate to the /server directory, run `npm install`
 - Navigate to the /client directory, run `npm install`

### Running
 - Navigate to the /server directory
 - `npm run concurrent` (start both server and client)
 - `npm run server` (start the server only)
 - `npm run client` (start the client only)
