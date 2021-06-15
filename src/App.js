import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

function App() {
  const [query, setQuery] = useState('pikachu');
  console.log('🚀 ~ file: App.js ~ line 8 ~ App ~ query', query);

  const handleSubmit = async e => {
    e.preventDefault();
    console.log('🚀 ~ file: App.js ~ line 8 ~ App ~ query', query);

    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${query}`;

      const res = await fetch(url);
      console.log('🚀 ~ file: App.js ~ line 18 ~ App ~ res', res);
      const data = await res.json();
      console.log('🚀 ~ file: App.js ~ line 20 ~ App ~ data', data);
    } catch (error) {
      console.log('🚀 ~ file: App.js ~ line 22 ~ App ~ error', error);
    }
  };

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <input value={query} onChange={e => setQuery(e.target.value)}></input>

        <input type='submit' value='Search' />
      </form>
    </div>
  );
}

export default App;
