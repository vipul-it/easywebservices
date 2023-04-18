import React, { useState } from 'react'
import axios from 'axios'
import { Modal,ModalBody,ModalHeader, Row,Col } from "reactstrap";
import './Entity.css';
import Dlt from './Dlt'

const Entity = () => {

 // pop-up code
 const [modal, setModal] = useState(false)
 //update/create data
 const [campaignName, setCampaignName] = useState('')
 const [description, setDescription] = useState('')


 const handleSubmit = (e) => {
  e.preventDefault();
  axios.post('https://6426b0e4d24d7e0de475b840.mockapi.io/crud',{
      e_campaignName:campaignName,
      e_description: description,
     
  });
  }
  return (
    <div className='entity'>
    <Dlt />
      <div className='entity1'>

      <Modal 
     size='md'
     isOpen={modal}
     >
       <ModalHeader
       toggle={() => setModal(!modal)} 
       >
       Add Entity ID
       <p style={{color:"#aaa",fontSize:"14px"}}>Add new Entity ID by filling the details below</p>
       </ModalHeader>
         <ModalBody>
           <form onSubmit={handleSubmit}>
             <Row>
               <Col lg={12}>
                 <div>
                   <label htmlFor='Entity ID'>
                   Entity ID<span style={{color:"red"}}>*</span>
                   </label>
                   <input className="form-control" onChange = {(e) => setCampaignName(e.target.value)} type="text" placeholder='Enter Entity ID' />
                 </div>
               </Col>
              
               <Col lg={12}>
                 <div>
                   <label htmlFor='Entity Name'>
                   Entity Name<span style={{color:"red"}}>*</span>
                   </label>
                   <input className='form-control' onChange = {(e) => setDescription(e.target.value)} type="text" placeholder='Enter Entity Name' />
                 </div>
               </Col>

             </Row>
           </form>

           <button className='btn mt-3' type='submit' style={{ backgroundColor: "rgb(157, 25, 25)", color: "white",float:"right" }} >
           Update
       </button>
         </ModalBody>
    </Modal>


      <div className='entity1_1'>
      <button type="button" onClick={() =>setModal(true)}>+Add Entity ID</button>
    </div>
    <div className='not2'>
    <table>
     <thead>
      <tr>
        <th>Entity ID</th>
        <th>Entity Name</th>
        <th>Action</th>
      </tr>
     </thead>

     <tbody>
       <tr>
         <td>1</td>
         <td>2</td>
         <td>3</td>
       </tr>
     </tbody>

   </table>
   </div>
      </div>
    </div>
  )
}

export default Entity;