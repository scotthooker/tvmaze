import React from 'react';
import ReactMarkdown from 'react-markdown';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        padding: 20,
    },
}));

const content = `# Example TVMaze App

This is an example React application built using typescript.

To work on the project locally, clone the repository locally, then install the dependencies.


\`\`\`
yarn install
\`\`\`

## Approach

The application makes use of the TVMaze API.  It uses a predefined library to acces the API [tvmaze-api-ts](https://www.npmjs.com/package/tvmaze-api-ts).
However the published library has some issues so I have used [patch-package](https://www.npmjs.com/package/patch-package).  This allows for the installed
package to be patched with my fixes.  In a normal project I would push these fixes back to the project maintainer.  See the patches folder for the details.

## Available Scripts

There are a number of scripts which you can run from the project directory:

### \`yarn start\`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### \`yarn test\`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Integration testing

Cypress has been implemented to do end to end testing of the application. The tests are using both BDD (Cucumber) and js based tests.

### \`yarn cypress:run\`

Runs the integration tests using cypress. In order for the tests to work you need to have the development server running as above.

### \`yarn cypress:open\`

Opens the cypress desktop application. You can see the tests running.

## Building the application

### \`yarn build\`

Builds the app for production to the \`build\` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Storybook

The components for the application can be seen in storybook. You can configure the compoents and test them manually.

NB: There is a bug in the current release of storybook which stops if from working in Chrome.

### \`yarn storybook\`

Open [http://localhost:6006](http://localhost:6006) to open it in the browser (other than Chrome).
`;

const AboutPage: React.FC = () => {
    const classes = useStyles();

    return (
        <div>
            <h2>About Page</h2>
            <div className={classes.root}>
                <ReactMarkdown>{content}</ReactMarkdown>
            </div>
        </div>
    );
};

export default AboutPage;
