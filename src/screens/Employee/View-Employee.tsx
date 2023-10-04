import { Container,Card } from '@mantine/core';
import './View-Employee.css';
import {Text,Button,Tabs,Table,Avatar,TextInput,Pagination    } from '@mantine/core';

import axios from 'axios';
import { useLocation } from 'react-router-dom';
function ViewEmployee(){

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const dataparms = params.get('data');
    if(dataparms){
    const data = JSON.parse(decodeURIComponent(dataparms));
    let parseddata=data;
    let editdata=async()=>{
        try{
            var obj={
                "userId":parseddata
            }
            const editresponse = await axios.post('https://localhost:7190/api/Employee/GetEmployeeById',obj);
            console.log(editresponse.data[0])
    
     
    
        }catch(err){
            console.error("Error Fetchin data:",err)
      }
    
    }
    editdata();
}else{
    console.log("Not Found")
}  

    return(
        <Container size="xl">
        <Card shadow="sm" radius="md" withBorder>
        <div className="main-container">

        <div id="teamMemberSection">
        <p><span className="teamMebername">Team member</span>/Srikanth</p>
        </div>

<div className="teamMemberSection-2">

<Avatar color="cyan" radius="xl" >MK</Avatar>

    <div className="input-name-section">
    <p className="teamMembername-2">Srikanth</p>
    <Tabs radius="md" defaultValue="Job & Pay">
      <Tabs.List>
        <Tabs.Tab value="Job & Pay" >
        Job & Pay
        </Tabs.Tab>
        <Tabs.Tab value="Personal" >
        Personal
        </Tabs.Tab>
        <Tabs.Tab value="Performance">
        Performance
        </Tabs.Tab>
        <Tabs.Tab value="Time Off">
        Time Off
        </Tabs.Tab>
        <Tabs.Tab value="Apps">
        Apps
        </Tabs.Tab>
        <Tabs.Tab value="Documents">
        Documents
        </Tabs.Tab>
        <Tabs.Tab value="Benefits">
        Benefits
        </Tabs.Tab>
        <Tabs.Tab value="Notes">
        Notes
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="Job & Pay">

    <div className="sub-container">
    <div id='subContainerDownSection-main'>
    <div id='subContainerDownSection-2'>
    <h3>Employment details</h3>
    <div id='subContainerDownSection-3'>
        <div className='subContainerDownSection-4'>
            <div className='sub-section-container5'>
        <h2 className='department-p'>Department</h2>
        <p className='addname-p'>Duplicate</p>
        </div>
        <div className='sub-section-container5'>
        <h2 className='department-p'>Manager</h2>
        <p className='addname-p'>dublicate</p>
        </div>
        <div className='sub-section-container5'>
        <h2 className='department-p'>Start date</h2>
        <p className='addname-p'>Dublicate</p>
        </div>
        </div>
        <p className='color-p'>edit</p>
        </div>
    </div>

    <div id='subContainerDownSection-2'>
    <h3>Manager role</h3>
    <div id='subContainerDownSection-3'>
        <div className='subContainerDownSection-4'>
            <div className='sub-section-container5'>
        <h2 className='department-p'>Direct reports</h2>
        <p className='addname-p'>Duplicate</p>
        </div>
        <div className='sub-section-container5'>
        <p className='color-p'>Add or Remove Direct Reports</p>
        </div>
        </div>
        <p className='color-p'>edit</p>
        </div>
    </div>

    <div id='subContainerDownSection-2'>
    <h3>Email</h3>
    <div id='subContainerDownSection-3'>
        <div className='subContainerDownSection-4'>
            <div className='sub-section-container5'>
        <h2 className='department-p'>Personel email</h2>
        <p className='addname-p'>Duplicate</p>
        </div>
        <div className='sub-section-container5'>
        <h2 className='department-pp'>Work email</h2>
        <p className='addname-p'>Duplicate</p>
        </div>
        </div>
        <p className='color-p'>edit</p>
        </div>
    </div>


    <div id='subContainerDownSection-2'>
    <h3>Work Address</h3>
    <div id='subContainerDownSection-3'>
        <div className='subContainerDownSection-4'>
            <div className='sub-section-container5'>
        <h2 className='department-p'>Current Adress</h2>
        <p className='addname-p'>Duplicate</p>
        </div>
        <div className='sub-section-container5'>
        <h2 className='department-pp'>phone </h2>
        <p className='addname-p'>Duplicate</p>
        </div>
        </div>
        <p className='color-p'>edit</p>
        </div>
    </div>


    <div id='subContainerDownSection-2'>
    <h3>Employee Status</h3>
    <div id='subContainerDownSection-3'>
        <div className='subContainerDownSection-4'>
            <div className='sub-section-container5'>
        <h2 className='department-p'>Employee Type </h2>
        <p className='addname-p'>Duplicate</p>
        </div>
        </div>
        <p className='color-p'>edit</p>
        </div>
    </div>

    <div id='subContainerDownSection-2'>
    <h3>Compensation</h3>
    <div id='subContainerDownSection-3'>
        <div className='subContainerDownSection-4'>
            <div className='sub-section-container5'>
        <h2 className='department-p'>Employee Type </h2>
        <p className='addname-p'>Duplicate</p>
        </div>
        <div className='sub-section-container5'>
        <h2 className='department-pp'>Job Title </h2>
        <p className='addname-p'>Duplicate</p>
        </div>
        <div className='sub-section-container5'>
        <h2 className='department-pp'>Wage </h2>
        <p className='addname-p'>Duplicate</p>
        </div> 
        <div className='sub-section-container5'>
        <h2 className='department-p'>Default hours </h2>
        <p className='addname-p'>Duplicate</p>
        </div>
        <div className='sub-section-container5'>
        <h2 className='department-p'>Job Class Code </h2>
        <p className='addname-p'>Duplicate</p>
        </div>
        </div>
        <p className='color-p'>edit</p>
        </div>   
    </div>
  </div>

    <div>
  <Card>
    
  </Card>
    </div>


</div>
      </Tabs.Panel>
      <Tabs.Panel value="Personal">
      <Container>
        personal
            </Container>
      </Tabs.Panel>

      <Tabs.Panel value="Performance">
      <Container>
        performance
            </Container>
      </Tabs.Panel>
      <Tabs.Panel value="Time Off">
      <Container>
        timeoff
            </Container>
      </Tabs.Panel>
      <Tabs.Panel value="Apps">
      <Container>
        apps
            </Container>
      </Tabs.Panel>
      <Tabs.Panel value="Documents">
      <Container>
      Documents
            </Container>
      </Tabs.Panel>
      <Tabs.Panel value="Benefits">
      <Container>
        benefits
            </Container>
      </Tabs.Panel>
      <Tabs.Panel value="Notes">
      <Container>
        notes
            </Container>
      </Tabs.Panel>
    </Tabs>
    </div>
</div>

    

</div>

            </Card>
        </Container>
    )
    function rem(valueInPixels:any) {
        return `${valueInPixels / 16}rem`; // Assuming 1rem = 16px
      }
}
export default ViewEmployee;



