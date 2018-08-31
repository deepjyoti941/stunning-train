# React Framework for application development

> development setup

### Installation

1- Clone this repo `https://adc-dsu-stash.uk.capgemini.com/projects/RMG/repos/react-framework/browse`

2- `yarn install` or `npm install` to install npm packages.

3- start dev server using `yarn start` or `npm start`.

3- For production build execute `yarn run-script build` or `npm run-script build`. this will create a build directory.

4- Unit testing will watch all your changes in the test files. Use below command.
 `yarn test` or `npm test`

5- To generate code coverage execute below command and this will create a coverage directory.
`npm run doc` or `yarn run doc`


### Configuration
* Webpack Config paths based on your file structure you can go to `webpack/paths.js` and modify the source and file names based on your need.
* `webpack/webpack.common.js` config common webpack for both dev and production environments.
* webpack/webpack.dev.js config webpack for dev environment.
* `webpack/webpack.prod.js` config webpack for production environment.
* `/webpack.config.js` main webpack config that merge common and webpack environment based config.
* Enzyme config `/setupTest.js` here you will have all setup for enzyme to test your component.
* Prettier config `/.prettierc`.
* Eslint config `/.eslintrc`.
* Browsers list config `/.browserslistrc`.
