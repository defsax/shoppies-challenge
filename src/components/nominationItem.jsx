import '../style/css/nominations.css';

export default function NominationItem(props) {
  const { nomination } = props;
  return (
    <div className="nomination-item-container">
      <img src={nomination.Poster} alt={nomination.Title}></img>
      <div className="nomination-title-button">
        <p>
          {nomination.Title} ({nomination.Year})
        </p>
        <button onClick={() => props.onClick(nomination)}>Remove</button>
      </div>
    </div>
  );
}
