import React from 'react';
import Card from '../Card';
import './movie.css';

const Movies = ({movies = []}) => {
  
   

    return (
        <div className="movie">
            {movies.length ? 
            movies.map((el)=>{
                return  <Card key={el.imdbID} movie={el}/>  
            })
               
            : <div className="movie_image">
            <h1 className="title_title">Не найдено</h1>
        <img src='https://newyork.forumdaily.com/wp-content/uploads/2021/03/shutterstock_1200786709.jpg' alt=''/>
        </div>
            
            }
            
            
        </div>
    )
};

export default Movies;

