// //Conditional Rendering
// import React from 'react';
// const VideoDetail = ({ video }) => {
//     if (!video) {
//         return <div>Loading...</div>
//     }
//     return <div>{video.snippet.title}</div>
// }
// export default VideoDetail;

























// //Styling the VideoDetail
// import React from 'react';
// const VideoDetail = ({ video }) => {
//     if (!video) {
//         return <div>Loading...</div>
//     }
//     return (
//         <div>
//             <div className="ui segment">
//                 <h4 className="ui header">{video.snippet.title}</h4>
//                 <p>{video.snippet.description}</p>
//             </div>
//         </div>
//     );
// }
// export default VideoDetail;
































// //Displaying a Video Player
// import React from 'react';
// const VideoDetail = ({ video }) => {
//     if (!video) {
//         return <div>Loading...</div>
//     }

//     const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
//     return (
//         <div>
//             <div className="ui embed">
//                 <iframe src={videoSrc} />
//             </div>
//             <div className="ui segment">
//                 <h4 className="ui header">{video.snippet.title}</h4>
//                 <p>{video.snippet.description}</p>
//             </div>
//         </div>
//     );
// }
// export default VideoDetail;































//Fixing a Few Warnings
import React from 'react';
const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>Loading...</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div>
            <div className="ui embed">
                <iframe title="video player" src={videoSrc} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
}
export default VideoDetail;