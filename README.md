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

- ```./database/pocketbase serve --http='192.168.8.68:8090'```
- NOTE: this will only work with the raspberry Pi on the correct router

## Admin Setup

- If this is the first time running the database go to the Dashboard link provided when running serve.
- Provide and email and password to create an account, make sure the .env in the front and backend have the matching email and passwords as well see the readme here: <https://github.com/Bio-Rocket/LabJack>
