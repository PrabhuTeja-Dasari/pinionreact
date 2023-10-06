import {Container,Card , Text,Button,Tabs,Table,Avatar,TextInput,Pagination , Alert  } from '@mantine/core';

import { IconSearch,IconZoomIn,IconEdit,IconTrash } from '@tabler/icons-react';
import {useState,useEffect} from 'react'
import './Employee.css';
import axios from 'axios';
function Employee() {
  const iconStyle = { width: rem(12), height: rem(12) };
  const addteam=function(){
    window.location.href='/AddTeamMember'
  }
  const viewteam=function(data:any){
    console.log(data);
    window.location.href=`/ViewEmployee?data=${encodeURIComponent(JSON.stringify(data.userId))}`
  }
  type companydetails={
    empStatus:string,
    displayName:string,
    departmentId:string,
    designationname:string,
    preferedFirstName:string,
    employmentStatus:string,
    designation:string
  }
  interface DesignationData {
    designationId: any;
    
  }
  const[GetData,Setdata]=useState<companydetails[]>([]);
  const[GetOff,SetOff]=useState<companydetails[]>([]);
  const[getpermanent,Setpermanent]=useState<companydetails[]>([]);
  const[currentPage,Setcurrentpage]=useState(1);
  const [itemsperpage]=useState(10);
  const[searchdata,setsearchdata]=useState('');
  const viewdata=function(data:any){
    window.location.href = `/ViewTeamMember?data=${encodeURIComponent(JSON.stringify(data.id))}`;
  }
const editdata=function(data:any){
  window.location.href=`EditTeamMember?data=${encodeURIComponent(JSON.stringify(data.id))}`;
}
  useEffect(() => {
    const fetchData = async () => {
      try {
        const getteammembers = await axios.get('http://localhost:5084/api/Employee/GetAllEmployees');
        const teammbersdata = getteammembers.data;
        Setdata(teammbersdata);
        console.log(teammbersdata);
     
      }catch(err){
        console.error("error fetching data",err);
      }
    }

    fetchData();
  }, []);
 const deletedatas=function(data:any){
  const deletedata=async()=>{
    try{
      const deleteresponsedata = await axios.delete('http://localhost:5084/api/Employee/delete/'+data.id);
      console.log(deleteresponsedata);
      alert('Data Submitted Successfully')
    }catch(err){
      console.error("error fetching data",err);
    }
  }
  deletedata();
 }
  return (
    <Container size="xl">
     <Card shadow="sm" radius="md" withBorder>
      <div className='main-container-2'>
      <div id='sub-container'>
      <Text size="xl" fw={700}>Team Members</Text>
      <p>You have Active Team Members</p>
      </div>
      <div>
      <Button variant='default' onClick={addteam}>Add a Team Member</Button>
      </div>

      </div>
      <Tabs defaultValue="active">
      <Tabs.List>
  <Tabs.Tab value="active">
    <div className="tab-content">
   Active
    </div>
  </Tabs.Tab>
  <Tabs.Tab value="onboarding">
    <div className="tab-content">
      Onboarding
    </div>
  </Tabs.Tab>
  <Tabs.Tab value="offboarding">
    <div className="tab-content">
      Offboarding
    </div>
  </Tabs.Tab>
  <Tabs.Tab value="dismissed">
    <div className="tab-content">
      Dismissed
    </div>
  </Tabs.Tab>
  <Tabs.Tab value="permanent">
    <div className="tab-content">
      Permanent
    </div>
  </Tabs.Tab>
</Tabs.List>

      <Tabs.Panel value="active">
       <div className='pepole-section'>
       <TextInput id='inputTextPeople' icon={<IconSearch size={14} />}  placeholder='Search People...' value={searchdata} onChange={(e)=>setsearchdata(e.target.value)}/>
       <div className='nameSection'>
      <Table striped highlightOnHover withBorder withColumnBorders>
     <thead>
      <tr>
      <th>#</th>
      <th >Name</th>
      <th>Department</th>
      <th>Job Title</th>
      <th>Employement Type</th>
      <th colSpan={3} id='text'>Action</th>
      </tr>
      </thead>
      <tbody>
        {GetData.slice((currentPage - 1) * itemsperpage, currentPage * itemsperpage).map((x,index)=>(
          <tr key={index}>
            <td>{index+1}</td>
            <td>{x.preferedFirstName}</td>
            <td>{x.departmentId|| '-'}</td>
            <td>{x.designation|| '-'}</td>
            <td>{x.employmentStatus}</td>
            <td><IconZoomIn onClick={() => viewdata(x)} /></td>
            <td><IconEdit onClick={()=>editdata(x)}/></td>
            <td><IconTrash  onClick={()=>deletedatas(x)}/></td>
          </tr>
        ))}
      </tbody>
     
    </Table>
    </div>
    </div>
    <Pagination
  initialPage={currentPage} // Use initialPage to set the initial page
  onChange={(newPage) => Setcurrentpage(newPage)} // Handle page changes
  total={Math.ceil(GetData.length / itemsperpage)} // Calculate total pages based on GetData length
/>
      </Tabs.Panel>

      <Tabs.Panel value="onboarding">

      <div  className='pepole-section'>
       <TextInput id='inputTextPeople' placeholder='Search People...'/>
       <div className='nameSection'>
      <Table striped highlightOnHover withBorder withColumnBorders>
     <thead>
      <tr>
      <th>#</th>
      <th>Name</th>
      <th>Department</th>
      <th>Job Title</th>
      <th>Employement Type</th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td className='nameAndicon'><Avatar color="cyan" radius="xl">MK</Avatar> <span className='nameSpan'>Testing</span></td>
          <td>-</td>
          <td>Jr.Software Engineer</td>
          <td>Employee</td>
        </tr>
      </tbody>
    </Table>
    </div>
    </div>
    <Pagination total={10} />
      </Tabs.Panel>
      <Tabs.Panel value="offboarding">
      <div  className='pepole-section'>
       <TextInput id="inputTextPeople" placeholder='Search People...'/>
       <div className='nameSection'>
      <Table striped highlightOnHover withBorder withColumnBorders>
     <thead>
      <tr>
      <th>#</th>
      <th>Name</th>
      <th>Department</th>
      <th>Job Title</th>
      <th>Employement Type</th>
      </tr>
      </thead>
      <tbody>
        {GetOff.slice((currentPage - 1) * itemsperpage, currentPage * itemsperpage).map((x,index)=>(
          <tr key={index}>
            <td>{index+1}</td>
            <td>{x.displayName}</td>
            <td>{x.departmentId||'-'}</td>
            <td>{x.designationname}</td>
            <td>{x.empStatus}</td>
          </tr>
        ))}
      </tbody>
    
    </Table>
    </div>
    </div>
    <Pagination
  initialPage={currentPage} 
  onChange={(newPage) => Setcurrentpage(newPage)} 
  total={Math.ceil(GetOff.length / itemsperpage)} 
/>

      </Tabs.Panel>
      <Tabs.Panel value="dismissed">
      <div  className='pepole-section'>
       <TextInput id="inputTextPeople" placeholder='Search People...'/>
       <div className='nameSection'>
      <Table striped highlightOnHover withBorder withColumnBorders>
     <thead>
      <tr>
      <th>#</th>
      <th>Name</th>
      <th>Department</th>
      <th>Job Title</th>
      <th>Employement Type</th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td className='nameAndicon'><Avatar color="cyan" radius="xl">MK</Avatar> <span className='nameSpan'>Testing1234567890</span></td>
          <td>-</td>
          <td>Jr.Software Engineer</td>
          <td>Employee</td>
        </tr>
      </tbody>
    </Table>
    </div>
    </div>
    <Pagination total={10} />
    

      </Tabs.Panel>
      <Tabs.Panel value="permanent">
      <div  className='pepole-section'>
       <TextInput id="inputTextPeople" placeholder='Search People...'/>
       <div className='nameSection'>
      <Table striped highlightOnHover withBorder withColumnBorders>
     <thead>
      <tr>
      <th>#</th>
      <th>Name</th>
      <th>Department</th>
      <th>Job Title</th>
      <th>Employement Type</th>
      </tr>
      </thead>
      <tbody>
        {getpermanent.slice((currentPage - 1) * itemsperpage, currentPage * itemsperpage).map((x,index)=>(
          <tr key={index}>
            <td>{index+1}</td>
            <td>{x.displayName}</td>
            <td>{x.departmentId||'-'}</td>
            <td>{x.designationname}</td>
            <td>{x.empStatus}</td>
          </tr>
        ))}
      </tbody>
    
    </Table>
    </div>
    </div>
    <Pagination
  initialPage={currentPage} 
  onChange={(newPage) => Setcurrentpage(newPage)} 
  total={Math.ceil(getpermanent.length / itemsperpage)} 
/>

      </Tabs.Panel>
    </Tabs>
      </Card>
      </Container>
      )
      function rem(valueInPixels:any) {
        return `${valueInPixels / 16}rem`; // Assuming 1rem = 16px
      }
}
export default Employee
