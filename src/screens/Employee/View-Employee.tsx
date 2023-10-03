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

    <div className="sub-container">

    <div id='subContainerDownSection-2'>
    <h3>Employee Details</h3>
    <div id='subContainerDownSection-3'>
    <div className='subContainerDownSection-4'>
    <p className='department-p'>department</p>
    <p className='department-p'>manager</p>
    <p className='department-p'>Start date</p>
    </div>
    <div>
    <p className='color-p'>edit</p>
    </div>
    </div>
    <div id='subContainerDownSection-2'>
    <h3>Manager Role</h3>
    <div id='subContainerDownSection-3'>
        <div className='subContainerDownSection-4'>
        <p className='department-p'>Direct Reports</p>
        <p className='color-p'>Add or remove direct reports</p>
        </div>
        <div>
        <p className='color-p'>edit</p>
        </div>
        </div>
    </div>
    <div id='subContainerDownSection-2'>
    <h3>Email</h3>
    <div id='subContainerDownSection-3'>
        <div className='subContainerDownSection-4'>
        <p className='department-p'>Personal Email</p>
        <p className='department-p'>Work Email</p>
        </div>
        <div>
        <p className='color-p'>edit</p>
        </div>
        </div>
    </div>

    <div id='subContainerDownSection-2'>
    <h3>Work Address</h3>
    <div id='subContainerDownSection-3'>
        <div className='subContainerDownSection-4'>
        <p className='department-p'>Current Address</p>
        <p className='workerPhone'>Phone</p>
        </div>
        <div>
        <p className='color-p'>edit</p>
        </div>
        </div>
    </div>

    <div id='subContainerDownSection-2'>
    <h3>Employment Status</h3>
    <div id='subContainerDownSection-3'>
        <div className='subContainerDownSection-4'>
        <p className='workerphone'>Status</p>
        </div>
        <div>
        <p className='color-p'>edit</p>
        </div>
        </div>
    </div>
    <div id='subContainerDownSection-2'>
    <h3>Compensation</h3>
    <div id='subContainerDownSection-3'>
        <div className='subContainerDownSection-4'>
        <p className='department-p'>Employee Type <span className='spanel'>dublicate</span></p>
        <p className='department-pp'>Job Title <span className='spanel'>dublicate</span></p>
        <p className='department-pp'>Wage <span className='spanel'>dublicate</span></p>
        <p className='department-p'>Default hours <span className='spanel'>dublicate</span></p>
        <p className='department-p'>Job Class Code <span className='spanel'>dublicate</span></p>
        </div>
        <div>
        <p className='color-p'>edit</p>
        </div>
        </div>
    </div>

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



