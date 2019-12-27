// //Extracting JSX to New Components
// import React from 'react';
// import faker from 'faker';

// const CommentDetail = () => {
//     return (
//         <div className="comment">
//             <a href="/" className="avatar">
//                 <img alt="avatar" src={faker.image.avatar()} />
//             </a>
//             <div className="content">
//                 <a href="/" className="author">
//                     Sam
//                 </a>
//                 <div className="metadata">
//                     <span className="date">Today at 6:00 PM</span>
//                 </div>
//                 <div className="text">Nice blog post!</div>
//             </div>
//         </div>
//     );
// };
// export default CommentDetail;




























// //Passing and Receiving Propos
// import React from 'react';
// import faker from 'faker';

// const CommentDetail = (props) => {
//     console.log(props);
//     return (
//         <div className="comment">
//             <a href="/" className="avatar">
//                 <img alt="avatar" src={faker.image.avatar()} />
//             </a>
//             <div className="content">
//                 <a href="/" className="author">
//                     {props.author}
//                 </a>
//                 <div className="metadata">
//                     <span className="date">Today at 6:00 PM</span>
//                 </div>
//                 <div className="text">Nice blog post!</div>
//             </div>
//         </div>
//     );
// };
// export default CommentDetail;




























//Passing Multiple Props
import React from 'react';
import faker from 'faker';

const CommentDetail = (props) => {
    // console.log(props);
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.avatar} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date">{props.timeAgo}</span>
                </div>
                <div className="text">{props.content}</div>
            </div>
        </div>
    );
};
export default CommentDetail;