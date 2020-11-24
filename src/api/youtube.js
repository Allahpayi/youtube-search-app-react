import axios  from 'axios';
const KEY = "AIzaSyBekD14KE5yWdBeKTrxhx9fyJ56qSfVRw8";


export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part:'snippet',
        maxResults:20,
        key:KEY
    },
    headers:{}
})