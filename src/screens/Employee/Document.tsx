import { Card, Image, Text, Badge, Button,Table, Group } from '@mantine/core';
import './Document.css'

function Document() {
  return (
   
<div>
     <div className="container my-6">
    <Card shadow="md"   withBorder>
      <Card.Section>
       <button className="btn2"   ><i className="fa fa-info-circle"><b> Basic Info</b></i></button>
      <button className="btn2 " ><i className="fa fa-file-text"><b> Documents</b></i></button>
      <button className="btn2"><i className='fa fa-building'><b> Location/Address</b></i></button>
      <button className="btn2 " ><i className=' fa fa-credit-card'><b> Bank Accounts</b></i></button>
      </Card.Section>
      </Card></div>
      <br>
      </br>
      <div className="container my-8">
      <div className='card'>
    <div className='card-body'>
    <button className="btn3 " ><i className=' fa fa-upload'>  UploadDocuments</i></button>
        <br></br><br></br>
        <Table striped withBorder withColumnBorders>
      <thead>
        <tr>
          <th>#</th>
          <th>Login</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Mobile</th>
          <th>Organization</th>
          <th>Roles</th>
          <th colSpan={3} style={{ textAlign: 'center' }}>
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        
        </tbody>
        </Table>
        

      </div></div></div></div>
  )
}
export default Document