import React from 'react'
import './filmcard.css'
import { useMoviecontext } from '../CONTEXT/Globalcontext'
import * as actions from '../CONTEXT/Actiontypes'
const Filmcard = ({ movie }) => {
 const Moviecontext= useMoviecontext();
 const storemovie =Moviecontext.watchlist.find((o)=> o.imdbID ===movie.imdbID);
 const storemoviewatched =Moviecontext.watched.find((o)=> o.imdbID ===movie.imdbID);
 const watchlistdisapled =storemovie?true: storemoviewatched?true: false;
 const watcheddisapled =storemovie?true: storemoviewatched?true: false;
 return (
    <div className='result-card'>
      <div className='poster-wrraper'>
        {movie.Poster ? <img src={movie.Poster} alt={movie.Title} /> :
          (<div className='filter-poster'></div>)
        }
      </div>
      <div className='info'>
        <div className='heading'>
          <h3 className='title'>{movie.Title}</h3>
          {movie.Year ? <h4 className='release-date'>{movie.Year}</h4>
            : "-"}
        </div>
        <div className='controls'>
          <button onClick={()=>Moviecontext.Moviesdispatch(
            {type:actions.ADD_MOVIE_TO_Watchlist, payload:movie}
          )} disabled={watchlistdisapled}  className='btn'> add to watchlist</button>
          <button onClick={()=>Moviecontext.Moviesdispatch(
            {type:actions.ADD_MOVIE_TO_WATHCED, payload:movie}
          )} disabled ={watcheddisapled} className='btn '> add to watched</button>
        </div>
      </div>

    </div>
  )
}

export default Filmcard
