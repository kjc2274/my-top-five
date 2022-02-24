# my-top-five

> The Project Planning section **should be completed** for your project pitch with instructors.
>
> To ensure correct Markdown, copy and paste the raw template code into your project repo README file. Remove ALL template instructions and replace with your project details.

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

> The Minimum Viable Product should be a well-planned, easily-communicated product, ensuring that the client's deliverable will be achievable and meet specifications within the time frame estimated.

_The **My Top 5** MVP users will be able to add a list to any provided category. They will also be able to create an account, which will keep track of all of their lists and give them full CRUD functionality on those lists._

<br>

### Goals

- _Allow users to create top 5 lists_
- _Allow users to discuss their preferences_
- _Provide users with ideas for new areas to explore_


<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Will be used to create the pages on which the application will be displayed._ |
|   React Router   | _Will allow navigation between pages._ |
|    Ruby on Rails      | _Will provide the backend database and connections._ |

<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

[Here](https://whimsical.com/mt5-landing-page-RmbyWgrgaUh5heT3WBGQid)

- Desktop Landing

[Here](https://whimsical.com/33Frv13jXEXSTEqxG15VAJ)

- Desktop Hero

[Here](https://whimsical.com/mt5-resource-index-umEtd9YtDt8ARYXDi9ZbZ)

- Resource Index

[Here](https://whimsical.com/mt5-resource-show-UcDGpgvGQFKsUS1JAPxsPu)

- Resource Show

[Here](https://whimsical.com/mt5-tablet-DdKoNp2eZXDd7JWywo2Pxw)

- Tablet Resource Index

[Here](https://whimsical.com/mt5-mobile-Phn3jma3GCuwsBmUzJcqsw)

- Mobile Resource Index

#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. Include a link to your component tree

[Component Tree](https://whimsical.com/mt5ch-CR1iRKzvnPueJnyBGtHFxu)

#### Component Architecture

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ fonts
      |__ images
|__ components/
      |__ Categories.jsx
      |__ CategoryCreate.jsx
      |__ Footer.jsx 
      |__ Lists.jsx
      |__ ListDetail.jsx
      |__ ListCreate.jsx
      |__ ListDelete.jsx
      |__ ListUpdate.jsx
      |__ Navbar.jsx
      |__ UserDetail.jsx
      |__ UserCreate.jsx
      |__ UserDelete.jsx
      |__ UserUpdate.jsx      
|__ services/
      |__ Api-config.js 

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Psuedocoding |    H     |     3 hrs      |      hrs     |     TBD     |
| Build out api calls |    H     |     3 hrs      |      hrs     |     TBD     |
| Build Routes |    H     |     3 hrs      |      hrs     |     TBD     |
| Add Categories Page    |    H     |     3 hrs      |      hrs     |     hrs    |
| Add Lists Page    |    H     |     3 hrs      |      hrs     |     hrs    |
| Add User Page    |    H     |     3 hrs      |      hrs     |     hrs    |
| Create List CRUD Actions |    H     |     3 hrs      |      hrs     |     TBD     |
| Create User CRUD Actions |    H     |     3 hrs      |      hrs     |     TBD     |
| Build Functional Navbar |    H     |     3 hrs      |      hrs     |     TBD     |
| Styling |    H     |     3 hrs      |      hrs     |     TBD     |
| More Styling |    L     |     3 hrs      |      hrs     |     TBD     |
| Testing |    H     |     3 hrs      |      hrs     |     TBD     |
| Debugging |    H     |     3 hrs      |      hrs     |     TBD     |
| TOTAL               |          |     39 hrs      |      hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

[ERD ](https://app.diagrams.net/#G1cZFfs7jhY6aH2G9sv_XRnTXuGKxqnVkN)
<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

- Add Like button, and display most liked lists.
- Add comments section
***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.