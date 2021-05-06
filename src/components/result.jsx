export default function Result(props) {
  const { movie } = props;
  return (
    <div
      style={{
        border: '1px solid black',
        padding: '0rem 1rem',
        margin: '1rem',
      }}
    >
      <p>
        {movie.Title} ({movie.Year})
      </p>
      <img src={movie.Poster} alt={movie.Title}></img>
      <button
        onClick={() => props.onClick(movie.imdbID)}
        disabled={props.isNominated(movie.imdbID)}
      >
        Nominate
      </button>
      <br />
      <br />
    </div>
  );
}
