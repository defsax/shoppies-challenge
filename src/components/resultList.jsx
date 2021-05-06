import Result from './result';

export default function ResultList(props) {
  const { resultList, onClick } = props;

  const movieList = function (array) {
    if (array) {
      return array.map((item, index) => {
        return <Result key={index} movie={item} onClick={onClick} />;
      });
    }
  };

  return (
    <div>
      <p>Results:</p>
      {movieList(resultList)}
    </div>
  );
}
