import React, { useState } from 'react';
import axios from 'axios';

export default function Search() {
  // let myStorage = window.localStorage;

  const [searchTerm, setSearchTerm] = useState('');

  localStorage.setItem('myCat', 'Tom');
  localStorage.getItem('myCat');

  const query = function () {
    const KEY = process.env.REACT_APP_OMDB_API_KEY;
    let result = axios.get(
      `http://www.omdbapi.com/?apikey=${KEY}&s=${searchTerm}*`
    );
    console.log(result);
  };

  return (
    <div>
      <form onSubmit={query()}>
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
      </form>
      <p>search</p>
    </div>
  );
}
