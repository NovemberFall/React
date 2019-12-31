## Fetching Data
![](img/2019-12-30-14-24-31.png)
- `https://unsplash.com/developers` api
- click `Register as a developer`
![](img/2019-12-30-14-32-38.png)
- click `your apps`
- `new application`
![](img/2019-12-30-14-41-09.png)
---

## Axios vs Fetch
![](img/2019-12-30-14-47-04.png)
![](img/2019-12-30-14-47-53.png)
- for axios is third party API, so we need to install
- the other option is the `fetch` function, which is a singular function that is build into almost all modern browsers.
- 
- install axios
- `npm install --save axios`
---


### Viewing Request Results
- how to use API
- click `Documentaion`
- on the left navigation bar,
![](img/2019-12-30-15-10-18.png)
- `Schema`-> `location`
- The API is available at `https://api.unsplash.com/`. Responses are sent as JSON.
- 
- update App.js in `pics` project
```js
//Axios vs Fetch, Viewing Request Results
import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
class App extends React.Component {
    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {

        });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar
                    onSubmit={this.onSearchSubmit}
                />
            </div >
        );
    }
};
export default App;
```
- we have to actually identify ourselves and who is trying to access the Sunsplash API.
- the instruction: `https://unsplash.com/documentation#authorization`
![](img/2019-12-30-15-42-05.png)
- put our ACCESS_KEY into APP.js, go back to `Your apps` to find our key
![](img/2019-12-30-15-48-40.png)
- copy our `Access Key`
- go to `Search`-> `Search photos`
- update App.js
```js
//Axios vs Fetch, Viewing Request Results
import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
class App extends React.Component {
    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID 06162288b9848c9af42616ef69fd67b3c13761510fc01192ffa9aaabef240ffb'
            }
        });
    }
    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar
                    onSubmit={this.onSearchSubmit}
                />
            </div >
        );
    }
};
export default App;
```
![](img/2019-12-30-16-01-38.png)
- input `cars`
- we get those pthotos

