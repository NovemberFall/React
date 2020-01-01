// import React from 'react';
// import SearchBar from './SearchBar';
// class App extends React.Component {
//     render() {
//         return <div><SearchBar /></div>;
//     }
// }
// export default App;




























// //Reminder on Event Handlers
// import React from 'react';
// import SearchBar from './SearchBar';
// class App extends React.Component {
//     render() {
//         return (
//             <div className="ui container">
//                 <SearchBar />
//             </div>
//         );
//     }
// }
// export default App;

























// //Putting it ALL Together
// import React from 'react';
// import SearchBar from './SearchBar';
// import youtube from '../apis/youtube';

// class App extends React.Component {
//     onTermSubmit = (term) => {
//         youtube.get('/search', {
//             params: {
//                 q: term
//             }
//         });
//     };

//     render() {
//         return (
//             <div className="ui container">
//                 <SearchBar onFormSubmit={this.onTermSubmit} />
//             </div>
//         );
//     }
// }
// export default App;































// //Updating State with Fetched Data
// import React from 'react';
// import SearchBar from './SearchBar';
// import youtube from '../apis/youtube';

// class App extends React.Component {
//     state = { videos: [] };

//     onTermSubmit = async (term) => {
//         const response = await youtube.get('/search', {
//             params: {
//                 q: term
//             }
//         });
//         // console.log(response);
//         this.setState({ videos: response.data.items });
//     };

//     render() {
//         return (
//             <div className="ui container">
//                 <SearchBar onFormSubmit={this.onTermSubmit} />
//                 I have {this.state.videos.length} videos.
//             </div>
//         );
//     }
// }
// export default App;





























// //Passing State as Props
// import React from 'react';
// import SearchBar from './SearchBar';
// import youtube from '../apis/youtube';
// import VideoList from './VideoList';

// class App extends React.Component {
//     state = { videos: [] };

//     onTermSubmit = async (term) => {
//         const response = await youtube.get('/search', {
//             params: {
//                 q: term
//             }
//         });
//         // console.log(response);
//         this.setState({ videos: response.data.items });
//     };

//     render() {
//         return (
//             <div className="ui container">
//                 <SearchBar onFormSubmit={this.onTermSubmit} />
//                 <VideoList videos={this.state.videos} />
//             </div>
//         );
//     }
// }
// export default App;

































//Deeply Nested Callbacks
import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        // console.log(response);
        this.setState({ videos: response.data.items });
    };

    onVideoSelect = (video) => {
        console.log('From the App!', video);
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
        );
    }
}
export default App;