// import React from 'react';

// const VideoItem = (props) => {
//     return <div>Video Item</div>;
// };
// export default VideoItem;
























// //Rendering Video Thumbnails
// import React from 'react';

// const VideoItem = ({ video }) => {
//     return (
//         <div>
//             <img src={video.snippet.thumbnails.medium.url} />
//             {video.snippet.title}
//         </div>
//     );
// };
// export default VideoItem;



























// //Styling a List
// import React from 'react';
// import './VideoItem.css';

// const VideoItem = ({ video }) => {
//     return (
//         <div className="video-item item">
//             <img className="ui image" src={video.snippet.thumbnails.medium.url} />
//             <div className="content">
//                 <div className="header">{video.snippet.title}</div>
//             </div>
//         </div>
//     );
// };
// export default VideoItem;
































// //Deeply Nested Callbacks
// import React from 'react';
// import './VideoItem.css';

// const VideoItem = ({ video, onVideoSelect }) => {
//     return (
//         <div onClick={() => { onVideoSelect(video) }} className="video-item item">
//             <img className="ui image" src={video.snippet.thumbnails.medium.url} />
//             <div className="content">
//                 <div className="header">{video.snippet.title}</div>
//             </div>
//         </div>
//     );
// };
// export default VideoItem;



























//Fixing a Few Warnings
import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div onClick={() => { onVideoSelect(video) }} className="video-item item">
            <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    );
};
export default VideoItem;