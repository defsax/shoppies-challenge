export default function NominationItem(props) {
  const { nomination } = props;
  console.log(props);
  return (
    <div>
      <p>
        {nomination.Title} ({nomination.Year})
      </p>
      <img src={nomination.Poster} alt={nomination.Title}></img>
      <button
        onClick={() => props.onClick(nomination)}
        // disabled={props.isNominated(nomination.imdbID)}
      >
        Un-Nominate
      </button>
      <br />
      <br />
    </div>
  );
}
