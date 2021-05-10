import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useDebounce } from '../utils';

import '../style/css/search.css';

export default function Search(props) {
  const { setValues, setView } = props;
  const [searchText, setSearchText] = useState('');
  const debouncedText = useDebounce(searchText, 1000);

  useEffect(() => {
    // check whether there is text. if not, api will get called when page loads
    if (debouncedText) {
      const KEY = process.env.REACT_APP_OMDB_API_KEY;

      axios
        .get(
          `https://www.omdbapi.com/?apikey=${KEY}&s=${debouncedText}*&type=movie`
        )
        .then((response) => {
          if (response.data.Response !== 'False') {
            const results = response.data.Search;
            setValues(results);
            setView('RESULTS', true);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [debouncedText, setValues]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleInput = function (input) {
    if (input.length) {
      setSearchText(input);
      props.setView('LOADING', false);
    } else {
      setSearchText(input);
      props.setView('DEFAULT', true);
    }
  };

  return (
    <div className="search-container">
      {props.displayBanner()}
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          autoFocus
          placeholder="SEARCH"
          type="text"
          onChange={(e) => handleInput(e.target.value)}
        ></input>
      </form>
    </div>
  );
}
