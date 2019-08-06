This is a portfolio website created using create-react-app, located at https://www.matthigg.com and hosted on GitHub pages.

# Local Development

- To run the website locally, run:

  $ npm start

  ... which will automatically open a new tab and display the page at http://localhost:3000 (note: if this was cloned from GitHub, you may have to run `npm install` in order to get the node_modules folder, since it is usually added to .gitignore).

- To add Sass: install typescript & node-sass, add the script to package.json, and run the sass-watching script from the command line:

  $ npm i typescript
  $ npm i node-sass

-- package.json
  ...
  "scripts": {
    ...
    "sass": "node-sass -w src/scss/ -o src/css/ --recursive"
  },
  ...

  $ npm run sass

# Production

- This site is hosted on GitHub pages using an npm module called 'gh-pages' that creates a separate branch, also called 'gh-pages', that is used to contain the files that will be hosted on GitHub. To install gh-pages:

  $ npm i gh-pages

  ... note (8/4/2019) gh-pages v2.1 throws an error that reads: ""file" argument must be a non-empty string...", downgrade to v2.0 via:

    $  npm install gh-pages@2.0 --save-dev

- To deploy this web portfolio to GitHub pages, add a "homepage" key:value pair to package.json, add a custom 'deploy' script to package.json, & then deploy it from the command line:
-- package.json
  ...
  "homepage": "https://<username>.github.io/<repository name>/",
  ...
  "scripts": {
    ...
    "deploy": "npm run build && gh-pages -d build"
  },
  ...

  $ npm run deploy

  ... note that the "homepage" key:value pair needs to represent whatever URL points to the hosted GitHub site.

- After successful deployment to GitHub Pages using the gh-pages module, the gh-pages branch on GitHub will contain whatever was contained within the build/ folder in the local root directory. It's important that the index.html file appears in the root directory of the gh-pages branch on GitHub.

- To make sure that the hosted site at GitHub Pages is being built from the correct branch, check:

  > Your repositories > (repository) > Settings > GitHub Pages > Source

- If the site has a custom domain name, you can specify the domain name here:

  > Your repositories > (repository) > Settings > GitHub Pages > Custom domain

  ... note that specifying a domain name in the GitHub Pages settings console creates a CNAME file in the root directory of the gh-pages branch. Each time the gh-pages branch is updated, it will remove this CNAME file and effectively reset this setting, which then prevents the custom domain name from working correctly. To fix this, you have to manually update the domain name after each update/push, or include a CNAME file in your local public/ directory (anything in a local public/ directory gets pushed to its branch's root directory on GitHub).

  ... also, don't forget to update the "homepage" key:value pair in package.json to reflect the new custom domain name:
  -- package.json
    ...
    "homepage": "https://<custom domain name>",
    ...
  
  1. https://www.npmjs.com/package/gh-pages
  2. https://stackoverflow.com/questions/57331878/gh-pages-d-build-gives-error-file-argument-must-be-a-non-empty-string

# Production (Troubleshooting)

- If you try to deploy the site via https and accidentally enter incorrect information at the username/password prompt and now there is a 'gh-pages' branch that exists and prevents you from running the "deploy" script, you can start over by running this:

  $ rm -rf node_modules/gh-pages/.cache

## Todo

- Fix bug with rapidly clicking hamburger icon

## --- Boiler Plate create-react-app README below this point ---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
