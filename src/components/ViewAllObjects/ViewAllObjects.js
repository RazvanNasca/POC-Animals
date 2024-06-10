import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './ViewAllObjects.css';

const ViewAllObjects = ({ objects, deleteObject, isChecked }) => {

  const [search, setSearch] = useState('');

  const filteredObjects = objects.filter(object =>
    object.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Navbar isChecked={isChecked}/>
      <div id={isChecked ? 'viewAllObjectsPage' : ''} className={isChecked ? 'proV' : 'nonV'}>
        <h3>Search your favorite animal</h3>
        <div id='searchInput' className='textInput'>
          <input
            type="text"
            placeholder={isChecked ? "Search animal by name" : 'Search animal'}
            value={search}
            onChange={e => setSearch(e.target.value)}
            aria-label="Search objects"
          />
        </div>
        <div id='cardContainer' className='listOfCards'>
          {filteredObjects.map(object => (
            <div key={object.id} id={object.name} className="card">
              <h3>{object.name}</h3>
              <p>{object.description}</p>
              <button id={isChecked ? 'deleteButton' : ''} onClick={() => deleteObject(object.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewAllObjects;
