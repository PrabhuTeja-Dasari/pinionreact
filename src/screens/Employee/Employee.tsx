import {Container,Card , Text,Button,Tabs,Table,Avatar,TextInput,Pagination   } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';

import './Employee.css'
function Employee() {
  const iconStyle = { width: rem(12), height: rem(12) };
  const addteam=function(){
    window.location.href='/AddTeamMember'
  }
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
       <TextInput id='inputTextPeople' placeholder='Search People...'/>
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
      <tbody>
        <tr>
          <td>1</td>
          <td className='nameAndicon'><Avatar color="cyan" radius="xl">MK</Avatar> <span className='nameSpan'>PrabhuTeja</span></td>
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
        <tr>
          <td>1</td>
          <td className='nameAndicon'><Avatar color="cyan" radius="xl">MK</Avatar> <span className='nameSpan'>Testing123</span></td>
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
