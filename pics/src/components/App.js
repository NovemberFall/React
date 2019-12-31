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































// //Axios vs Fetch, Viewing Request Results
// import React from 'react';
// import axios from 'axios';
// import SearchBar from './SearchBar';

// class App extends React.Component {
//     onSearchSubmit(term) {
//         axios.get('https://api.unsplash.com/search/photos', {
//             params: { query: term },
//             headers: {
//                 Authorization: 'Client-ID 06162288b9848c9af42616ef69fd67b3c13761510fc01192ffa9aaabef240ffb'
//             }
//         });
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





























// //Handling Request with Async Await
// import React from 'react';
// import axios from 'axios';
// import SearchBar from './SearchBar';

// class App extends React.Component {
//     async onSearchSubmit(term) {
//         const response = await axios.get('https://api.unsplash.com/search/photos', {
//             params: { query: term },
//             headers: {
//                 Authorization: 'Client-ID 06162288b9848c9af42616ef69fd67b3c13761510fc01192ffa9aaabef240ffb'
//             }
//         });

//         console.log(response.data.results);
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


























// //Setting State After Async Requests
// import React from 'react';
// import axios from 'axios';
// import SearchBar from './SearchBar';
// class App extends React.Component {
//     state = { images: [] }

//     async onSearchSubmit(term) {
//         const response = await axios.get('https://api.unsplash.com/search/photos', {
//             params: { query: term },
//             headers: {
//                 Authorization: 'Client-ID 06162288b9848c9af42616ef69fd67b3c13761510fc01192ffa9aaabef240ffb'
//             }
//         });

//         this.setState({ images: response.data.results });
//     }

//     render() {
//         return (
//             <div className="ui container" style={{ marginTop: '10px' }}>
//                 <SearchBar onSubmit={this.onSearchSubmit} />
//                 Found: {this.state.images.length} images;
//             </div >
//         );
//     }
// };
// export default App;



























// //Binding Callbacks
// import React from 'react';
// import axios from 'axios';
// import SearchBar from './SearchBar';
// class App extends React.Component {
//     state = { images: [] }

//     onSearchSubmit = async (term) => {
//         const response = await axios.get('https://api.unsplash.com/search/photos', {
//             params: { query: term },
//             headers: {
//                 Authorization: 'Client-ID 06162288b9848c9af42616ef69fd67b3c13761510fc01192ffa9aaabef240ffb'
//             }
//         });

//         this.setState({ images: response.data.results });
//     }

//     render() {
//         return (
//             <div className="ui container" style={{ marginTop: '10px' }}>
//                 <SearchBar onSubmit={this.onSearchSubmit} />
//                 Found: {this.state.images.length} images;
//             </div >
//         );
//     }
// };
// export default App;

























//Creating Custom Clients
import React from 'react';
import unsplash from '../api/unpslash';
import SearchBar from './SearchBar';
class App extends React.Component {
    state = { images: [] }

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('search/photos', {
            params: { query: term }
        });

        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images;
            </div >
        );
    }
};
export default App;