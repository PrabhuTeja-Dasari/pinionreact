import {Container,Card , Text,Button,Tabs,Table,Avatar,TextInput,Pagination   } from '@mantine/core';

import { IconSearch } from '@tabler/icons-react';
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
    designationname:string

  }
  interface DesignationData {
    designationId: any;
    
  }
  const[GetData,Setdata]=useState<companydetails[]>([]);
  const[GetOff,SetOff]=useState<companydetails[]>([]);
  const[getpermanent,Setpermanent]=useState<companydetails[]>([]);
  const[currentPage,Setcurrentpage]=useState(1);
  const [itemsperpage]=useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getteammembers = await axios.get('https://localhost:7190/api/employee/getallemployees');
        const teammbersdata = getteammembers.data;
        const getdesignation = await axios.get('https://localhost:7190/api/Designation/GetAllDesignation');
        var filtereddesignation=[];
        for(var i=0;i<getdesignation.data.length;i++){
          const uniquedesignation = teammbersdata.filter((e:any)=>e.designationId==getdesignation.data[i].designationId);
          if(uniquedesignation.length>0){
            uniquedesignation.forEach((x: { designationname: any; })=>{
              x.designationname=getdesignation.data[i].designationName
            })
          }
          filtereddesignation.push(uniquedesignation);
        }
        const filtereddata=filtereddesignation.filter((arr)=>arr.length>0);
        const uniqueIds = Array.from(new Set(teammbersdata.map((item: { empStatus: any; }) => item.empStatus)));
        const finalarraydata: any[]=[];
        for(var j=0;j<filtereddata.length;j++){
          filtereddata[j].forEach((x: any) => {
          finalarraydata.push(x)
        })
        }
        const finalfiltereddata=[];
        for(var k=0;k<uniqueIds.length;k++){
          const filterstatus=finalarraydata.filter(e=>e.empStatus===uniqueIds[k]);
          finalfiltereddata.push(filterstatus);
        }
        console.log(finalfiltereddata);
        Setdata(finalfiltereddata[0]);
        SetOff(finalfiltereddata[1]);
        Setpermanent(finalfiltereddata[2]);

      }catch(err){
        console.error("error fetching data",err);
      }
    }

    fetchData();
  }, []);
  return (
    <Container size='xl'>
     <Card shadow="sm" radius="md" withBorder>
      <div id='main-container'>
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
       <TextInput id='inputTextPeople' icon={<IconSearch size={14} />}  placeholder='Search People...'/>
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
        {GetData.slice((currentPage - 1) * itemsperpage, currentPage * itemsperpage).map((x,index)=>(
          <tr key={index}>
            <td>{index+1}</td>
            <td>{x.displayName}</td>
            <td>{x.departmentId|| '-'}</td>
            <td>{x.designationname}</td>
            <td>{x.empStatus}</td>
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
