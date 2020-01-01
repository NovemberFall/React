// import React from 'react';

// const VideoItem = (props) => {
//     return <div>Video Item</div>;
// };
// export default VideoItem;
























//Rendering Video Thumbnails
import React from 'react';

const VideoItem = ({ video }) => {
    return <div>{video.snippet.title}</div>;
};
export default VideoItem;