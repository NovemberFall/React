// import axios from 'axios';
// const KEY = 'this is an example';

// export default axios.create({
//     baseURL: 'https://www.googleapis.com/youtube/v3/',
//     params: {
//         part: 'snippet',
//         maxResults: 5,
//         key: KEY
//     }
// });

































import axios from 'axios';
const KEY = 'example';

//other person's api, but it can work
// const KEY = 'example';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: `${KEY}`
    }
});
