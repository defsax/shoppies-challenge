import { useState, useEffect } from 'react';
import Search from './components/search';
import ResultList from './components/resultList';
import Nomination from './components/nomination';
import NominationList from './components/nominationList';
import Loading from './components/loading';

import { useVisualMode } from './utils';

export default function App() {
  const LOADING = 'LOADING';
  const DEFAULT = 'DEFAULT';
  const RESULTS = 'RESULTS';

  const { mode, transition, back } = useVisualMode(DEFAULT);

  // const [movieList, setMovieList] = useState([]);

  const [state, setState] = useState({
    movieList: [],
    nominations: [],
    // transition: 'DEFAULT',
    // overwrite: false,
  });

  const nominateFilm = function (id) {
    setState({ ...state, nominations: state.nominations.concat(id) });
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
        <ResultList resultList={state.movieList} onClick={nominateFilm} />
      )}
      {mode === LOADING && <Loading />}
      {mode === DEFAULT && <p>Default</p>}

      <Nomination />
      <NominationList />
    </div>
  );
}
