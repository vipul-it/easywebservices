import React from 'react'
import './groups.css';
import Phonebook from '../Phonebook';

const Groups = () => {
  return (
    <div className='group'>
      <Phonebook />
       <div className='group1'>
         <button type="button">+Add Group</button>
         </div>
         <div className='group2'>
           <h4>No Group Data Available</h4>
         </div>
    </div>
  )
}

export default Groups;