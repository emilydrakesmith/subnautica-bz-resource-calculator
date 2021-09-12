<a id='top'></a>

# Introduction

This project is to use React to create a front-end project that allows users to find out what resources they need to gather to build things in the game *Subnautica: Below Zero*.

# Table of Contents
1. [Instructions for Use](#instructions-for-use)
2. [Version Notes](#version-notes)
3. [Tech Framework](#tech-framework)
4. [Future Plans](#future-plans)
5. [Contribute](#contribute)
6. [Special Thanks](#special-thanks)
7. [Appendices](#appendices)
   1. [Boilerplate Content from create-react-app](#appendix-1)


<a id='instructions-for-use'></a>

# Instructions for Use

**Content will be added to this section as features are completed and implemented in this project.**

[Back to Top](#top)


<a id='version-notes'></a>

# Version Notes

### About Version Notes

The version history for this app will be organized in a four-digit **W.X.Y.Z** system.
* **W** denotes the main version of this app.  It will be zero until reaching MVP at which point it will become one.  Changes in this number denote a completely new version of the app.
* **X** denotes addition of refactoring of a major component of the app such as a new functionality or directory.
* **Y** denotes completion of a series of commits sufficient to consider a new feature or component working.
* **Z** denotes a minor change, a bugfix, or a commit that does not fully complete a new feature.
* Minor changes such as fixing indentation or spelling may not be given a new version number.


### Version History

#### v 0.1.0.0 | 12 September 2021 | commit 9328d7bb76d5963bfdae060e5f196edc6d904add | Initial Commit
* Initialize project using Create React App (CLI: `npx create-react-app`)

#### v 0.1.0.1 | 12 September 2021 | commit 8377d30f41f08ab77d9fdbeb2bebfa1d878d48d1
* Stub up `README.md` file with basic sections and initial content.
* Added a remote origin with GitHub @ https://github.com/mhsmith321/subnautica-bz-resource-calculator.git

#### v 0.1.0.2 | 12 September 2021 | commit 71e61a7ef099ad68271dabc95ad7fb6f9149923e
* Removed unnecessary boilerplate code.

#### v 0.1.0.3 | 12 September 2021 | commit d92c22dc2bb2d9b999468ed5179f8b198c52c024
* Initialize directories in `/src`: `/components`, `/data`, `/data/resources`, and `/pages`
* Initialize and build out a `minerals.js` file in the `/src/data/resources` directory.

#### v 0.1.0.4 | 12 September 2021 | commit 7f8e2f1788477d3ed72a797570224273bdadc7d0
* Initialize and build out a `biologicals.js` file in the `/src/data/resources` directory.

#### v 0.1.0.5 | 12 September 2021 | commit -- | Current Version
* Initialize a directory `/src/data/materials`
* Initialize and build out a `basicMaterials.js` file in the `/src/data/materials` directory.
  * Note: I did not include Titanium here to avoid infinite loops in the app later.

[Back to Top](#top)


<a id='tech-framework'></a>

# Tech Framework

### This app uses:
* HTML5 and CSS3
* JavaScript ES+
* [React](https://reactjs.org/)
* [React Table](https://react-table.tanstack.com/)

### I built this app with:
* [VSCode](https://code.visualstudio.com/) version 1.59.0 (and higher)
* Google Chrome version 92.0.4515.159 (and higher)
* macOS Big Sur version 11.5.2 (and higher)

### This app is hosted at:
* [GitHub Repo](https://github.com/mhsmith321/Stardew-Valley-Crop-Planner-v1)

[Back to Top](#top)


<a id='future-plans'></a>

# Future Plans

### MVP/Short Term

### Ice Box

[Back to Top](#top)


<a id='contribute'></a>

# Contribute

Although I'm always interested in meeting new collaborators I prefer to keep this an individual project.

If you'd like to learn more about the developer, please visit [my website](https://martysmith.tech/) and [my GitHub](https://github.com/mhsmith321).

[Back to Top](#top)


<a id='special-thanks'></a>

# Special Thanks
* The game [Subnautica: Below Zero](https://unknownworlds.com/subnautica/subnautica-below-zero) was created by the studio [Unknown Worlds](https://unknownworlds.com).


[Back to Top](#top)

<a id='appendices'></a>

# Appendices

<a id='appendix-1'></a>

## Appendix 1: Boilerplate Content from create-react-app

**All content after this message until the next Appendix is boilerplate information populated by create-react-app when this project was initialized via npx.  Aside from some alterations to the heading formats I've left it as it was created.**

### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Available Scripts

In the project directory, you can run:

##### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

##### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

##### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

##### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

#### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

##### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

##### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

##### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

##### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

##### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

##### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

[Back to Top](#top)