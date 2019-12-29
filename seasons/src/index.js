// import React from 'react';
// import ReactDOM from 'react-dom';

// class App extends React.Component {
//     render() {
//         window.navigator.geolocation.getCurrentPosition(
//             (position) => console.log(position),
//             (err) => console.log(err)
//         );

//         return <div>Latitude: </div>;
//     }
// }

// ReactDOM.render(<App />, document.getElementById('root'));





















// //this.props.value
// import React from 'react';
// import ReactDOM from 'react-dom';

// class App extends React.Component {
//     render() {
//         window.navigator.geolocation.getCurrentPosition(
//             (position) => console.log(position),
//             (err) => console.log(err)
//         );

//         return <div>Latitude: {this.props.name} {this.props.str}</div>;
//     }
// }

// ReactDOM.render(<div>
//     <App name="hello" str="world"></App>


// </div>, document.getElementById('root'));
























// //Initializing State Through Constructors
// import React from 'react';
// import ReactDOM from 'react-dom';

// class App extends React.Component {
//     constructor(props) {
//         super(props);

//         //THIS IS THE ONLY TIME we do direct assignment to this.state
//         this.state = { lat: null };

//         window.navigator.geolocation.getCurrentPosition(
//             (position) => {
//                 //we called setState
//                 this.setState({ lat: position.coords.latitude });

//                 //we never do this:
//                 // this.state.lat = position.coords.latitude;
//             },
//             (err) => console.log(err)
//         );
//     }
//     render() {

//         return <div>Latitude: {this.state.lat}</div>;
//     }
// }

// ReactDOM.render(<App />, document.getElementById('root'));































// //Handling Errors Carefully
// import React from 'react';
// import ReactDOM from 'react-dom';

// class App extends React.Component {
//     constructor(props) {
//         super(props);

//         //THIS IS THE ONLY TIME we do direct assignment to this.state
//         this.state = { lat: null };

//         window.navigator.geolocation.getCurrentPosition(
//             (position) => {
//                 //we called setState
//                 this.setState({ lat: position.coords.latitude });

//                 //we never do this:
//                 // this.state.lat = position.coords.latitude;
//             },
//             (err) => {
//                 this.setState({ errorMessage: err.message });
//             }
//         );
//     };

//     render() {

//         return (
//             <div>
//                 Latitude: {this.state.lat}
//                 <br />
//                 Error: {this.state.errorMessage}
//             </div>
//         );
//     }
// }

// ReactDOM.render(<App />, document.getElementById('root'));































// //Conditionally Rendering Content
// import React from 'react';
// import ReactDOM from 'react-dom';

// class App extends React.Component {
//     constructor(props) {
//         super(props);

//         //THIS IS THE ONLY TIME we do direct assignment to this.state
//         this.state = { lat: null, errorMessage: '' };

//         window.navigator.geolocation.getCurrentPosition(
//             (position) => {
//                 //we called setState
//                 this.setState({ lat: position.coords.latitude });

//                 //we never do this:
//                 // this.state.lat = position.coords.latitude;
//             },
//             (err) => {
//                 this.setState({ errorMessage: err.message });
//             }
//         );
//     };

//     //life cycle function
//     componentDidMount() {
//         console.log('My component was rendered to the screen');
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

































// //Why Lifecycle Methods?
// import React from 'react';
// import ReactDOM from 'react-dom';

// class App extends React.Component {
//     constructor(props) {
//         super(props);

//         //THIS IS THE ONLY TIME we do direct assignment to this.state
//         this.state = { lat: null, errorMessage: '' };

//         window.navigator.geolocation.getCurrentPosition(
//             (position) => {
//                 //we called setState
//                 this.setState({ lat: position.coords.latitude });

//                 //we never do this:
//                 // this.state.lat = position.coords.latitude;
//             },
//             (err) => {
//                 this.setState({ errorMessage: err.message });
//             }
//         );
//     };

//     //life cycle function
//     componentDidMount() {
//         console.log('My component was rendered to the screen');
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




























//Refactoring Data Loading to Lifecycle Methods
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        //THIS IS THE ONLY TIME we do direct assignment to this.state
        this.state = { lat: null, errorMessage: '' };


    };

    //life cycle function
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => { this.setState({ lat: position.coords.latitude }); },
            (err) => { this.setState({ errorMessage: err.message }); }
        );
    }

    componentDidUpdate() {
        console.log('My component was just updated - it rerendered!');
    }


    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>
        }

        return <div>Loading!</div>
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
