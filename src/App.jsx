import { useState, useEffect } from 'react';
import Search from './components/search';
import ResultList from './components/resultList';
import Nomination from './components/nominationItem';
import NominationList from './components/nominationList';
import Loading from './components/loading';

import { useVisualMode } from './utils';

export default function App() {
  const LOADING = 'LOADING';
  const DEFAULT = 'DEFAULT';
  const RESULTS = 'RESULTS';

  const { mode, transition, back } = useVisualMode(DEFAULT);

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
    //find in array of objects
    if (
      state.nominations.find((movie) => {
        return movie.imdbID === id;
      })
    ) {
      return true;
    }
    return false;
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

  useEffect(() => {
    console.log(state.nominations);
  }, [state.nominations]);

  return (
    <div>
      <h1>The Shoppies</h1>
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
