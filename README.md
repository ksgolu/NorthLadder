# About

This Poject is a milimistic event management. You can create a event to manage events.

You can use following properties to create a new event:

- eventName
- organizer // Organizer's name
- phone

# Features

- create a new Task
- update a event
- get a Task
- list all Task
- sort event by assignto
- sort event by category

# Routes

- POST /event - create new event
- GET /event - list all event
- GET /event/:eventId - get a specific event by id
- PUT /taks/:eventId - update a specific event
- DELETE /event/:eventId - delete a event by id
- GET /event/?page=1 - for pagination
- GET /event/?limit=30 - limit the number of event
- GET /event/?eventName=pary - get all event by name 'party'
- GET /event/?organizer=kumar - get all event of category 'kumar'

# Run this project

To run this Project, You need following packages

- Node.js v18 (install)
- npm
- Typescript (globaly installed)

Follow these instructions to run this project

## STEP 1:

clone this project in your local machine

## STEP 2:

Go to backend directory

```shell
 cd backend
```

## STEP 3:

Install dependecies

```shell
npm i
```

## STEP 3:

Run following command in your terminal

```shell
npm start
```

if above command didn't work,

```shell
tsc index.js
```

Note: Make sure TypeScript is intalled globally

now again issue the `npm start` command.

Now you prject will be up and running on `localhost:3000`
