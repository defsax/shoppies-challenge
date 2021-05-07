import Result from './result';

export default function ResultList(props) {
  const { resultList, onClick, isNominated } = props;

  const listMovies = function (array) {
    if (array) {
      return array.map((item, index) => {
        return (
          <Result
            key={index}
            movie={item}
            onClick={onClick}
            isNominated={isNominated}
          />
        );
      });
    }
  };

  return <div className="result-list-container">{listMovies(resultList)}</div>;
}
