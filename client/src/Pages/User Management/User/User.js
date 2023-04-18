import React from 'react'
import './user.css';
import { NavLink } from "react-router-dom"

const User = () => {
  return (
    <div className='user'>
    <nav className='user1'>
    <ul>
      <li><NavLink to="/Tuc">TUC</NavLink></li>
      <li><NavLink to="/User">User</NavLink></li>
    </ul>
  </nav>

  <div className='user_nav'>
    <input type={Text} placeholder="search by user name"></input>
    <button className='but1' type='button'>Search</button>
    <button className='but2' type='button'>Reset</button>
    <button className='but3' type='button'>Download<span><i className="fa fa-fw fa-download"></i></span></button>
    <button className='but4' type='button'><NavLink to="/CreateUser">+Add User</NavLink></button>
  </div>

  {/* Table form */}
  <div className='user2'>
        <table style={{overflow:"auto"}}>
         <thead>
          <tr>
            <th>User Name</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Mobile No.</th>
            <th>Companey Name</th>
            <th>Role Type</th>
            <th>Action</th>
          </tr>
         </thead>

         <tbody>
           <tr>
           <td>Easy(3436)</td>
             <td>karan</td>
             <td>Singh</td>
             <td>karan@gmail.com</td>
             <td>5046576878</td>
             <td>Easy Web</td>
             <td>Easy(Admin123)</td>
             <td>Success</td>
           </tr>
         </tbody>

       </table>
       </div>
    
   </div>
  )
}

export default User;