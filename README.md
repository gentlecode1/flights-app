# prueba
Full Stack Developer Assessment - Full


BACKEND


Our client needs to create and read comments for each flight they have in our system, with the following information:
ID
Comment
Date
UserId
FlightId
Tags
Due to that, we need you to create 2 endpoints using Node Js:
Create comment
You will receive the following information:
Comment: String (mandatory)
UserId: Number (mandatory)
FlightId: Number (mandatory)
Tags: String Array (optional)
You have to save the information in the database that you want (Mysql or Mongo) creating a unique ID.
Retrieve comments
Create an endpoint to retrieve the list of comments for a specific flight ID. You will receive the FlightID and it should return a JSON with the comments.


Nice to have:

Express framework

HTTP Verbs

Data Validations

Manage duplicates

Postman Collection

Extra functionalities (Sort, Filter …)

Database: Mongo or Mysql

Develop using SOLID

Unit Test

Documentation





FRONTEND


To create and show the comments, our client needs a web page (SPA) developed in Angular 12 + with the following’s components:
Sidebar to show the list of flights: When the user clicks in a flight, the information in the table should change (The list of flights can be hardcoded in the code or in the database).
Table to show:
Comment ID
Comment
User
Tags
Button and form to create a new comment.


Nice to have:

Use of SASS

UI/UX Design

Angular Material

Data Validations

Unit Tests

Documentation

Pagination – Sort – Filters – Search box

Responsive Design

SOLID principle


JAVASCRIPT


Given an array of URLs and a MAX_CONCURRENCY integer, implement a function that will asynchronously fetch each URL, not requesting more than MAX_CONCURRENCY URLs at the same time. The URLs should be fetched as soon as possible. The function should return an array of responses for each URL. How would you write a test for such a function?



SOLUTION

Backend: The solution is containerized using Docker. It includes a docker-compose file that sets up the MongoDB database and the Node.js project with Express for API implementation. To start this part, navigate to the directory where the docker-compose file is located and execute the command "docker-compose up -d." It includes a postman collection in the root directory.

Frontend: The Angular solution is deployed by navigating to the Angular project directory and running the command "ng serve" (ensure that port 4200 is available).

Javascript: To run the JavaScript test for the backend, navigate to the corresponding directory and execute the command "npm run test."
