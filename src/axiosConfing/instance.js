
import axios from "axios";
const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
    params:{
      api_key:"8136fd690940403d68b5c0e020caf357"
    }
  });

  export default instance ;