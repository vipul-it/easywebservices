import React from 'react'
import './CreateUser.css';

const CreateUser = () => {
  return (
    <div className='CreateUser'>
    <div className="container1">
    <header>Tuc Info</header>
    <hr/>

    <form>
        <div className="form first">
            <div className="details personal">

                <div className="fields">
                    <div className="input-field">
                        <label>User Name<span style={{color:"red"}}>*</span></label>
                        <input type="text" name="name" placeholder="Name" required />
                    </div>

                    <div className="input-field">
                        <label>Password<span style={{color:"red"}}>*</span></label>
                        <input type="text"  placeholder="Enter password" required />
                    </div>

                    <div className="input-field">
                        <label>First Name<span style={{color:"red"}}>*</span></label>
                        <input type="text"  placeholder="Enter First Name" required />
                    </div>

                    <div className="input-field">
                    <label>Last Name<span style={{color:"red"}}>*</span></label>
                    <input type="text"  placeholder="Enter Last Name" required />
                </div>

                <div className="input-field">
                    <label>Email<span style={{color:"red"}}>*</span></label>
                    <input type="email"  placeholder="Enter Email ID" required />
                </div>

                <div className="input-field">
                    <label>Mobile Number<span style={{color:"red"}}>*</span></label>
                    <input type="text" placeholder="0000000000" required/>
                </div>

                <div className="input-field">
                <label>Company Name<span style={{color:"red"}}>*</span></label>
                <input type="text"  placeholder="Enter Company Name" required />
            </div>

            <div className="input-field">
                <label>Web<span style={{color:"red"}}>*</span></label>
                <input type="text"  placeholder="Enter Web URL" required />
            </div>

            <div className="input-field">
                <label>Other Mobile Number<span style={{color:"red"}}>*</span></label>
                <input type="text" placeholder="0000000000" required/>
            </div>

            <div className="input-field">
                <label>Role Type<span style={{color:"red"}}>*</span></label>
                <input type="text" placeholder="" required/>
            </div>

                   
                </div>
            </div>
            <hr/>
          
         
            <div className="details ID">

             {/*<!-- -----------------Button------------------ -->*/}
                
                    <div className="btn">
                        <input type="submit" value="Create"/>
                    </div>
                   
                </div>
            </div> 
      
</form>
</div>
    </div>
  )
}

export default CreateUser;