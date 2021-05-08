import { useState, useEffect } from 'react';
import Search from './components/search';
import ResultList from './components/resultList';
import NominationList from './components/nominationList';
import Loading from './components/loading';

import { useVisualMode } from './utils';

import './style/css/app.css';
import './style/css/default.css';
import './style/css/nav.css';

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
    // const noms = localStorage.getItem('shoppies-nominations');
    // setState({ ...state, nominations: noms });
    console.log(state.nominations);
    // localStorage.setItem('shoppies-nominations', [state.nominations]);
  }, [state.nominations, state.movieList]);

  return (
    <div className="app-container">
      <nav className="nav">
        <div className="nav-content">
          <h1>S h o p p i e s</h1>
          {showBanner()}

          <div className="dropdown">
            <h1>N o m i n a t i o n s ▼</h1>
            <div className="dropdown-content">
              <NominationList
                nominations={state.nominations}
                onClick={removeNomination}
              />
            </div>
          </div>
        </div>
      </nav>
      <Search setValues={updateResults} setView={setView} />
      <div className="content-container">
        {mode === RESULTS && (
          <ResultList
            resultList={state.movieList}
            onClick={nominateFilm}
            isNominated={isNominated}
          />
        )}
        {mode === LOADING && <Loading />}

        {mode === DEFAULT && (
          <div className="default-container">
            <h1>Search For a Movie to Nominate!</h1>
            {/* <img
              src={
                'https://cdn.shopify.com/shopifycloud/brochure/assets/home/hero-stock-small-72c1242fc5bbf6cfe135968110e9c52435af1e389c0fd4fe68208d21427e21e0.jpg'
              }
              alt={'default img'}
            ></img> */}
          </div>
        )}
      </div>
    </div>
  );
}
