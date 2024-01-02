import React, { useContext } from 'react'
import './moviecontrols.css'
import * as action from '../CONTEXT/Actiontypes'
import { GlobalContext } from '../CONTEXT/Globalcontext'
import { useMoviecontext } from '../CONTEXT/Globalcontext'
export const MovieControls = ({ movie, type }) => {
    const {Moviesdispatch} = useContext(GlobalContext)
    const moviecontext =useMoviecontext()
    return (
      <div className='inner-card-controls d-none d-md-block'>
        {type === 'watchlist' &&
          <>
            <button
              className="ctrl-btn"
              onClick={() =>moviecontext.Moviesdispatch({ type: action.ADD_MOVIE_TO_WATHCED, payload: movie })}
  
            >
              <i className="fa-solid fa-eye"></i>
            </button>
            <button
              className="ctrl-btn"
              onClick={() => moviecontext.Moviesdispatch({ type: action.REMOVE_MOVIE_FROM_WATCHLIST, payload: movie.imdbID})}
            >
              <i className='fa-fw fa fa-times' />
            </button>
          </>
        }
        {
          type === 'watched' &&
          <>
            <button
              className='ctrl-btn'
              onClick={()=>Moviesdispatch({ type: 'MOVE_TO_WATCHLIST', payload: movie })}
            >
              <i className="fa-solid fa-eye-slash"></i>
            </button>
            <button
              className='ctrl-btn'
              onClick={()=>Moviesdispatch({ type: 'REMOVE_FROM_WATCHED', payload: movie.imdbID })}
            >
              <i className='fa-fw fa fa-times' />
            </button>
          </>
        }
      </div>
    )
  }

export default MovieControls
