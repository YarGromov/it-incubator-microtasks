import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./NewComponent";

function App() {
    let [students, setStudents] = useState([
        {id:1, name:'Anton', age: 121},
        {id:2, name:'Anton1', age: 122},
        {id:3, name:'Anton2', age: 123},
        {id:4, name:'Anton3', age: 124},
        {id:5, name:'Anton4', age: 125},
        {id:6, name:'Anton5', age: 126},
        {id:7, name:'Anton6', age: 127}
    ])

  return (
    <div className="App">
      <NewComponent students={students}/>
    </div>
  );
}

export default App;
