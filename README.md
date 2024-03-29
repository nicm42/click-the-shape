# Click the Shape

> Click the Shape written in Svelte

## Table of contents

- [General info](#general-info)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Learnings](#learnings)
- [Setup](#setup)
- [Features](#features)
- [Status](#status)
- [Contact](#contact)

## General info

This game existed before, in jQuery. I wanted to learn Svelte, so starting with something where I already had an idea of what to do seemed like a good idea. To the original game, that had three shapes, I added three more, and also some high scores based on the number of attempts.

## Screenshots

![Screenshot](screenshot-desktop.png)
![Screenshot](screenshot-mobile.png)

## Technologies

- SCSS
- Svelte
- TypeScript
- Express
- MongoDB
- Jest
- Svelte Testing Library
- Cypress
- Cypress Testing Library

## Learnings

- Svelte
- MongoDB: getting data from it and posting to it

## Features

A game where the shape grows on click and you have to click on it again when you think it's twice the size.

## Setup

To view this project visit the [demo](https://click-the-shape.onrender.com/). Note the free tier MongoDB database has expired, so the high scores feature will not work. Also it's hosted on a free tier of Render so will take 30 seconds to start up.

Or download the files, open a terminal in that folder and install locally using npm:

```
npm install
```

Go to [MongDB Atlas](https://www.mongodb.com/cloud/atlas), sign up for an account and set up a database.

Add your database connection into .env.example where it says 'XXX' and rename the file to .env

Run the server and the app locally:

```
npm run dev
npm run server
```

## Status

Project is: _finished_

## Contact

Created by [nicm42](https://twitter.com/nicm4242/) - feel free to contact me!
<!--  -->
