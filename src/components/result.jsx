import '../style/css/results.css';

import ribbon from './ribbon.png';

export default function Result(props) {
  const { movie } = props;

  const setPoster = function () {
    if (movie.Poster === 'N/A') {
      return (
        <img
          src={
            'https://www.creativefabrica.com/wp-content/uploads/2020/06/23/1592896444/Film-reel-black-580x386.jpg'
          }
          alt={movie.Title}
        ></img>
      );
    }

    return <img src={movie.Poster} alt={movie.Title}></img>;
  };

  return (
    <div className="movie-container">
      <div className="poster">
        {setPoster()}
        <button
          onClick={() => props.onClick(movie)}
          disabled={props.isNominated(movie.imdbID)}
        >
          Nominate
        </button>
        <img alt={'ribbon'} src={ribbon} className="ribbon"></img>
      </div>
      <p>
        {movie.Title} ({movie.Year})
      </p>
    </div>
  );
}
