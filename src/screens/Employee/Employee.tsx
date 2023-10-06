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
  const[searchdata,setsearchdata]=useState('');
  

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
    <Container size="xl">
     <Card shadow="sm" radius="md" withBorder>
      <div id='main-container'>
      <div>
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
      <th colSpan={3}>Action</th>
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
            <td><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eye-filled" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#62b2b5" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 4c4.29 0 7.863 2.429 10.665 7.154l.22 .379l.045 .1l.03 .083l.014 .055l.014 .082l.011 .1v.11l-.014 .111a.992 .992 0 0 1 -.026 .11l-.039 .108l-.036 .075l-.016 .03c-2.764 4.836 -6.3 7.38 -10.555 7.499l-.313 .004c-4.396 0 -8.037 -2.549 -10.868 -7.504a1 1 0 0 1 0 -.992c2.831 -4.955 6.472 -7.504 10.868 -7.504zm0 5a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" stroke-width="0" fill="currentColor" />
</svg></td>
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
