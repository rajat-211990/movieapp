import React,{useState,useEffect} from 'react';

import './App.css';
import Movie from './components/Movie';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d68af47e610a0f59223f0aa7e9872043";
const IMG_API = "https://image/tmdb.org/t/p/w1280"
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=d68af47e610a0f59223f0aa7e9872043&query=";




function App() {
  const [movies,setMovies] = useState([]);
  const [searchTerm,setSearchTerm] = useState([]);
  useEffect(()=>{
       fetch(FEATURED_API).then((res) =>res.json()).then((data)=>{
          console.log(data);
          setMovies(data.results);
       })



    },[])

    const handleOnChange = (e)=>{
     setSearchTerm(e.target.value)

    }

   const handleOnSubmit = (e) => {
       e.preventDefault();

       if(searchTerm){
       fetch(SEARCH_API + searchTerm).then((res)=>res.json()).then((data)=>{
         setMovies(data.results);
       })
       setSearchTerm("");
      }

   }
  return <>
  <header>
    <form onSubmit={handleOnSubmit}>
      <input className = "search" 
      type="text" 
      placeholder="Search"
      value = {searchTerm}
       onChange = {handleOnChange}/>
      </form>
    </header>
  
  
  <div className= "movie-container">
    
   {movies.length>0 && movies.map(movie =>(
     <Movie key={movie.id}  {...movie}/>
   ))}
   
   
   
   </div>
   </>
}

export default App;
