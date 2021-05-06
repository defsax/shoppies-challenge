import NominationItem from './nominationItem';

export default function NominationList(props) {
  const { nominations } = props;
  const listNominations = function (array) {
    if (array) {
      return array.map((item, index) => {
        return (
          <NominationItem
            key={index}
            nomination={item}
            onClick={props.onClick}
          />
        );
      });
    }
  };
  return (
    <div>
      <h2>Nominations:</h2>
      {listNominations(nominations)}
    </div>
  );
}
