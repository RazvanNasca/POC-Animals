import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './AddNewObject.css';

const AddNewObject = ({ addObject, isChecked }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newObject = { id: Date.now(), name, description };
    addObject(newObject);
    setName('');
    setDescription('');
  };

  return (
    <div>
      <Navbar isChecked={isChecked}/>
      <div className={isChecked ? 'proA' : 'nonA'}>
        <h3 id={isChecked ? 'addNewObjectTitle' : ''}>Add your new animal</h3>
        <form id={isChecked ? 'mainFormContainer' : ''} onSubmit={handleSubmit}>
          <div id={isChecked ? 'formInputContainer' : ''} className='formInputContainer'>
            <div id={isChecked ? 'nameInputContainer' : ''} className='fieldContainer'>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder={isChecked ? 'ex: lion' : ''}
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </div>
            <div id={isChecked ? 'descriptionInputCOntainer' : ''} className='fieldContainer'>
              <label htmlFor="description">Category</label>
              <input
                type="text"
                id="description"
                placeholder={isChecked ? 'ex: mammal' : ''}
                value={description}
                onChange={e => setDescription(e.target.value)}
                required
              />
            </div>
          </div>
          <div id={isChecked ? 'submmitButton' : ''} className='buttonContainer'>
            <button type="submit">Add Aminal</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewObject;
