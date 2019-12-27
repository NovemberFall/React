// //one way for solve `this`
// import React from 'react';

// class SearchBar extends React.Component {
//     state = { term: 'Hi there!' };

//     onFormSubmit(event) {
//         event.preventDefault();
//         console.log(this.state.term);
//     }
//     render() {
//         return (
//             <div className="ui segment">
//                 <form onSubmit={(event) => this.onFormSubmit(event)} className="ui form">
//                     <div className="field">
//                         <label>Image Search</label>
//                         <input type="text"
//                             value={this.state.term}
//                             onChange={(e) => this.setState({ term: e.target.value })}
//                         />
//                     </div>
//                 </form>
//             </div>
//         );
//     }
// }
// export default SearchBar;

















//2nd way to solve `this`, by using arrow function
import React from 'react';

class SearchBar extends React.Component {
    state = { term: 'Hi there!' };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text"
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }

}
export default SearchBar;