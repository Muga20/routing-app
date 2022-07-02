
import './App.css';
import React, { useEffect,useState,axios } from 'react'

const App =() =>{
 
    const [data, setData ] = useState([]);
 
    useEffect(() => {
        getData();
    }, []);
 
    const getData = async () => {
        const response = await axios.get('http://localhost:8000');
        setData(response.data);
    }

  
  return (
    <div className="App">
     {data.map((myData) => {
      <h1>{myData.res}</h1>
     })}

    </div>
  );
}

export default App;
