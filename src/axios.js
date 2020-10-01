import axios from "axios";

//base url to make requests to mongoDB 
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

//instance.get('/foo-bar');
//example: https://api.themoviedb.org/3/foo-bar

export default instance;