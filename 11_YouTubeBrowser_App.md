## App Overview
![](img/2019-12-31-13-35-10.png)
---

## Component Design
![](img/2019-12-31-13-35-59.png)
![](img/2019-12-31-13-54-13.png)
---

## Scaffolding the App
- create a new project named `videos`
- `npx create-react-app videos`
- delete all files from src folder
- 
- create index.js
```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App />, document.querySelector('#root'));
```
-
- create App.js, index import App
```js
import React from 'react';
import SearchBar from './SearchBar';
class App extends React.Component {
    render() {
        return <div><SearchBar /></div>;
    }
}
export default App;
```
-
- create SearchBar.js
```js
import React from 'react';

class SearchBar extends React.Component {
    render() {
        return <div>SearchBar</div>;
    }
}
export default SearchBar;
```
![](img/2019-12-31-16-44-10.png)
---


## Reminder on Event Handlers
- import semantic.css into index.html
- `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />`
- 
- update SearchBar.js
```js
//Reminder on Event Handlers
import React from 'react';

class SearchBar extends React.Component {
    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form">
                    <div className='field'>
                        <label>Video Search</label>
                        <input type="text" />
                    </div>
                </form>
            </div>
        );
    }
}
export default SearchBar;
```
-
- update App
```js
//Reminder on Event Handlers
import React from 'react';
import SearchBar from './SearchBar';
class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                <SearchBar />
            </div>
        );
    }
}
export default App;
```
![](img/2019-12-31-20-59-21.png)
---
-
- update SearchBar
```js
//Reminder on Event Handlers
import React from 'react';

class SearchBar extends React.Component {
    state = { term: 'Hello world!' }
    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form">
                    <div className='field'>
                        <label>Video Search</label>
                        <input type="text" value={this.state.term} />
                    </div>
                </form>
            </div>
        );
    }
}
export default SearchBar;
```
![](img/2019-12-31-21-06-26.png)
- the warning states that we should provide a `onChange`
---

## Handling Form Submittal
- update SearchBar
```js
//Reminder on Event Handlers
import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' }

    onInputChange = (event) => {
        this.setState({ term: event.target.value })
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        //TODO: Make sure we call
        //callback from parent component
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFromSubmit} className="ui form">
                    <div className='field'>
                        <label>Video Search</label>
                        <input type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}
export default SearchBar;
```
---


## Accessing the Youtube API
![](img/2019-12-31-22-31-01.png)
- go to google API
- `console.developers.google.com`
![](img/2019-12-31-22-36-46.png)
![](img/2019-12-31-22-37-12.png)
- click `NEW PROJECT`
![](img/2019-12-31-22-39-24.png)
- click `create`
![](img/2019-12-31-22-41-26.png)
- choose and click `videos browser `
![](img/2019-12-31-22-42-15.png)
- click `ENABLE APIS AND SERVICES`
![](img/2019-12-31-22-51-48.png)
- on search bar, input `youtube`
![](img/2019-12-31-22-52-24.png)
- choose `YouTube Data API v3`
- click
![](img/2019-12-31-22-55-37.png)
- click `ENABLE`
![](img/2019-12-31-22-56-57.png)
![](img/2019-12-31-22-59-47.png)
![](img/2019-12-31-23-01-01.png)
- copied this key
- go back to our app
![](img/2019-12-31-23-02-29.png)
- create `apis` -> `youtube.js`
- pass current copied key into `youtube.js`
---

## Searching for Videos
- google search `youtube api search`
![](img/2020-01-01-10-22-51.png)
- `GET https://www.googleapis.com/youtube/v3/search`
- the base URL is : `https://www.googleapis.com/youtube/v3/`
-
- create youtube.js
```js
import axios from 'axios';
const KEY = 'AIzaSyCKFtJ8pTpAqg2JVfyPMfUzMS-LKX9qr2E';
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
```
- install axios
- `npm install --save axios@0.18.1`
---


## Adding a Video Type
- At some point in the course you may end up getting **Warning: Each child in a list should have a unique "key" prop** even after we add a key prop in the "Fixing a Few Warnings" lecture. To ensure that this is not an issue, we should add a type parameter to our axios config object to only search for videos.
- update youtube.js
```js
import axios from 'axios';
const KEY = 'AIzaSyCKFtJ8pTpAqg2JVfyPMfUzMS-LKX9qr2E';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: `${KEY}`
    }
});
```
---

## Putting it ALL Together
- update App
```js
//Putting it ALL Together
import React from 'react';
import SearchBar from './SearchBar';
class App extends React.Component {
    onTermSubmit = (term) => {
        console.log(term);
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
            </div>
        );
    }
}
export default App;
```
-
- update SearchBar
```js
// Putting it ALL Together
import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' }

    onInputChange = (event) => {
        this.setState({ term: event.target.value })
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        //TODO: Make sure we call
        //callback from parent component
        this.props.onFormSubmit(this.state.term);
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className='field'>
                        <label>Video Search</label>
                        <input type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}
export default SearchBar;
```
- Note: without `event.preventDefault();`, it can't print msg that you input
![](img/2020-01-01-11-41-35.png)
-
- update App
```js
//Putting it ALL Together
import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component {
    onTermSubmit = (term) => {
        youtube.get('/search', {
            params: {
                q: term
            }
        });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
            </div>
        );
    }
}
export default App;
```
![](img/2020-01-01-12-44-56.png)
![](img/2020-01-01-12-45-49.png)
---

## Updating State with Fetched Data
- update App
```js
class App extends React.Component {
    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        console.log(response);
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
            </div>
        );
    }
}
```
![](img/2020-01-01-12-52-07.png)




