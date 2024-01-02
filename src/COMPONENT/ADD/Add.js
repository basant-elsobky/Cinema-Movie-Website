import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Filmcard from './Filmcard';
import './add.css'
const Add = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchValue.trim() === '') {
      setMovies([]);
      return;
    }

    axios
      .get(`https://www.omdbapi.com/?s=${searchValue}&apikey=148f7e34`)
      .then((response) => {
        if (response.data.Search) {
          setMovies(response.data.Search);
          setError(null); 
        } else {
          setMovies([]);
          setError('No results found.');
        }
      })
      .catch((error) => {
        setMovies([]);
        setError('Error fetching data.');
        console.error(error);
      });
  }, [searchValue]);

  return (
<div className='add-page'>
    <div className='container '>
      <div className=' d-flex align-items-center justify-content-center'>
        <div className='add-content'>
          <div className='input-container'
                     
>
            <input 
              type='text'
              placeholder='Search for a movie'
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              style={{ width: '400px', marginTop: '50%' }}
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {movies.length > 0 && (
            <ul className='results'>
              {movies.map((movie) => (
                <li key={movie.imdbID}>
               {<Filmcard movie={movie}/>}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div></div>
  );
};

export default Add;
