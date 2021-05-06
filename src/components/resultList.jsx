import Result from './result';

export default function ResultList(props) {
  const { resultList, onClick } = props;

  const movieList = function (array) {
    // console.log(resultList);
    console.log(array);
    if (array) {
      return array.map((item, index) => {
        return (
          <Result key={index} movie={item} onClick={onClick} />
          // <ResultItem
          //   key={index}
          //   flight={resultItem}
          //   numberOfResults={array.length}
          //   setFlightList={() => setFlightList([resultItem])}
          //   currentUser={currentUser}
          //   setCurrentUser={setCurrentUser}
          // />
        );
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
