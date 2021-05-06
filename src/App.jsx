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
    transition: '',
  });

  useEffect(() => {
    console.log(state.movieList);
    console.log(state.transition);
    transition(state.transition);
  }, [state.movieList, state.transition]);

  return (
    <div>
      <h1>The Shoppies</h1>
      <Search setValues={setState} />

      {mode === RESULTS && <ResultList resultList={state.movieList} />}
      {mode === LOADING && <Loading />}

      <Nomination />
      <NominationList />
    </div>
  );
}
