# my-top-five

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**My Top 5** is an application that allows users to share the things that bring them joy._


<br>

## MVP


_The **My Top 5** MVP users will be able to add a list to any provided category. They will also be able to create an account, which will keep track of all of their lists and give them full CRUD functionality on those lists._

<br>

### Goals

- _Allow users to create top 5 lists_
- _Allow users to discuss their preferences_
- _Provide users with ideas for new areas to explore_


<br>

### Libraries and Dependencies


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Will be used to create the pages on which the application will be displayed._ |
|   React Router   | _Will allow navigation between pages._ |
|    Ruby on Rails      | _Will provide the backend database and connections._ |

<br>

### Client (Front End)

#### Wireframes


[Here](https://whimsical.com/33Frv13jXEXSTEqxG15VAJ)



#### Component Tree



[Here](https://whimsical.com/mt5ch-CR1iRKzvnPueJnyBGtHFxu)

#### Component Architecture


``` structure

src
|__ assets/
      |__ fonts
|__ components/
      |__ Categories.jsx
      |__ CategoryCreate.jsx
      |__ Footer.jsx 
      |__ Lists.jsx
      |__ ListDetail.jsx
      |__ ListCreate.jsx
      |__ ListUpdate.jsx
      |__ Navbar.jsx
      |__ UserDetail.jsx
      |__ UserCreate.jsx
      |__ UserUpdate.jsx      
|__ services/
      |__ Api-config.js 

```

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Psuedocoding |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Build out api calls |    H     |     3 hrs      |     2 hrs     |     TBD     |
| Build Routes |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Add Categories Page    |    H     |     3 hrs      |     2 hrs     |     hrs    |
| Add Lists Page    |    H     |     3 hrs      |     2 hrs     |     hrs    |
| Add User Page    |    H     |     3 hrs      |     2 hrs     |     hrs    |
| Create List CRUD Actions |    H     |     3 hrs      |    3  hrs     |     TBD     |
| Create User CRUD Actions |    H     |     3 hrs      |   2   hrs     |     TBD     |
| Build Functional Navbar |    H     |     3 hrs      |    1  hrs     |     TBD     |
| Styling |    H     |     3 hrs      |     6 hrs     |     TBD     |
| More Styling |    L     |     3 hrs      |    6  hrs     |     TBD     |
| Testing |    H     |     3 hrs      |     3 hrs     |     TBD     |
| Debugging |    H     |     3 hrs      |    3 hrs     |     TBD     |
| TOTAL               |          |     39 hrs      |    34  hrs     |     TBD     |

<br>

### Server (Back End)

#### ERD Model

[ERD ](https://app.diagrams.net/#G1cZFfs7jhY6aH2G9sv_XRnTXuGKxqnVkN)
<br>

***

## Post-MVP

- Add Like button, and display most liked lists.
- Add comments section
***
