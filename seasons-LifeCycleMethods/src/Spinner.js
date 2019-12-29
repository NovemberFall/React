// import React from 'react';

// const Spinner = () => {
//     return (
//         // using Semantic UI
//         <div className="ui active dimmer">
//             <div className="ui big text loader">
//                 Loading...
//             </div>
//         </div>
//     );
// };
// export default Spinner;




























//Specifying Default Props
import React from 'react';

const Spinner = (props) => {
    return (
        // using Semantic UI
        <div className="ui active dimmer">
            <div className="ui big text loader">
                {props.message}
                {/* {props.message || 'Hello World!'} */}
            </div>
        </div>
    );
};

Spinner.defaultProps = {
    // message: 'Loading...'
    message: 'Loading...'
};

export default Spinner;