### Project Deployed
https://covid-19-recovery-tracker.web.app/

As per the free API only 1 request can be made per second. Hence for all countries to be populated on the SVG graphic, please wait roughly 2.5 minutes roughly ~150 seconds, for each country. Once populated the modal onClick event handler will be ready. Please do not click anything for the 1st 150s. Let the page load in the background.

Note: The API used mentions recovery however the definition of recovered has not been stated, hence the definition is subjective. Please read the following: https://theconversation.com/what-does-recovered-from-coronavirus-mean-4-questions-answered-about-how-some-survive-and-what-happens-next-134883

A global covid 19 recovery tracker. This project is responsible for querying the https://covid-19-data.p.rapidapi.com/ API and displaying the proportion of recovered people as a percentage of the confirmed cases using a color map. The color key is displayed below. 


### Demo:
![Demonstrating App](https://github.com/RamanSB/covid-19-tracker/blob/master/public/covid-recovery-tracker-demo-resized.gif)



To Do: 
1) Intending to add names & hover css effects to SVG paths. (see: https://stackoverflow.com/questions/66735815/how-to-overlay-text-on-an-svg-path-element-in-react-without-using-the-coordinate)

Current state of project:
![Demonstrating App](https://github.com/RamanSB/covid-19-tracker/blob/master/public/project_preview_new.png)


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
# Global-COVID-19-Tracker
A repository that displays the world map using an svg and paints (fill) the map &amp; adds colors to match a key representing the death toll. An onClickEventHandler will be added for each path and additional data about COVID will be revealed.
>>>>>>> 67303a98c966a4a0ce31667b531bfebfb5445a7d


#### Licenses

React Color Bar - https://www.npmjs.com/package/react-color-bar
