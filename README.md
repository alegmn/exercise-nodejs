# exercise-nodejs
Test exercises nodejs. Running REST service that exposes the /boards endpoint.

# Running Proyect

```1. npm install```

```2. npm start```

```2. Go to http://localhost:3000/boards```


# Testing curl

```
# Create Boards
curl -X POST http://localhost:3000/boards -d '{"title": "My First Board"}' -H "Content-Type: application/json"

curl -X POST http://localhost:3000/boards -d '{"title": "My Second Board"}' -H "Content-Type: application/json"

# Update Boards
curl -X PUT http://localhost:3000/boards -d '{"id": 1, "stage": 2}' -H "Content-Type: application/json"

# Get All Boards
curl -X GET http://localhost:3000/boards

```
