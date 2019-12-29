// //Refactoring Data Loading to Lifecycle Methods
// import React from 'react';
// import ReactDOM from 'react-dom';

// class App extends React.Component {
//     state = { lat: null, errorMessage: '' };//dont need to `this.state =`

//     constructor(props) {
//         super(props);

//         //THIS IS THE ONLY TIME we do direct assignment to this.state
//         // this.state = { lat: null, errorMessage: '' };
//     };

//     //life cycle function
//     componentDidMount() {
//         window.navigator.geolocation.getCurrentPosition(
//             (position) => { this.setState({ lat: position.coords.latitude }); },
//             (err) => { this.setState({ errorMessage: err.message }); }
//         );
//     }

//     componentDidUpdate() {
//         console.log('My component was just updated - it rerendered!');
//     }


//     render() {
//         if (this.state.errorMessage && !this.state.lat) {
//             return <div>Error: {this.state.errorMessage}</div>
//         }

//         if (!this.state.errorMessage && this.state.lat) {
//             return <div>Latitude: {this.state.lat}</div>
//         }

//         return <div>Loading!</div>
//     }
// }

// ReactDOM.render(<App />, document.getElementById('root'));



























// //Passing State as Props
// import React from 'react';
// import ReactDOM from 'react-dom';
// import SeasonDisplay from './SeasonDisplay';

// class App extends React.Component {
//     state = { lat: null, errorMessage: '' };//dont need to `this.state =`

//     //life cycle function
//     componentDidMount() {
//         window.navigator.geolocation.getCurrentPosition(
//             (position) => { this.setState({ lat: position.coords.latitude }); },
//             (err) => { this.setState({ errorMessage: err.message }); }
//         );
//     }

//     componentDidUpdate() {
//         console.log('My component was just updated - it rerendered!');
//     }


//     render() {
//         if (this.state.errorMessage && !this.state.lat) {
//             return <div>Error: {this.state.errorMessage}</div>
//         }

//         if (!this.state.errorMessage && this.state.lat) {
//             return <SeasonDisplay lat={this.state.lat} />
//         }

//         return <div>Loading!</div>
//     }
// }

// ReactDOM.render(<App />, document.getElementById('root'));































//Determining Season
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    state = { lat: null, errorMessage: '' };//dont need to `this.state =`

    //life cycle function
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => { this.setState({ lat: position.coords.latitude }); },
            (err) => { this.setState({ errorMessage: err.message }); }
        );
    }

    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <div>Loading!</div>
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
