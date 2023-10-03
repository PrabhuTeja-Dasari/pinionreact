import { Container,Card } from '@mantine/core';
import './View-Employee.css';
import {Text,Button,Tabs,Table,Avatar,TextInput,Pagination   } from '@mantine/core';

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
        <p className="profile-section"></p>
        <div className="input-name-section">
        <p className="teamMembername-2">Srikanth</p>
        <Tabs radius="md" defaultValue="gallery">
      <Tabs.List>
        <Tabs.Tab value="gallery" >
          Gallery
        </Tabs.Tab>
        <Tabs.Tab value="messages" >
          Messages
        </Tabs.Tab>
        <Tabs.Tab value="settings">
          Settings
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery">
        Gallery tab content
      </Tabs.Panel>

      <Tabs.Panel value="messages">
        Messages tab content
      </Tabs.Panel>

      <Tabs.Panel value="settings">
        Settings tab content
      </Tabs.Panel>
    </Tabs>
    </div>
    <div className="sub-container">
     <div className='sub-conatener-down-section'>


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



