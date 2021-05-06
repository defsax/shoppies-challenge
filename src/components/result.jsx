export default function Result(props) {
  return (
    <div
      style={{
        border: '1px solid black',
        padding: '0rem 1rem',
        margin: '1rem',
      }}
    >
      <p>
        {props.movie.Title} ({props.movie.Year})
      </p>
      <img src={props.movie.Poster} alt={props.movie.Title}></img>
      <button onClick={() => props.onClick(props.movie.imdbID)}>
        Nominate
      </button>
      <br />
      <br />
    </div>
  );
}
