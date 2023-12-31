import React from 'react'
import { useMoviecontext } from '../CONTEXT/Globalcontext'
import './watched.css'
import Moviecard from '../WATCHLIST/Moviecard'
const Watched = () => {
    const Moviecontext =useMoviecontext()
  return (
      <div className='watrchlistsection'>
   <div className='container'>
    <div className='main-heading'>
      <h1>my watched</h1>
      <span className='movies-count'>
      {Moviecontext.watched.length}
        {Moviecontext.watched.length=== 1? " movie" : "movies"}
      </span>
    </div>


{Moviecontext.watched.length > 0 ? (<div className='movie-grid'>

  {Moviecontext.watched.map((movie)=>(
    <Moviecard key={movie.imdbID} movie={movie} type='watched'/>
  ))}
</div>):<h2 className='nomovies'>no movies in watched , add some</h2>}

   </div>
    </div>
   
  )
}

export default Watched
