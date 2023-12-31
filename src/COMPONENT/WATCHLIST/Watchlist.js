import React from 'react'
import './watchlist.css'
import { useMoviecontext } from '../CONTEXT/Globalcontext'
import Moviecard from './Moviecard';
const Watchlist = () => {
  const Moviecontext=useMoviecontext();
  return (
    <div className='watrchlistsection'>
   <div className='container'>
    <div className='main-heading'>
      <h1>my watchlist</h1>
      <span className='movies-count'>
        {Moviecontext.watchlist.length}
        {Moviecontext.watchlist.length===1? "movie" : "movies"}
      </span>
    </div>


{Moviecontext.watchlist.length > 0 ? (<div className='movie-grid'>

  {Moviecontext.watchlist.map((movie)=>(
    <Moviecard key={movie.imdbID} movie={movie} type='watchlist'/>
  ))}
</div>):<h2 className='nomovies'>no movies in watchlist , add some</h2>}

   </div>
    </div>
  )
}

export default Watchlist
