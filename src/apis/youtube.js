import axios from 'axios';

const KEY = 'AIzaSyBX-AZ_A6jv2QddYYVSjKsEuMh0EjjkQyc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})