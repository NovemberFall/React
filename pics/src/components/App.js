// import React from 'react';
// import SearchBar from './SearchBar';

// class App extends React.Component {
//     onSearchSubmit(term) {
//         console.log(term);
//     }

//     render() {
//         return (
//             <div className="ui container" style={{ marginTop: '10px' }}>
//                 <SearchBar
//                     onSubmit={this.onSearchSubmit}
//                 />
//             </div >
//         );
//     }
// };

// export default App;































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