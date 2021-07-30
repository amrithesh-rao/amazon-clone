import axios from "axios";

const instance  = axios.create({
    //baseURL: 'http://localhost:5001/clone-70a8b/us-central1/api'
    baseURL: 'https://us-central1-clone-70a8b.cloudfunctions.net/api'
});

export default instance;