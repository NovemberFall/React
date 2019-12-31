import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',

    headers: {
        Authorization: 'Client-ID 06162288b9848c9af42616ef69fd67b3c13761510fc01192ffa9aaabef240ffb'
    }
});