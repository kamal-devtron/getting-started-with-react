import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Data() {
  const [data, setData] = useState('');
  useEffect(() => {

    const URL = process.env.REACT_APP_API ? process.env.REACT_APP_API : window._env_.REACT_APP_API
    axios.get(URL)
      .then(response => {

        console.log(response.data)
        let city = ""
        if (response.data?.cities.length > 0) {
          city = response.data.cities[0]
        }
        setData(city);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="Data">
      <h1>React and Node.js Integration {window._env_.REACT_APP_API} </h1>
      <p>Message from the server: {data}</p>
    </div>
  );
}

export default Data; 