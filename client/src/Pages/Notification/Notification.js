import React from 'react'
import './notification.css';

const Notification = () => {
  return (
    <div className='not'>
        <div className='not1'>
          <button type="button">+Add Notification</button>
        </div>
        <div className='not2'>
        <table>
         <thead>
          <tr>
            <th>Subject</th>
            <th>Contant</th>
            <th>Applicable To</th>
            <th>Created At</th>
            <th>Action</th>
          </tr>
         </thead>

         <tbody>
           <tr>
           <td>1</td>
             <td>2</td>
             <td>3</td>
             <td>4</td>
             <td>5</td>
           </tr>
         </tbody>

       </table>
       </div>
    </div>
  )
}

export default Notification;