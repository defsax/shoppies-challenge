import NominationItem from './nominationItem';
import '../style/css/nominations.css';

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
    <div className="nomination-list-container">
      {listNominations(nominations)}
    </div>
  );
}
