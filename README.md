# Solution
- `git clone https://github.com/bbenefield89/simple-todo.git`
- `git fetch`
- `git checkout brandon/solution`
- Check that your node version is at v10 or greater with `node --version`
- `yarn`
- In the root directory create a `.env` file and place a valid PostgreSQL URL variable inside, e.g. `DATABASE_URL=postgresql://<<psql username>>:<<psql password>>@127.0.0.1:5432/simple_todo` where PostgreSQL is being served locally, `127.0.0.1`, from default port `5432` and looking for the database named `simple_todo`
- `yarn start`

## FAQ
Q: What if I don't have psql installed locally?
A: https://www.postgresql.org/download/

Q: How do I connect to PostgreSQL?
A: https://www.a2hosting.com/kb/developer-corner/postgresql/connect-to-postgresql-from-the-command-line

Q: How do I create and verify I have created a new DB in PostgreSQL?
A: Once connected to psql from the terminal you can run `create database simple_todo;` and verify it has been created with the `\l` (backslash + L) and you should see a new entry in the list of databases.

# Simple Todo
This repository is intended to be a very basic full-stack implementation of a todo list meant to serve as a coding exercise for interview candidates.

The following technologies are currently used and will likely need to be understood to complete the exercise:
- [NodeJS](https://nodejs.org/)
- [ExpressJS](https://expressjs.com/)
- [ReactJS](https://reactjs.org/)

## Your challenge
Your challenge, if you so choose to accept, shall be to implement the User Story below.

The estimated time to complete the exercise is between 2 and 4 hours.

### User Story
```
As a User with Todos,
I would like to mark Todos as completed rather than deleting them,
So that I can see how many Todos I have pending and have completed.
```

### Acceptance criteria
The following criteria is the minimum that must be implemented:
- Allow Todos to be marked as complete
- Display the number of completed and pending Todos to the User

## Getting started
Clone this repo locally:
```bash
$ git clone https://github.com/CommercialTribe/simple-todo
$ cd simple-todo
```

Verify your node version:
```bash
$ node -v
```
> If you have a version less than v10, you will need to install [Node v10](https://www.npmjs.com/get-npm).

Install node dependencies:
```bash
$ yarn install
```

Start the project:
```bash
$ yarn start
```

Navigate to <http://localhost:3001/>

### Extras
We kept this exercise smaller and unopinionated in the hopes that you will be motivated to add your own ideas and refactor as you see fit.

If you're pressed on time and can only commit the 2-4 hours for the minimum acceptance criteria, **we won't hold this against you**.  Simply add some comments to your code to express what you would like to add if you had the time.

Some extras you may consider adding:
- Dockerize the things
- Component library (Material, Bootstrap, etc)
- Type checking (TypeScript, Flow, etc)
- Styling
- State management framework (Redux, Relay, etc)
- Use more Babel features
- Style checking (JSHint, ESLint, Prettier, etc)
- Persistent store (Redis, MySQL, pSQL, etc)
- Test framework
- etc..

> **Don't go overboard**.. we suggest picking just one or two things to add that you would like to discuss with the engineers reviewing your code.

## What we're looking for
Some of the items our engineering team will be looking for will be:
- Functional accuracy
- Code readability
- Component structure

## How to submit
To submit your work, you may email us at <engineering@commercialtribe.com> with either of the following:
- a link to your own Github repo with the changes made (preferred)
- a zip of your source files (excluding `node_modules` directory)

## Need help?
If you need help or have questions please do not hesitate to reach out to us at <engineering@commercialtribe.com>.
