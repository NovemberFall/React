# React
### React Guide

- *ReactSetup domEvent introToForm*, which are the folders that introduce the react implementation without creating React App

# Introduction
- In order to make use of React inside the Codepen instance
we first have to add it as a library
![](img/1.png)

- click 'JavaScript'; import react and react-Dom
![](img/2.png)

- Note: set JavaScript Preprocessor to be 'Babel'
![](img/3.png)


- After imported this two libraries, clciked 'save' button

- Now we writing a .js

```js
function transform(offset) {
  const cos = Math.cos(offset);
  const sin = Math.sin(offset);
  return { transform: `matrix3d(${sin}, ${-cos}, ${sin}, 0, ${-cos}, ${sin}, 0, 0, 0, ${cos}, ${cos}, ${sin}, 0, 0, 0, 1)` };
}
 
class App extends React.Component {
  state = {styleOne: {}, styleTwo: {} };
  
  onMouseMove = (event) => {
    this.setState({
      styleOne: transform(-event.clientX / event.clientY),
      styleTwo: transform(event.clientX / event.clientY)
    })
  }
 
  render() {
    return (<div onMouseMove={this.onMouseMove}>
      <div className="panel" style={this.state.styleOne} />
      <div className="panel" style={this.state.styleTwo} />      
    </div>  )  
  } 
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
```
- css
```css
div {
  height: 100vh;
  width:100vw;
}
 
.panel {
  position:absolute;
  box-shadow: 0 0 50px grey;
  background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="18" viewBox="0 0 100 18"%3E%3Cpath fill="%239C92AC" fill-opacity="0.4" d="M61.82 18c3.47-1.45 6.86-3.78 11.3-7.34C78 6.76 80.34 5.1 83.87 3.42 88.56 1.16 93.75 0 100 0v6.16C98.76 6.05 97.43 6 96 6c-9.59 0-14.23 2.23-23.13 9.34-1.28 1.03-2.39 1.9-3.4 2.66h-7.65zm-23.64 0H22.52c-1-.76-2.1-1.63-3.4-2.66C11.57 9.3 7.08 6.78 0 6.16V0c6.25 0 11.44 1.16 16.14 3.42 3.53 1.7 5.87 3.35 10.73 7.24 4.45 3.56 7.84 5.9 11.31 7.34zM61.82 0h7.66a39.57 39.57 0 0 1-7.34 4.58C57.44 6.84 52.25 8 46 8S34.56 6.84 29.86 4.58A39.57 39.57 0 0 1 22.52 0h15.66C41.65 1.44 45.21 2 50 2c4.8 0 8.35-.56 11.82-2z"%3E%3C/path%3E%3C/svg%3E');
}
```

- html
```html
<div id="root" />
```
![](img/4.png)
![](img/5.png)


# What is React?
- **React is a javaScript libray; react's ultimate purpose is to show content (Html) to users and
handle user interaction**.
- When we say content what we're really talking about here is HTML. The asme type of HTML that you've probably learned by this point. So div's and span's, buttons forms, headers all those classic HTML elements are going to be produced by the React libray, and then they're going to show up on the screen of your user's browser. 
- Once those elements show up on the screen a user is going to somehow interact with them. So they might click on a button they might type some input into a text input or they might drag and drop some div or something around on the screen. 
- The second goal of React is to handle those user interactions. So anytime that a user manipulates our app in some fashion we want to respond to that in some way.  

# JSX
- It looks like HTML and can be placed in JavaScript code. Determines the content of our React app just like normal HTML 

---

# React is split into two separate libraries
- **React** knows what a component is and how to make components work together.
- **ReactDOM** knows how to make a component and make it show up in the DOM.


---
# Installing  Node JS
```ruby
brew install node

node -v


# How to Uninstall Node and NPM?

brew uninstall node
```

# Install create-react-app
```ruby
npm install -g create-react-app

=begin 
/usr/local/bin/create-react-app -> /usr/local/lib/node_modules/create-react-app/index.js
+ create-react-app@3.0.1
added 91 packages from 45 contributors in 4.81s
=end
```
- create-react-app, which, is a very popular package that is used to generate new React projects.
- So, now we can use to generate a new project:
```ruby
create-react-app jsx
```
---
- Result:
```ruby
λ pro [~/Desktop/React] → create-react-app jsx

Creating a new React app in /Users/Git/Desktop/React/jsx.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts...


> fsevents@1.2.9 install /Users/Git/Desktop/React/jsx/node_modules/chokidar/node_modules/fsevents
> node install

[fsevents] Success: "/Users/Git/Desktop/React/jsx/node_modules/chokidar/node_modules/fsevents/lib/binding/Release/node-v72-darwin-x64/fse.node" is installed via remote

> fsevents@1.2.9 install /Users/Git/Desktop/React/jsx/node_modules/jest-haste-map/node_modules/fsevents
> node install

[fsevents] Success: "/Users/Git/Desktop/React/jsx/node_modules/jest-haste-map/node_modules/fsevents/lib/binding/Release/node-v72-darwin-x64/fse.node" is installed via remote

> core-js@2.6.9 postinstall /Users/Git/Desktop/React/jsx/node_modules/babel-runtime/node_modules/core-js
> node scripts/postinstall || echo "ignore"


> core-js-pure@3.1.4 postinstall /Users/Git/Desktop/React/jsx/node_modules/core-js-pure
> node scripts/postinstall || echo "ignore"

+ react-scripts@3.0.1
+ react@16.8.6
+ react-dom@16.8.6
added 1547 packages from 744 contributors and audited 902137 packages in 48.945s
found 0 vulnerabilities


Initialized a git repository.

Success! Created jsx at /Users/Git/Desktop/React/jsx
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd jsx
  npm start

Happy hacking!
```
---

- so far, it's a little bit different from official documentation since they're goingto show
you a slightly different process for generating a project than what we did
- official documentation:
```ruby
npx create-react-app <name of project>

=begin 
if to do so, you don't need to run 'npm install -g create-react-app'

this statement is combined of two sentences
=end
```

- there are three dependencies:
![](img/6.png)
- the name of the dependency we want to focus on is **Babel**
- Babel is included by default.

# Now, we open the created project JSX
![](img/7.png)

- we cd to JSX folder;
```ruby
npm start
```
![](img/8.png)

- enter 'control + c' , will stop
![](img/9.png)

- delete all files from src folder

- create a new index.js into src folder

# import react and react-dom libraries
```js
import React from 'react';
import ReactDOM from 'react-dom';

/* This statement: Common JS
const React = require('react');
*/
```

# Component
![](img/11.png)

```js
//Create a react component
const App = () => {
    return <div>Hi there!</div>;
};
```

# Take the react component and show it on the screen
- using reactDOM library to take component and show it on the screen.
```js
ReactDOM.render(<App />, document.querySelector('#root'));
```
![](img/12.png)







