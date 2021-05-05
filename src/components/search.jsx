import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useDebounce, useVisualMode } from '../utils';

const LOADING = 'LOADING';
const SEARCH = 'SEARCH';
const MESSAGE = 'MESSAGE';
const RESULTS = 'RESULTS';

export default function Search() {
  // let myStorage = window.localStorage;
  localStorage.setItem('myCat', 'Tom');
  localStorage.getItem('myCat');

  const [state, setState] = useState({
    searchText: '',
    movieList: null,
  });

  const { mode, transition, back } = useVisualMode(SEARCH);
  const debouncedText = useDebounce(state.searchText, 1000);

  useEffect(() => {
    console.log('debounced text:', debouncedText);

    // check length. if not, api will get called when page loads
    if (debouncedText.length > 0) {
      const KEY = process.env.REACT_APP_OMDB_API_KEY;
      axios
        .get(`http://www.omsdbapi.com/?apikey=${KEY}&s=${debouncedText}*`)
        .then((response) => {
          console.log(response.data);
          if (response.data.Response !== 'False ') {
            console.log(response.data.Search);
            const results = response.data.Search;
            setState({ movieList: results });
            transition(RESULTS, true);
          }
        })
        .catch(function (error) {
          console.error(error.response);
        });
    }
  }, [debouncedText]);

  const handleInput = function (input) {
    if (input.length >= 2) {
      console.log('non debounced text:', input);
      setState({ searchText: input });
      transition(LOADING);

      console.log(state);
    }
  };

  return (
    <div>
      {/* onSubmit={query()} */}
      <form>
        <input
          autoFocus
          type="text"
          onChange={(e) => handleInput(e.target.value)}
        ></input>
      </form>
      {/* <p>{state.movieList}</p> */}
    </div>
  );
}
