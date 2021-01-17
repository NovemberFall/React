import axios from 'axios';
const KEY = 'this is an example';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

































import axios from 'axios';
const KEY = 'AIzaSyAeNLo14Hf8a5pQXoFMFTCjbwvfvBkSJBU';

//other person's api, but it can work
// const KEY = 'AIzaSyBXAyimeyDQaq0xckMpjEG4NzYGJR_XTbg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: `${KEY}`
    }
});
