
import './App.css';
import React, { useEffect,useState } from 'react'
import axios from 'axios';

const App =() =>{

  const userS=[{
    "id": "1",
    "name" : "Mark John",
    "email" :"markjohn@gmail.com",
    "age"  :"22"
  
  },
  {
    "id": "1",
    "name" : "Mark John",
    "email" :"markjohn@gmail.com",
    "age"  :"22" 
  }
  ];

  const [users,setUsers]=useState([]);


    const [data, setData ] = useState([]);
 
    useEffect(() => {
        getData();
    }, []);
 
    const getData = async () => {
        const response = await axios.get('http://localhost:8000/');
        setData(response.data);
    }

  
  return (
    <div className="App">
        {data}
        <div>
  
</div>
    </div>
  );
}

export default App;
