import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useDebounce } from '../utils';

export default function Search(props) {
  // let myStorage = window.localStorage;
  localStorage.setItem('myCat', 'Tom');
  localStorage.getItem('myCat');

  const [searchText, setSearchText] = useState('');

  const debouncedText = useDebounce(searchText, 1000);

  useEffect(() => {
    // check length. if not, api will get called when page loads
    if (debouncedText) {
      const KEY = process.env.REACT_APP_OMDB_API_KEY;
      axios
        .get(`http://www.omdbapi.com/?apikey=${KEY}&s=${debouncedText}*`)
        .then((response) => {
          console.log(response.data);
          if (response.data.Response !== 'False') {
            console.log(response.data.Search);
            const results = response.data.Search;
            props.setValues({
              movieList: results,
              transition: 'RESULTS',
              overwrite: true,
            });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [debouncedText]);

  const handleInput = function (input) {
    if (input.length) {
      console.log('non debounced text:', input);
      setSearchText(input);
      props.setValues({ transition: 'LOADING', overwrite: false });
    } else {
      setSearchText(input);
      props.setValues({ transition: 'DEFAULT', overwrite: true });
    }
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          autoFocus
          type="text"
          onChange={(e) => handleInput(e.target.value)}
        ></input>
      </form>
    </div>
  );
}
