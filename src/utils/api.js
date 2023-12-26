import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

//we can follow this type also
// const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzJiZGVjNjc4NDA0MzUyZWU2N2E4NzY0M2E3NTA5NSIsInN1YiI6IjY1ODdmMDUxZTI5NWI0NzEyZDU4MmI2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oiVS-3y52ngOQd_9iuyRpCxQyfNpTED5-_PGjMvtmsM"
// const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
const TMDB_API_Key = import.meta.env.VITE_APP_TMDB_KEY;


// const headers = {
//     Autorization:"bearer "+ TMDB_API_Key,
//     accept: 'application/json()'
// }


//exporting the method here
export const fetchDataFromApi = async (url,params) =>{
    // console.log(url.includes("?"))
    // for(let s of url){
    //     if(url.includes("?")){
    //         console.log(true);
    //     }
    // }
    try {
        const {data} = await axios.get(BASE_URL+url+`${url.includes("?")?"&":"?"}`+"api_key="+TMDB_API_Key,{
            Autorization:"bearer "+ TMDB_API_Key,
            params : params,
            accept: 'application/json()'
        })
        return data;
    } catch (err) {
        console.log("rahul"+err);
        return err;
    }
    
        return data;

    // const {data} = fetch(BASE_URL+url,{
    //     method: 'GET',
    //     headers:{
    //         accept: 'application/json()',
    //         Autorization:"bearer "+TMDB_TOKEN
    //     }
    // }).then(res => res.json())
    // .then(response => console.log(response))
    // .catch(err => console.log("ravi"));
}