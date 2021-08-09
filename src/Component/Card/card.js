import React from 'react';
import '../Card/card.css'
const Card = ({movie}) => {
 
    return (
       <div className="card">
        <div className="card-box">
            <div className="card-image waves-effect waves-block waves-light">
          <img class="activator" alt='' src={movie.Poster}/>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{movie.Title}</span>
          <p>{movie.Year}</p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">Card Title</span>
          <p>Here is some more information about this product that is only revealed once clicked on.</p>
        </div>
      </div>
       </div>
    );
};

export default Card;