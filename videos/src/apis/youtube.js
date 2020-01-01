// import axios from 'axios';
// const KEY = 'AIzaSyCKFtJ8pTpAqg2JVfyPMfUzMS-LKX9qr2E';

// export default axios.create({
//     baseURL: 'https://www.googleapis.com/youtube/v3/',
//     params: {
//         part: 'snippet',
//         maxResults: 5,
//         key: KEY
//     }
// });

































import axios from 'axios';
const KEY = 'AIzaSyCKFtJ8pTpAqg2JVfyPMfUzMS-LKX9qr2E';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: `${KEY}`
    }
});