// import React from 'react';

// class SearchBar extends React.Component {
//     render() {
//         return <div>SearchBar</div>;
//     }
// }
// export default SearchBar;





















// //Reminder on Event Handlers
// import React from 'react';

// class SearchBar extends React.Component {
//     state = { term: '' }

//     onInputChange = (event) => {
//         this.setState({ term: event.target.value })
//     };

//     onFormSubmit = (event) => {
//         event.preventDefault();

//         //TODO: Make sure we call
//         //callback from parent component
//     };

//     render() {
//         return (
//             <div className="search-bar ui segment">
//                 <form onSubmit={this.onFromSubmit} className="ui form">
//                     <div className='field'>
//                         <label>Video Search</label>
//                         <input type="text"
//                             value={this.state.term}
//                             onChange={this.onInputChange}
//                         />
//                     </div>
//                 </form>
//             </div>
//         );
//     }
// }
// export default SearchBar;

































// // Accessing the Youtube API
// import React from 'react';

// class SearchBar extends React.Component {
//     state = { term: '' }

//     onInputChange = (event) => {
//         this.setState({ term: event.target.value })
//     };

//     onFormSubmit = (event) => {
//         event.preventDefault();

//         //TODO: Make sure we call
//         //callback from parent component
//     };

//     render() {
//         return (
//             <div className="search-bar ui segment">
//                 <form onSubmit={this.onFromSubmit} className="ui form">
//                     <div className='field'>
//                         <label>Video Search</label>
//                         <input type="text"
//                             value={this.state.term}
//                             onChange={this.onInputChange}
//                         />
//                     </div>
//                 </form>
//             </div>
//         );
//     }
// }
// export default SearchBar;































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























