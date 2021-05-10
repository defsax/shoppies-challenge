import '../style/css/results.css';

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
        <div className="button-container">
          <button
            onClick={() => props.onClick(movie)}
            disabled={props.nominationsDone(movie.imdbID)}
          >
            NOMINATE
          </button>
        </div>
        {props.isNominated(movie.imdbID) && true && (
          <div className="nominated-badge">
            <svg height="200" width="200">
              <circle
                cx="100"
                cy="100"
                r="80"
                stroke="#e05263"
                strokeWidth="15"
                fill="transparent"
              />
            </svg>
            <h4>NOMINATED</h4>
          </div>
        )}
      </div>
      <p>
        {movie.Title} ({movie.Year})
      </p>
    </div>
  );
}
