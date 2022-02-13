import axios from 'axios';
import { useState, useEffect } from 'react';
import { MAKEUP_URL, BASE_URL } from './utils/api';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL + MAKEUP_URL)
      .then((response) => setData(response.data.data));
  }, []);

  return (
    <>
      <h1>Hello World</h1>
      <ul>
        {data.length > 0
          ? data.map((makeupbrand, idx) => {
              return <li key={idx}>{makeupbrand.attributes.name}</li>;
            })
          : null}
      </ul>
    </>
  );
};

export default App;