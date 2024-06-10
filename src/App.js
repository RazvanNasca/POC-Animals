// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import ViewAllObjects from './components/ViewAllObjects/ViewAllObjects';
import AddNewObject from './components/AddNewObject/AddNewObject';

const App = () => {
  const [objects, setObjects] = useState([
    { id: 1, name: 'Tiger', description: 'Mammal' },
    { id: 2, name: 'Snake', description: 'Reptile' },
    { id: 3, name: 'Shark', description: 'Fish' },
    { id: 4, name: 'Spider', description: 'Arachnids' },
  ]);

  const [message, setMessage] = useState('');

  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const addObject = (newObject) => {
    const updatedObjects = [...objects, newObject];
    setObjects(updatedObjects);
    setMessage('Object added successfully!');
    setTimeout(() => setMessage(''), 3000);
  };

  const deleteObject = (id) => {
    const updatedObjects = objects.filter(object => object.id !== id);
    setObjects(updatedObjects);
    setMessage('Object deleted successfully!');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home isChecked={isChecked}/>} />
          <Route path="/view-all" element={<ViewAllObjects objects={objects} deleteObject={deleteObject} isChecked={isChecked}/>} />
          <Route path="/add-new" element={<AddNewObject addObject={addObject} isChecked={isChecked}/>} />
        </Routes>
        {message && <div id='messageContainer' className="message">{message}</div>}
        <label class="switch">
          <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
          <span class="slider round"></span>
        </label>
      </div>
    </Router>
  );
};

export default App;
