import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import './View-Employee.css'

function ViewEmployee() {
  return (

<div>
     <div className="container">
    <Card shadow="md"   withBorder>
      <Card.Section>
       <button className="btn2"   ><i className="fa fa-info-circle"><b> Basic Info</b></i></button>
      <button className="btn2 " ><i className="fa fa-file-text"><b> Documents</b></i></button>
      <button className="btn2"><i className='fa fa-building'><b> Location/Address</b></i></button>
      <button className="btn2 " ><i className=' fa fa-credit-card'><b> Bank Accounts</b></i></button>
      </Card.Section>
      </Card></div><br></br>
      <br>
      </br>
      <div className="container my-8">
      <Card shadow="md"     withBorder>
      <Card.Section><br></br>
       <h6 className="card1">Basic Member Details</h6><br></br>
       <form>
      <div className="row ">
        <div className="col-md-6 col-sm-3 card2">
          <div className="form-group">
            <label htmlFor="field1"  className='label-space'><h6>FirstName</h6></label>
            <input type="text" className="form-control form-fields" id="field1" name="fname" />
          </div>
        </div>
        <div className="col-md-6 col-sm-3 card2">
          <div className="form-group">
            <label htmlFor="field2"  className='label-space'><h6>LastName</h6></label>
            <input type="text" className="form-control form-fields" id="field2" name="lname" />
          </div>
        </div>
      </div>
      <br></br>
      <div className="row ">
        <div className="col-md-6 col-sm-3 card2">
          <div className="form-group">
            <label htmlFor="field3"  className='label-space'><h6>Email</h6></label>
            <input type="text" className="form-control form-fields" id="field1" name="field1" />
          </div>
        </div>
        <div className="col-md-6 col-sm-3 card2">
          <div className="form-group">
            <label htmlFor="field4" className='label-space'><h6>Mobile Number</h6></label>
            <input type="text" className="form-control form-fields" id="field2" name="field2" />
          </div>
        </div>
      </div><br></br><br></br>
    
        <div className="container my-4 submit-outside ">
          
           <button type="submit" className='btn3 btn-primary btn-sm  '>Save Changes</button>
        
        </div>
     
      <br></br>
      
      
    </form>
       <br></br>
       




      </Card.Section>
      </Card></div>
      
    

      

     
      



    
    </div>
     
  );
}
export default ViewEmployee