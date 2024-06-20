# README ABOUT THE PROJECT

This web-store example project was created as a project exercise during ICT-Camp training organized by Bear-IT. The aim of the training and project was to develop and showcase the development and programming skills of the persons who were involved in the project. 

The project team consisted of 6 people who had various different amounts of experience with web-development and group projects. The ICT-camp training also featured self-learning about the different tools and skills which were utilized in the project on top of other ICT-field related assignments.

The project was done using SCRUM agile project development model within four weeks and it consisted of two sprints which lasted for two weeks each. The web-store visual designs and navigations were created in Figma and Miro which were then ultimately implemented into the project following the designs.

The aim was to create a web-store prototype that would allow the team to develop and test the React javascript front-end development framework and node.js back-end with the aid of Vite and Prisma development tools. The project has been created to run only in local test demo environment and it is not planned to be published or hosted on the web.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## How to start the project locally:
What you need in order to start the project is postgreSQL and node installed. You should also make an .env file in the root of the backend folder and in there define the password, name and user of postgreSQL db you're using.

1.  **npm install**, to get all the needed dependencies.
2.  To get the backend working, cd into the backend folder with **cd /backend**
3.  Do **npm install** in there too.
4.  Then push the migrations into the database with **npx migrate dev**
5.  Now just push the seeds into the database with **npx prisma db seed**
6.  After that, just do **npm run dev** in the backend folder and in the root folder in order to get the project running.

```
npm install && npx prisma migrate db && npm run dev
```
