# Table of Contents

1. Scope of the project
2. Technologies
3. Need to know
4. Deployment process
5. Available scripts
6. Polyfills
7. Project file architecture

## 1. Scope of the project

**User projects** is a form for people who needs to fill in info about their previous projects. Users should be able to use this form to save the information about the projects which he/she worked on.

**Scope:** Create a reusable component for helping people to write down their projects experience. People should complete data regarding their name, the projects in which they were involved, some details about that projects, their responsibility on that projects and the duration of the development process.

## 2. Technologies

Here are listed the main technologies used in the application.

- [ReactJS](https://reactjs.org/)
- [Styled Components](https://styled-components.com/)
  Using tagged template literals (a recent addition to JavaScript) and the power of CSS, **styled-components** allows you to write actual CSS code to style your components. It also removes the mapping between components and styles – using components as a low-level styling construct could not be easier!
- [Jest](https://jestjs.io/)
  **Jest** is a delightful JavaScript Testing Framework with a focus on simplicity.
- [Enzyme](https://enzymejs.github.io/enzyme/)
  **Enzyme** is a JavaScript Testing utility for React that makes it easier to test your React Components' output. You can also manipulate, traverse, and in some ways simulate runtime given the output.
- [ReactTestUtils](https://reactjs.org/docs/test-utils.html)
  **ReactTestUtils** makes it easy to test React components in the testing framework of your choice..

## 3. Need to know

- [React Functional Components](https://programmingwithmosh.com/react/react-functional-components/)
- [React Hooks](https://reactjs.org/docs/hooks-intro.html)

## 4. Deployment process

Currently, the application is deployed on https://..... 

## 5. Available scripts

| Script               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm  start`         | Runs the app in the development mode, by opening it at [http://localhost:3000](http://localhost:3000).                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `npm test`          | Launches the test runner in the interactive watch mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `npm build`         | Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.                                                                                                                                                                                                                                                                        
## 6. Polyfills

- [Optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) - The optional chaining operator `(?.)` permits reading the value of a property located deep within a chain of connected objects without having to expressly validate that each reference in the chain is valid.

## 7. Project file architecture

Here will be described the custom files and directories created by us. If you want to learn more about the default React Files Structure you can visit [this](https://medium.com/@abesingh1/create-react-app-files-folders-structure-explained-df24770f8562).
### /src :

| File           | Description                                                                                                                                                       |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/assets`      | Static files used by the application.                                                                                                                             |
| `/components`  | Reusable React Components                                                                                                                                     |
| `/constants`   | Globally placed immutable variables that can be used all over the application                                                                                     |

| `/features`    | All the functionality is split here into **Functional Container Components**                                                                                                                              

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)
