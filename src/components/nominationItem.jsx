export default function NominationItem(props) {
  const { nomination } = props;
  return (
    <div>
      <p>
        {nomination.Title} ({nomination.Year})
      </p>
      <img src={nomination.Poster} alt={nomination.Title}></img>
      <button onClick={() => props.onClick(nomination)}>Un-Nominate</button>
      <br />
      <br />
    </div>
  );
}
