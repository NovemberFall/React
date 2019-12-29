// import React from 'react';

// const getSeason = (lat, month) => {
//     if (month > 2 && month < 9) {
//         return lat > 0 ? 'summer' : 'winter';
//     } else {
//         return lat > 0 ? 'winter' : 'summer';
//     }
// };

// const SeasonDisplay = (props) => {
//     const season = getSeason(props.lat, new Date().getMonth());
//     console.log(season);

//     return <div>Seanson Display</div>;
// };
// export default SeasonDisplay;






















// //Ternary Expressions in JSX
// import React from 'react';

// const getSeason = (lat, month) => {
//     if (month > 2 && month < 9) {
//         return lat > 0 ? 'summer' : 'winter';
//     } else {
//         return lat > 0 ? 'winter' : 'summer';
//     }
// };

// const SeasonDisplay = (props) => {
//     const season = getSeason(props.lat, new Date().getMonth());
//     console.log(season);

//     return <div>{season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach'}</div>;
// };
// export default SeasonDisplay;


























// //Showing Icons
// import React from 'react';

// const getSeason = (lat, month) => {
//     if (month > 2 && month < 9) {
//         return lat > 0 ? 'summer' : 'winter';
//     } else {
//         return lat > 0 ? 'winter' : 'summer';
//     }
// };

// const SeasonDisplay = (props) => {
//     const season = getSeason(props.lat, new Date().getMonth());
//     const text = (season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach');
//     const icon = (season === 'winter' ? 'snowflake' : 'sun');

//     return (
//         <div>
//             <i className={`${icon} icon`} />
//             <h1>{text}</h1>
//             <i className={`${icon} icon`} />
//         </div>
//     );
// };
// export default SeasonDisplay;
























// //Extracting Options to Config Objects
// import React from 'react';

// const seasonConfig = {
//     summer: {
//         text: 'Lets hit the beach!',
//         iconName: 'sun'
//     },
//     winter: {
//         text: 'Burr it is cold!',
//         iconName: 'snowflake'
//     }
// };

// const getSeason = (lat, month) => {
//     if (month > 2 && month < 9) {
//         return lat > 0 ? 'summer' : 'winter';
//     } else {
//         return lat > 0 ? 'winter' : 'summer';
//     }
// };

// const SeasonDisplay = (props) => {
//     const season = getSeason(props.lat, new Date().getMonth());
//     const { text, iconName } = seasonConfig[season];

//     return (
//         <div>
//             <i className={`${iconName} icon`} />
//             <h1>{text}</h1>
//             <i className={`${iconName} icon`} />
//         </div>
//     );
// };
// export default SeasonDisplay;





























//Adding Some Styling
import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
    summer: {
        text: 'Lets hit the beach!',
        iconName: 'sun'
    },
    winter: {
        text: 'Burr it is cold!',
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
};
export default SeasonDisplay;