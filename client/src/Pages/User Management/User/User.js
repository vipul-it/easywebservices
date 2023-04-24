import React, { useEffect, useState } from 'react'
import './user.css';
import { NavLink } from "react-router-dom"
import axios from 'axios';

const User = () => {
  const [apiData, setApiData] = useState([])

  function getData(){
      axios.get('http://localhost:8080/user/').then((response) => {
          setApiData(response.data);
      });
  }

  function handleDelete(id){
    axios.delete(`http://localhost:8080/user/${id}`).then(() => {
      getData();
    });
  }

  function setDataToStorage(id, username, fname, lname, email, mobile, companyName, roleType){
    localStorage.setItem('id', id);
    localStorage.setItem('username', username);
    localStorage.setItem('fname', fname);
    localStorage.setItem('lname', lname);
    localStorage.setItem('email', email);
    localStorage.setItem('mobile', mobile);
    localStorage.setItem('companyName', companyName);
    localStorage.setItem('roleType', roleType);
    
  }

  useEffect(() => {
      getData();
  }, [])

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
  <div style={{overFlowX:"auto",width:"60%"}} className='user2'>
        <table>
         <thead>
          <tr>
            <th>Id</th>
            <th>User Name</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th style={{width:"10%"}}>Email</th>
            <th>Mobile No.</th>
            <th>Companey Name</th>
            <th>Role Type</th>
            <th>Action</th>
          </tr>
         </thead>

         <tbody>
         {
                  apiData.map((item) => {
                    return (
                        <>
                          <tr key={item._id}> 
                            <td>{item._id}</td>
                            <td>{item.e_username}</td>
                            <td>{item.e_fname}</td>
                            <td>{item.e_lname}</td>
                            <td style={{width:"10%"}}>{item.e_email}</td>
                            <td>{item.e_mobile}</td>
                            <td>{item.e_companyName}</td>
                            <td>{item.e_roleType}</td>
                           
                            <td className='btin'>
                                <NavLink to="/EditUser2"><button className='btn btn-primary' onClick={() => setDataToStorage(item._id, item.e_username, item.e_fname, item.e_lname, item.e_email, item.e_mobile, item.e_companyName, item.e_roleType)}><i class="fa-sharp fa-solid fa-pen-to-square"></i></button></NavLink>
                               <button className='btn btn-danger' onClick={() => { if(window.confirm('Are You Sure To Delete Data??')) {handleDelete(item._id)}}}><i className="fa fa-fw fa-trash"></i></button>
                            </td>
                          </tr>
                        </>
                    )
                  })
               }
         </tbody>

       </table>
       </div>
    
   </div>
  )
}

export default User;