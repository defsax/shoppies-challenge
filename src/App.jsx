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
    console.log(state);
    const nominations = [...state.nominations];
    console.log(nominations);
    // nominations.push(id);
    setState({ nominations: this.state.nominations.concat(id) });
    console.log(nominations);

    // const nominationsList = [state.nominations, id];
    // if (state.nominations > 1) {
    //   setState({ nominations: [...state.nominations, id] });
    // } else {
    //   setState({ nominations: [id] });
    // }
    console.log('nominatefilm function in app. id:', id);
    console.log('nominations:', state.nominations);
  };

  const updateResults = function (results) {
    console.log(results);
    setState({
      ...state,
      movieList: results,
      // transition: 'RESULTS',
      // overwrite: true,
    });

    transition('RESULTS', true);
  };

  const setView = function (view, overwrite) {
    transition(view, overwrite);
  };

  // useEffect(() => {
  //   console.log(state.movieList);
  //   console.log(state.transition);
  //   // transition(state.transition, state.overwrite);
  // }, [state.movieList, state.transition]);

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
