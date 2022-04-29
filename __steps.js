/**
 * 1. Create a node server with 5 steps
 * 1.1. create folder
 * 1.2. npm init
 * 1.3. npm install express cors mongodb
 * 1.4. script-dev: nodemon index.js
 * 1.5. create index.js
 * 1.6. use 5 steps to create a node server
 * 
 * --------------------------------------
 * create Atlas Account 
 * --------------------------------------
 * 1. sign up. google access
 * 2. create cluster
 * 3. create user dbuser and password 
 * 4. Network Access --> ip address: allow all
 * 5. database > Connect > code copy and then paste in index.js
 * --------------------------------------
 * CRUD operation
 * --------------------------------------
 * 1. node mongodb CRUD > Fundamentals 
 * 2. create async run function
 * --------------------------------------
 * Integrate sending data from client to server
 * --------------------------------------
 * 1.Client side: create a form 
 * 2. onSubmit get form and create user object
 * 3. on Server: Create user POST to receive data on the backend. 
 * 4. on client side: set fetch with POST, headers, body
 * 5. Make sure you return a json from the POST API
 * -----------------------------------------------------
 * Load Data to the client side
 * -----------------------------------------------------
 * 1. create get API on the server side
 * 2. create a query object 
 * 3. collection.find(query)
 * 4. cursor.toArray()
 * 5. return the result
 * 
 * 
 */