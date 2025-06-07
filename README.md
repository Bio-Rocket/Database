# Database

## Setup

- Visit the pocketbase documentation to download the exe <https://pocketbase.io/docs/>
- Move the exe to the ./database/ folder
- The database version should be 0.28.x or a compatible version

## Running the database

- Ensure the link given when running the database is the link used in the frontend and backend code.

### Locally

- ```./database/pocketbase serve```

### Remotely (Running on the pi)

- ```./database/pocketbase serve --http='http://192.168.0.69:8090'```
  
 
