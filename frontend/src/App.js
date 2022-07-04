
import './App.css';
import React, { useEffect,useState } from 'react'
import axios from 'axios';

const App =() =>{

    const [data, setData ] = useState([]);
    const [users, setUsers] = useState([])
 
    useEffect(() => {
        getData();
    }, []);
 
    const getData = async () => {
        const response = await axios.get('http://localhost:8000/');
        setData(response.data);
    }
    
    useEffect(() => {
      getUsers()
    }, [])

    const getUsers = async () => {
      const response = await axios.get('http://localhost:8000/users')
      setUsers(response.data)
    }

    const myUsers = users.map(item => {
      return(
        <tbody key={item.id}>
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
          </tr>
        </tbody>
      )}

    )
  return (
    <div className="App">
        {data}

        <table>
        {myUsers}
      </table>
      {console.log(users)}
        <div>
  
</div>
    </div>
  );
}

export default App;
