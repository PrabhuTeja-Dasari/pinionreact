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
    departmentId:string;

  }
  interface DesignationData {
    designationId: any;
    
  }
  const[GetData,Setdata]=useState<companydetails[]>([]);
  const[GetOff,SetOff]=useState<companydetails[]>([]);
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
        console.log(filtereddata);
      }catch(err){
        console.error("error fetching data",err);
      }
    }

    fetchData();
  }, []);
  return (
    <Container size="xl">
     <Card shadow="sm" radius="md" withBorder>
      <div className='main-conatiner'>
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
</Tabs.List>

      <Tabs.Panel value="active">
       <div className='pepole-section'>
       <TextInput id='inputTextPeople' icon={<IconSearch size={14} />}  placeholder='Search People...'/>
       <div className='nameSection'>
      <Table striped highlightOnHover withBorder withColumnBorders>
     <thead>
      <tr>
      <th>#</th>
      <th >Name</th>
      <th>Department</th>
      <th>Job Title</th>
      <th>Employement Type</th>
      </tr>
      </thead>
     
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
    
    </Table>
    </div>
    </div>
    <Pagination
  initialPage={currentPage} 
  onChange={(newPage) => Setcurrentpage(newPage)} 
  total={Math.ceil(GetData.length / itemsperpage)} 
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
    </Tabs>
      </Card>
      </Container>
      )
      function rem(valueInPixels:any) {
        return `${valueInPixels / 16}rem`; // Assuming 1rem = 16px
      }
}
export default Employee
