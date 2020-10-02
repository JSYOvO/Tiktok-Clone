import axios from 'axios';

const instance = axios.create({
    baseURL : "https://yoo-tiktok-clone-backend.herokuapp.com/",
})

export default instance;
