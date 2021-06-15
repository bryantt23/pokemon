import { useState } from 'react';

function Form() {
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('pikachux');
  console.log('🚀 ~ file: App.js ~ line 8 ~ App ~ query', query);

  const handleSubmit = async e => {
    e.preventDefault();
    console.log('🚀 ~ file: App.js ~ line 8 ~ App ~ query', query);

    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${query}`;

      const res = await fetch(url);
      console.log('🚀 ~ file: App.js ~ line 18 ~ App ~ res', res);
      if (!res.ok) {
        setError('Not found');
      } else {
        const data = await res.json();
        console.log('🚀 ~ file: App.js ~ line 20 ~ App ~ data', data);
      }
    } catch (error) {
      //   console.log('🚀 ~ file: App.js ~ line 22 ~ App ~ error', error);
      setError(error);
    }
  };

  if (error) {
    // console.log('🚀 ~ file: Form.js ~ line 26 ~ Form ~ error', error);

    throw new Error('I crashed! ' + error);
    // throw new Error('I crashed!');
  }
  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <input value={query} onChange={e => setQuery(e.target.value)}></input>

        <input type='submit' value='Search' />
      </form>
    </div>
  );
}

export default Form;
