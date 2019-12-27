// import React from 'react';
// import ReactDOM from 'react-dom';

// const App = () => {
//     return (
//         <div className="ui container comments">
//             <div className="comment">
//                 <a href="/" className="avatar">
//                     <img alt="avatar" />
//                 </a>
//                 <div className="content">
//                     <a href="/" className="author">
//                         Sam
//                     </a>
//                     <div className="metadata">
//                         <span className="date">Today at 6:00 PM</span>
//                     </div>
//                     <div className="text">Nice blog post!</div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// ReactDOM.render(<App />, document.getElementById('root'));



























////Specifying Images in JSX
// import React from 'react';
// import ReactDOM from 'react-dom';
// import faker from 'faker';

// const App = () => {
//     return (
//         <div className="ui container comments">
//             <div className="comment">
//                 <a href="/" className="avatar">
//                     <img alt="avatar" src={faker.image.avatar()} />
//                 </a>
//                 <div className="content">
//                     <a href="/" className="author">
//                         Sam
//                     </a>
//                     <div className="metadata">
//                         <span className="date">Today at 6:00 PM</span>
//                     </div>
//                     <div className="text">Nice blog post!</div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// ReactDOM.render(<App />, document.getElementById('root'));




























// //Duplicating a Single Component
// import React from 'react';
// import ReactDOM from 'react-dom';
// import faker from 'faker';

// const App = () => {
//     return (
//         <div className="ui container comments">
//             <div className="comment">
//                 <a href="/" className="avatar">
//                     <img alt="avatar" src={faker.image.avatar()} />
//                 </a>
//                 <div className="content">
//                     <a href="/" className="author">
//                         Sam
//                     </a>
//                     <div className="metadata">
//                         <span className="date">Today at 6:00 PM</span>
//                     </div>
//                     <div className="text">Nice blog post!</div>
//                 </div>
//             </div>
//             <div className="comment">
//                 <a href="/" className="avatar">
//                     <img alt="avatar" src={faker.image.avatar()} />
//                 </a>
//                 <div className="content">
//                     <a href="/" className="author">
//                         Sam
//                     </a>
//                     <div className="metadata">
//                         <span className="date">Today at 6:00 PM</span>
//                     </div>
//                     <div className="text">Nice blog post!</div>
//                 </div>
//             </div>
//             <div className="comment">
//                 <a href="/" className="avatar">
//                     <img alt="avatar" src={faker.image.avatar()} />
//                 </a>
//                 <div className="content">
//                     <a href="/" className="author">
//                         Sam
//                     </a>
//                     <div className="metadata">
//                         <span className="date">Today at 6:00 PM</span>
//                     </div>
//                     <div className="text">Nice blog post!</div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// ReactDOM.render(<App />, document.getElementById('root'));
































// //Extracting JSX to New Components
// import React from 'react';
// import ReactDOM from 'react-dom';
// import faker from 'faker';
// import CommentDeatil from './CommentDetail';

// const App = () => {
//     return (
//         <div className="ui container comments">
//             <CommentDeatil />
//             <CommentDeatil />
//             <CommentDeatil />
//             <CommentDeatil />
//             <CommentDeatil />
//         </div>
//     );
// };

// ReactDOM.render(<App />, document.getElementById('root'));






























// //Passing and Receiving Propos
// import React from 'react';
// import ReactDOM from 'react-dom';
// import faker from 'faker';
// import CommentDeatil from './CommentDetail';

// const App = () => {
//     return (
//         <div className="ui container comments">
//             <CommentDeatil author="Sam" />
//             <CommentDeatil author="Alex" />
//             <CommentDeatil author="Jane" />
//         </div>
//     );
// };

// ReactDOM.render(<App />, document.getElementById('root'));

































// //Passing Multiple Props
// import React from 'react';
// import ReactDOM from 'react-dom';
// import faker from 'faker';
// import CommentDeatil from './CommentDetail';

// const App = () => {
//     return (
//         <div className="ui container comments">
//             <CommentDeatil
//                 author="Sam"
//                 timeAgo="Today at 4:45PM"
//                 content="Nice blog post"
//                 avatar={faker.image.avatar()}
//             />
//             <CommentDeatil
//                 author="Alex"
//                 timeAgo="Today at 2:00AM"
//                 content="I like the subject"
//                 avatar={faker.image.avatar()}
//             />
//             <CommentDeatil
//                 author="Jane"
//                 timeAgo="Yesterday at 5:00PM"
//                 content="I like the writing"
//                 avatar={faker.image.avatar()}
//             />
//         </div>
//     );
// };

// ReactDOM.render(<App />, document.getElementById('root'));





























// //Implementing an Approval Card
// import React from 'react';
// import ReactDOM from 'react-dom';
// import faker from 'faker';
// import CommentDeatil from './CommentDetail';
// import ApprovalCard from './ApprovalCard';

// const App = () => {
//     return (
//         <div className="ui container comments">
//             <ApprovalCard />
//             <CommentDeatil
//                 author="Sam"
//                 timeAgo="Today at 4:45PM"
//                 content="Nice blog post"
//                 avatar={faker.image.avatar()}
//             />
//             <CommentDeatil
//                 author="Alex"
//                 timeAgo="Today at 2:00AM"
//                 content="I like the subject"
//                 avatar={faker.image.avatar()}
//             />
//             <CommentDeatil
//                 author="Jane"
//                 timeAgo="Yesterday at 5:00PM"
//                 content="I like the writing"
//                 avatar={faker.image.avatar()}
//             />
//         </div>
//     );
// };

// ReactDOM.render(<App />, document.getElementById('root'));
































//Showing Custom Children
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDeatil from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDeatil
                    author="Sam"
                    timeAgo="Today at 4:45PM"
                    content="Nice blog post"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDeatil
                    author="Alex"
                    timeAgo="Today at 2:00AM"
                    content="I like the subject"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDeatil
                    author="Jane"
                    timeAgo="Yesterday at 5:00PM"
                    content="I like the writing"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));