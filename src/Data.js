import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Data() {
  const [data, setData] = useState('');
  useEffect(() => {
    axios.get(process.env.REACT_APP_API?? window._env_.REACT_APP_API)
      .then(response => {

        console.log(response.data)
        setData(response.data.cities[0]);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="Data">
      <h1>React and Node.js Integration </h1>
      <p>Message from the server: {data}</p>
    </div>
  );
}

export default Data; 