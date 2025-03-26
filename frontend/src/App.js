 // App.js
 import React, { useState, useEffect } from 'react';
 

 function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 

  useEffect(() => {
  const fetchData = async () => {
  try {
  const response = await fetch('http://localhost:3001/'); 
  if (!response.ok) {
  throw new Error(`HTTP error! status: ${response.status}`);
  }
  const json = await response.json();
  setData(json);
  } catch (e) {
  setError(e);
  } finally {
  setLoading(false);
  }
  };
 

  fetchData();
  }, []);
 

  if (loading) {
  return <div>Loading...</div>;
  }
 

  if (error) {
  return <div>Error: {error.message}</div>;
  }
 
  return (
    <div>
    <h1>Data from API</h1>
    <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
