import { Container,Card } from '@mantine/core';
import './View-Employee.css';
import {Text,Button,Tabs,Table,Avatar,TextInput,Pagination    } from '@mantine/core';
import { useNavigate, Link, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import {IconFileText,IconStar,IconPencil,IconList,IconChevronRight  } from '@tabler/icons'
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
<p className="teamMebername-1"><span className="teamMebername">Team member</span>/Srikanth</p>

<div className="teamMemberSection-2">
  <div id='mobileScreenView'>
  <Avatar color="cyan" className='avatr-style-2' radius="xl" >MK</Avatar>
  <p className="teamMembername-3">Srikanth</p>
  </div>
<Avatar color="cyan" className='avatr-style' radius="xl" >MK</Avatar>
    <div className="input-name-section">
    <p className="teamMembername-3">Srikanth</p>
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
    <div className='heading-and-edit-section'>
    <h3>Employment details</h3>
    <p className='color-p'>      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pencil icone-style" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#62b2b5" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
  <path d="M13.5 6.5l4 4" />
</svg> edit</p>
    </div>

    <div id='subContainerDownSection-3'>
        <div className='subContainerDownSection-4'>
            <div className='sub-section-container6'>
        <h2 className='department-p'>Department</h2>
        <p className='addname-p'>ssaikiran ganji</p>
        </div>
        <div className='sub-section-container6'>
        <h2 className='department-p'>Manager</h2>
        <p className='addname-p'>dublicate</p>
        </div>
        <div className='sub-section-container6'>
        <h2 className='department-p'>Start date</h2>
        <p className='addname-p'>Dublicate</p>
        </div>
        </div>
        </div>
    </div>

    <div id='subContainerDownSection-2'>
    <div className='heading-and-edit-section'>
    <h3>manager role</h3>
    <p className='color-p'>      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pencil icone-style" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#62b2b5" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
  <path d="M13.5 6.5l4 4" />
</svg> edit</p>
    </div>


    <div id='subContainerDownSection-3'>
        <div className='subContainerDownSection-4'>
            <div className='sub-section-container6'>
        <h2 className='department-p'>Direct reports</h2>
        <p className='addname-p'>ssaikiran ganji</p>
        </div>
        <div className='sub-section-container6'>
        <p className='color-p'> <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-notes icone-style" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#62b2b5" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
  <path d="M9 7l6 0" />
  <path d="M9 11l6 0" />
  <path d="M9 15l4 0" />
</svg> Manage Work Address</p>
        </div>
        </div>
        </div>
    </div>

    <div id='subContainerDownSection-2'>
    <div className='heading-and-edit-section'>
    <h3>Email</h3>
    <p className='color-p'>      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pencil icone-style" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#62b2b5" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
  <path d="M13.5 6.5l4 4" />
</svg> edit</p>
    </div>
    <div id='subContainerDownSection-3'>
        <div className='subContainerDownSection-4'>
            <div className='sub-section-container6'>
        <h2 className='department-p'>Personel email</h2>
        <p className='addname-p'>ssaikiran ganji</p>
        </div>
        <div className='sub-section-container6'>
        <h2 className='department-pp'>Work email</h2>
        <p className='addname-p'>ssaikiran ganji</p>
        </div>
        </div>

        </div>
    </div>


    <div id='subContainerDownSection-2'>
    <div className='heading-and-edit-section'>
    <h3>Work Address</h3>
    <p className='color-p'>      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pencil icone-style" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#62b2b5" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
  <path d="M13.5 6.5l4 4" />
</svg> edit</p>
    </div>
    <div id='subContainerDownSection-3'>
        <div className='subContainerDownSection-4'>
            <div className='sub-section-container6'>
        <h2 className='department-p'>Current Adress</h2>
        <p className='addname-p'>kumarmannapalem rd.</p>
        </div>
        <div className='sub-section-container6'>
        <h2 className='department-pp'>phone </h2>
        <p className='addname-p'>91 98989065589 </p>
        </div>
        </div>
        </div>
    </div>

    
    <div id='subContainerDownSection-2'>
    <div className='heading-and-edit-section'>
    <h3>Employee status</h3>
    <p className='color-p'>      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pencil icone-style" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#62b2b5" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
  <path d="M13.5 6.5l4 4" />
</svg> edit</p>
    </div>
    <div id='subContainerDownSection-3'>
        <div className='subContainerDownSection-4'>
            <div className='sub-section-container6'>
        <h2 className='department-p'>Employee Type </h2>
        <p className='addname-p'>ssaikiran ganji ssaikiran ganji</p>
        </div>
        </div>

        </div>
    </div>

    <div id='subContainerDownSection-2'>
    <div className='heading-and-edit-section'>
    <h3>Compensation</h3>
    <p className='color-p'>      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pencil icone-style" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#62b2b5" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
  <path d="M13.5 6.5l4 4" />
</svg> edit</p>
    </div>
    <div id='subContainerDownSection-3'>
        <div className='subContainerDownSection-4'>
        <div className='sub-section-container6'>
        <h2 className='department-p'>Employee Type</h2>
        <p className='addname-p'>ssaikiran ganji ssaikiran ganji</p>
        </div>

        <div className='sub-section-container6'>
        <h2 className='department-p'>Job Title </h2>
        <p className='addname-p'>ssaikiran ganji ssaikiran ganji</p>
        </div>

        <div className='sub-section-container6'>
        <h2 className='department-p'>Wage </h2>
        <p className='addname-p'>ssaikiran ganji ssaikiran ganji</p>
        </div>

        <div className='sub-section-container6'>
        <h2 className='department-p'>Default hours </h2>
        <p className='addname-p'>ssaikiran ganji ssaikiran ganji</p>
        </div>
        <div className='sub-section-container6'>
        <h2 className='department-p'>Job Class Code </h2>
        <p className='addname-p'>ssaikiran ganji ssaikiran ganji</p>
        </div>
        </div>
        </div>   
    </div>
  </div>

    <div  className='cord-side-section'>
  <Card>
    <div className='sub-card-container'>
        <h4 className='paystubs-heading'>PayStubs</h4>
        <div className='sub-card-container-2'>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-text icone-style" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#62b2b5" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
  <path d="M9 9l1 0" />
  <path d="M9 13l6 0" />
  <path d="M9 17l6 0" />
</svg>        <p className='recent-payStubs'>Most recent paystubs (22-3-23)</p>
        </div>
        <p className='paystubs-p'>Previous paystubs by payday</p>
        <TextInput id='inputCard' placeholder='select...'></TextInput>
        <Button variant="default">View Paystub</Button>
    </div>  
  </Card>

  <Card>
    <div className='sub-card-container'>
        <h4 className='paystubs-heading'>Additional payrolls</h4>
        <div className='sub-card-container-3'>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star icone-style" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#62b2b5" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
</svg>
        <p className='recent-payStubs'>Run bonus roll</p>
        </div>
        <div className='sub-card-container-3'>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pencil icone-style" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#62b2b5" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
  <path d="M13.5 6.5l4 4" />
</svg>
        <p className='recent-payStubs-2'>Run off-cycle payroll</p>
        </div>
    </div>  
  </Card>

  <Card>
    <div className='sub-card-container'>
        <h4 className='paystubs-heading'>Onboarding</h4>
        <p className='additional-p'>There are 2 tasks left on onboarding checklist.</p>
        <div className='sub-card-container-3'>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-notes icone-style" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#62b2b5" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
  <path d="M9 7l6 0" />
  <path d="M9 11l6 0" />
  <path d="M9 15l4 0" />
</svg>
        <p className='recent-payStubs-2'>Onboarding Checklist</p>
        </div>
    </div>  
  </Card>

  <Card>
    <div className='sub-card-container'>
        <h4 className='paystubs-heading'>Actions</h4>
        <p className='additional-p'>Need to dismiss this employee? we'll walk through it.</p>
        <div className='sub-card-container-3'>
        <p className='recent-payStubs-2'>Start employee dismissal</p>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right icone-style" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#62b2b5" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M9 6l6 6l-6 6" />
</svg>
        </div>
    </div>  
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



