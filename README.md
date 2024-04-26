# Autocomplete Component

Project Created for Deel's Frontend Take Home assignment project

Thank you Deel! 🙏

## Frontend test part 1

Please prepare an auto-complete component in React TypeScript.

1. Performance matters as we are expecting a production ready
   component.
2. You cannot use any 3rd party libraries - only pure React and internal
   DOM functions.
3. You should use TypeScript and write proper interfaces and types.
4. The function to filter the data should be asynchronous. You can use
   mock data (such as a JSON array), but the function which uses it
   should be asynchronous (similar to a real REST call).
5. It should have basic working CSS. No need for anything fancy (such
   as drop shadows etc).
6. You need to handle all non-standard/edge use-cases - it should have
   a perfect user-experience.
7. Highlight the matching part of the text, in addition to showing it.
8. No external state management libraries (refer to #1 as well), only
   native React method.
9. Use only functional components with hooks.
   10.Shortcuts and hacks are ok - but you have to add comments on what
   you are doing and why.
10. Add a README.md file explaining how to run the project.
    12.Bonus Point: Load data using a real API call to some resource.

## Frontend test part 2

Questions can be found answered in the `questions.md` file

## Running App

The exercise requires [Node.js](https://nodejs.org/en/) to be installed. We recommend using the LTS version.

1. In the repo root directory, run `yarn install` to gather all dependencies.

1. Then run `yarn start` which should start the React client at port 3000.

## Technical Notes

- The frontend was bootstrapped with [Create React App](https://facebook.github.io/create-react-app/docs/getting-started)
- This project uses `yarn` as the package manager

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
