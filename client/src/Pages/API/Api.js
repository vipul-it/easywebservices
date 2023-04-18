import React from 'react'
import './api.css';

const Api = () => {
  return (
    <div className='api'>
      <div className='api1'>
         <button type='button'>+Generate API</button>
      </div>
      <div className='api2'>
      <table>
       <thead>
        <tr>
          <th>Key</th>
          <th>Account Type</th>
          <th>Password</th>
          <th>Description</th>
          <th>URL</th>
          <th>DLR TPS</th>
          <th>Match Template</th>
          <th>Status</th>
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
           <td>6</td>
           <td>7</td>
           <td>8</td>
           <td>9</td>
         </tr>
       </tbody>

     </table>
     </div>
    </div>
  )
}

export default Api;