import React from 'react';
import { useState, useEffect } from 'react'
import Movies from './components/Movies';
import SearchBar from './components/SearchBar';
import movieData from './utils/movies';


function App() {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [maxLength, setMaxLength] = useState('');
  const [click,setClick] = useState(0);
  
  useEffect(() => {  
    
    const filteredMovies =  movieData.filter(movie => {
      return (movie.title.toUpperCase().includes(search.toUpperCase())) &&
         ([NaN,0].includes(parseInt(maxLength,10)) || parseInt(maxLength,10) >= movie.length )
     })
     click%2==0 ? filteredMovies.sort((a,b)=>b.length-a.length) : filteredMovies.sort((a,b)=>a.length-b.length)
     
    setMovies(filteredMovies);


  }, [search, maxLength , click]);
 // adding sort button functionality
  

  return (
    <>
    
      {/* Header Bar for Searching */}
      <SearchBar 
        search={search} 
        setSearch={setSearch} 
        maxLength={maxLength} 
        setMaxLength={setMaxLength}
        click={click}
        setClick={setClick}
      />
      {/* Output the Movies */}
      <Movies movies={movies} />
    </>
  )
}

export default App
