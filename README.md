# Example TVMaze App

This is a React application built using typescript.

To work on the project locally, clone the repository locally, then install the dependencies.

```
yarn install
```

## Available Scripts

There are a number of scripts which you can run from the project directory:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Integration testing

Cypress has been implemented to do end to end testing of the application. The tests are using both BDD (Cucumber) and js based tests.

### `yarn cypress:run`

Runs the integration tests using cypress. In order for the tests to work you need to have the development server running as above.

### `yarn cypress:open`

Opens the cypress desktop application. You can see the tests running.

## Building the application

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Storybook

The components for the application can be seen in storybook. You can configure the compoents and test them manually.

NB: There is a bug in the current release of storybook which stops if from working in Chrome.

### `yarn storybook`

Open [http://localhost:6006](http://localhost:6006) to open it in the browser (other than Chrome).
