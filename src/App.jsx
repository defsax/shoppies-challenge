import { useState, useEffect } from 'react';
import Search from './components/search';
import ResultList from './components/resultList';
import NominationList from './components/nominationList';
import Loading from './components/loading';

import { useVisualMode } from './utils';

export default function App() {
  const LOADING = 'LOADING';
  const DEFAULT = 'DEFAULT';
  const RESULTS = 'RESULTS';

  const { mode, transition } = useVisualMode(DEFAULT);

  const [state, setState] = useState({
    movieList: [],
    nominations: [],
  });

  const nominateFilm = function (movie) {
    setState({ ...state, nominations: state.nominations.concat(movie) });
  };
  const removeNomination = function (movie) {
    setState({
      ...state,
      nominations: state.nominations.filter(function (item) {
        return item.imdbID !== movie.imdbID;
      }),
    });
  };
  const isNominated = function (id) {
    //check if nominations are done first
    if (state.nominations.length >= 5) {
      return true;
    }

    //find in array of objects
    return state.nominations.find((movie) => {
      return movie.imdbID === id;
    });
  };

  const updateResults = function (results) {
    setState({
      ...state,
      movieList: results,
    });
  };

  const setView = function (view, overwrite) {
    transition(view, overwrite);
  };

  const showBanner = function () {
    if (state.nominations.length >= 5) {
      return <h2>Nominations Done!</h2>;
    }
  };

  useEffect(() => {
    console.log(state.nominations);
  }, [state.nominations]);

  return (
    <div>
      <h1>The Shoppies</h1>
      {showBanner()}
      <Search setValues={updateResults} setView={setView} />

      {mode === RESULTS && (
        <ResultList
          resultList={state.movieList}
          onClick={nominateFilm}
          isNominated={isNominated}
        />
      )}
      {mode === LOADING && <Loading />}
      {mode === DEFAULT && <p>Default</p>}

      <NominationList
        nominations={state.nominations}
        onClick={removeNomination}
      />
    </div>
  );
}
