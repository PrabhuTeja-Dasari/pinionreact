import { useState,useEffect } from 'react';
import { Stepper, Button, Group,Title , TextInput,Radio, PasswordInput, Code,Select,FileInput,NumberInput,Container,Card, Checkbox} from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import './Add-Employee.css'
import moment from 'moment';
import {useLocation} from 'react-router-dom'

import axios from 'axios'
function EditEmployee(){
  const [active, setActive] = useState(0);
  const [data,Setdata]=useState({
   fname:'',
   mname:'',
   lname:'',
   pfname:'',
   pemail:'',
   Country:'',
   worker:'',
   location:'',
   jdate:'',
   work:'',
   jobtitles:'',
   deptid:'',
   manager:'',
   empmode:'',
   amount:'',
   per:'',
   commission:'',
   empstatus:'',
   tax:'',
   dob:''
  });

  const inputDate = moment(data.jdate, 'MMMM D, YYYY');
const formattedDate = inputDate.format('YYYY-MM-DD')+'T07:29:59.455Z';

const [newData, setNewData] = useState({
    firstname:'',
    middleName:'',
lastName:'',
preferedFirstName:'',
email:'',
designation:'',
startDate:'',
employeeType:'',
employementStatus:'',
amount:'',
amountPer:'',
additionalCompensation:'',
taxExemption:'',
empstatus:'',
middlename:'',
employmentType:''

});
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const dataparms = params.get('data');
    if(dataparms){
        let ppjson = JSON.parse(dataparms);
        console.log(ppjson)
        useEffect(()=>{
           try{
            const newDatabyid=async()=>{
             const getemployebyid=await axios.get('http://localhost:5084/api/Employee/'+ppjson);
             console.log(getemployebyid.data)
             setNewData(getemployebyid.data) 
            }
            newDatabyid();

           }catch(err){
            console.error("error fetching data",err);
           }
        },[])
    }else{
        console.error("Not Found")
    }

  interface jobtitles{
    designationName: any;
    designationId: any;
    jobtitle:string
  }
  const[jobtitle,setjobtitle]=useState<jobtitles[]>([]);

  useEffect(()=>{
    const getjobtitle=async()=>{
      const jobtitleresponse = await axios.get('https://localhost:7190/api/Designation/GetAllDesignation');
      console.log(jobtitleresponse.data);
      setjobtitle(jobtitleresponse.data);
    }
    getjobtitle();
  },[])
  const initialJobtitles = ''; 
  const submitdata=(e:any)=>{
    if(dataparms){
        const inputDate = moment(newData.startDate, 'MMMM D, YYYY');
        const formattedDate = inputDate.format('YYYY-MM-DD')+'T07:29:59.455Z';
        let ppjson = JSON.parse(dataparms);
        console.log(ppjson)
    e.preventDefault();
    console.log(data);
    var obj={
      "firstname": newData.firstname,
      "middleName": "Test",
      "lastName": newData.lastName,
      "preferedFirstName": newData.preferedFirstName,
      "email": newData.email,
      "designation": newData.designation,
      "startDate": "2023-10-06T06:20:44.586",
      "employeeType": newData.employeeType,
      "employmentStatus": "Active",
      "amount": newData.amount,
      "amountPer": newData.amountPer,
      "additionalCompensation": true,
      "taxExemption": false
    }
    let json=JSON.stringify(obj);
    let pjson=JSON.parse(json);
    console.log(pjson);
    const addemployeeresponse=async()=>{
      try{
        const editresponsedata=await axios.put('http://localhost:5084/api/Employee/update/'+ppjson,pjson);
        console.log(editresponsedata)
        alert("Data Updated Successfully");
        window.location.href='/TeamMembers'
      }catch(err){
        console.error("Failed to insert the data",err);
      }
    }
    addemployeeresponse();
}else{
    console.error("not found")
}
   
  }
  const nextStep = () =>
  setActive((current) => {
    return current < 3 ? current + 1 : current;
  });

  interface labeldata{
    displayname:string,
    description:string
  }
  const[getlabeldata,setlabeldata]=useState<labeldata[]>([]);
  useEffect(()=>{
    const getresponsedata=async()=>{
      try{
        const getlabelresponse = await axios.get('http://localhost:5084/api/Employee/GetFieldsMetaData');
        console.log(getlabelresponse.data)
        setlabeldata(getlabelresponse.data);
      }catch(err){
        console.error("error getting data",err);
      }
    }
    getresponsedata();
  },[])


 


const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

const personaledit=function(){
  setActive((current)=>(current-3));
}
const roleedit=function(){
  setActive((current)=>(current-2));
}
const compensationedit=function(){
  setActive((current)=>(current-1));
}


  return(

    <div id='main-bg-container'>
      <div>
      <div>
      <form >
    <Stepper active={active}>
      <Stepper.Step label="Personal Information">
        <Container>
          <div >
          <Card shadow="sm"  radius="md" withBorder>
            <div className='p-lg'>
            <div className='card-body'>
              
              <Title order={4} >Tell us who you'd like to add</Title>
              <div className='Personal-Information-container'>
              <TextInput placeholder='Enter First Name' label="First Name" id='customInputStyle' className='first-name' value={newData.firstname} onChange={(e) => setNewData({ ...newData, firstname: e.target.value })}/>
              <TextInput className='middle-name' placeholder='Enter Middle Initial' label="Middle Initial (optional)" id="customInputStyle" value={newData.middleName} onChange={(e)=>setNewData({...newData,middleName:e.target.value})}/>
              </div>
                

                <TextInput placeholder='Enter Last Name' label="Last Name" id="inputStyle2" value={newData.lastName} onChange={(e)=>setNewData({...newData,lastName:e.target.value})} />
               <h1 className='Prefered-first-name mt-3'>Prefered first name(if any)</h1>
               <p className='label-text'>{getlabeldata.length > 0 ? getlabeldata[0].description : ''}</p>
                <TextInput placeholder=' Enter Prefered First Name'id="inputStyle2" value={newData.preferedFirstName} onChange={(e)=>setNewData({...newData,preferedFirstName:e.target.value})}/>

                <h1 className='Prefered-first-name mt-3'>Personal Email</h1>
               <p className='label-text'>{getlabeldata.length > 0 ? getlabeldata[1].description : ''}
               </p>
                <TextInput id="inputStyle2" value={newData.email} placeholder='Enter Personal Email' onChange={(e)=>setNewData({...newData,email:e.target.value})}/>

                <h1 className='Prefered-first-name mt-3 pb-2'>Country</h1>
                <Select placeholder="Select Country" id="inputStyle2" value={data.Country|| ''} data={['India', 'United States', 'United Kingdom']} onChange={(selectedOption) => Setdata({ ...data, Country: selectedOption||'' })}/>              
                <h1 className='Prefered-first-name pt-3 pb-3'>Worker type</h1>  
                 <div className='worker-type-container'>
                
                <div className='rodio-btn-container'>
                  <Radio value="Employee" id="radobtn" className="mt-1 mr-2" name="label" onChange={e=>Setdata({...data,worker:e.target.value})} checked={data.worker==="Employee"} />
                 <div className='labels-container'>
                    <label htmlFor='radobtn' className='label-one'>Employee</label>
                    <label htmlFor='radobtn' className='label-two'>{getlabeldata.length > 0 ? getlabeldata[2].description : ''}.</label>
                 </div>
                 </div>
                 <div className='rodio-btn-container'>
                  <Radio value="Individual Contractor" id="radobtn1" className="mt-1 mr-2" name="label" onChange={e=>Setdata({...data,worker:e.target.value})} checked={data.worker==="Individual Contractor"} />
                 <div className='labels-container'>
                    <label htmlFor='radobtn1' className='label-one'>Individual Contractor</label>
                    <label htmlFor='radobtn1' className='label-two'>{getlabeldata.length > 0 ? getlabeldata[3].description : ''}.</label>
                 </div>
                 </div>


                 <div className='rodio-btn-container'>
                  <Radio value="Business Contractor" id="radobtn2" className="mt-1 mr-2" name="label" onChange={e=>Setdata({...data,worker:e.target.value})} checked={data.worker==="Business Contractor"} />
                 <div className='labels-container'>
                    <label htmlFor='radobtn2' className='label-one'>Business Contractor</label>
                    <label htmlFor='radobtn2' className='label-two'>{getlabeldata.length > 0 ? getlabeldata[4].description : ''}.</label>
                 </div>
                 </div>

                 </div>
                 </div>
                 </div>
                 </Card>
                </div>
                </Container>

      </Stepper.Step>

      <Stepper.Step label="Role Information">
        
      <Container>
          <div className='row'>
          <Card shadow="sm"  radius="md" withBorder>
            <div className='p-lg'>
              <h1 className='pb-4 main-heading'>Tell us about Prefered {newData.firstname}'s role</h1>
              
              <h1 className='Prefered-first-name mt-3 pb-2'>Where will {newData.firstname} work ?</h1>
              <p className='last-name-style label-text'>{getlabeldata.length > 0 ? getlabeldata[5].description : ''}.</p>
              <Select placeholder="Select Work" id="inputStyle2" data={['Work From Home', 'Work From Office', 'Hybrid']} value={data.work} onChange={(selectedOption) => Setdata({ ...data, work: selectedOption || '' })} />              
                <h1 className='Prefered-first-name mt-3 pb-2'>Work Location</h1>
                <p className='last-name-style label-text'>{getlabeldata.length > 0 ? getlabeldata[6].description : ''}</p>
                <Select placeholder="Select Location" id="inputStyle2" data={['Visakhapatnam,IN', 'Hyderabad,IN', 'Chicago,US']} value={data.location} onChange={(selectedOption) => Setdata({ ...data, location: selectedOption || '' })} />     

                <h1 className='Prefered-first-name mt-3 pb-2'>Job Title</h1>
               <p className='last-name-style label-text'>{getlabeldata.length > 0 ? getlabeldata[7].description : ''}</p>
               <TextInput id='inputStyle2' placeholder='Enter Job Title' className='w-100' value={newData.designation || ''} onChange={(e)=>setNewData({...newData,designation:e.target.value})} />
                  
               <h1 className='Prefered-first-name mt-3'>Start Date</h1>
               <p className='last-name-style label-text'>{getlabeldata.length > 0 ? getlabeldata[8].description : ''}</p>
               
                <DatePicker placeholder="Pick date" id="inputStyle2" className='w-100' onChange={(selectedDate: Date | null) => {
                  if (selectedDate !== null) {
                    const formattedDate = formatDate(selectedDate);
                    setNewData({ ...newData, startDate: formattedDate });
                  }
                }}  />

                <h1 className='Prefered-first-name mt-3'>Department</h1>
                <TextInput id="inputStyle2" placeholder='Enter Department Name' value={data.deptid} onChange={(e)=>Setdata({...data,deptid:e.target.value})}/>
                <h1 className='Prefered-first-name mt-3 pb-2'>Manager</h1>
                <p className='last-name-style label-text'>{getlabeldata.length > 0 ? getlabeldata[9].description : ''}</p>
                <TextInput id="inputStyle2" placeholder='Enter Manager Name' value={data.manager} onChange={e=>Setdata({...data,manager:e.target.value})} className='w-100'/>
                </div>
                </Card>
                </div>
                </Container>
      </Stepper.Step>
      <Stepper.Step label="Compensation Information">
     <Container >
        <Card shadow="sm"  radius="md" withBorder>
          <div className='p-lg '>
              <h1 className='pb-4 main-heading'>How will {newData.firstname} be compansated ?</h1>
              
              <h1 className='Prefered-first-name mt-3 pb-2'>Employement Type</h1>
              <Select placeholder="Select Employement Type" id="inputStyle2" data={['Permanent', 'Contract']} value={newData.employeeType} onChange={(selectedOption) => setNewData({ ...newData, employeeType: selectedOption || '' })} />   

                <div className='Employement-type-section'>
                  <div className='middle-name'>
                <h1 className='Prefered-first-name mt-3 pb-2'>Amount</h1>
                <TextInput id="inputStyle3" placeholder='Enter Amount Value' className='mr-2 year-input' value={newData.amount} onChange={e=>setNewData({...newData,amount:e.target.value})}/>
                </div>
                <div className='per-year'>
                <h1 className='Prefered-first-name'>Per</h1>
                <Select
  id="inputStyle2"
  placeholder="Select Month/Year"
  data={['Month', 'Year']}
  value={newData.amountPer}
  onChange={(selectedOption) => setNewData({ ...newData, amountPer: selectedOption || '' })}
/>
             
                </div>
                </div>

                <div className='workerBtn p-2'>
                 <Checkbox id='radobtn5' className='mr-2' name="label1" value="Yes" onChange={e=>setNewData({...newData,additionalCompensation:e.target.value})}/>
                    <label htmlFor='radobtn5' className='label-two'>This employee will receive commissions or other types of additional compensation.</label>
                 </div>
                <div className='Employement-status-section'>
               <h1 className='Prefered-first-name'>Employement Status</h1>
               <Select id = 'inputStyle2' placeholder = 'Select Employment Status' data={['Active', 'Inactive']} value={newData.employementStatus}  onChange={(suggestedOption)=>setNewData({...newData,employementStatus:suggestedOption || ''})}/>
                </div>
                <div className='Employement-status-section'>
                <h1 className='Prefered-first-name mt-3 pb-2'>Does {data.fname} have a special tax exemption status? (This is not common.)</h1>
                <p className='last-name-style label-text'>{getlabeldata.length > 0 ? getlabeldata[10].description : ''}</p>
                <Select id = 'inputStyle2' placeholder='Select Tax' data = {['Yes', 'No']} value={data.tax} onChange={(suggestedOption)=>setNewData({...newData,taxExemption:suggestedOption || ''})}/>
                 
                  
                </div>
                </div>
                </Card>
                </Container>  
                </Stepper.Step>

      <Stepper.Completed>
      <h1 className='pb-4 main-heading'>Review {data.fname}'s Information</h1>
      <div className='compansation-subcontainer'>
  <Container>
        <div className='row'>
        <div className='col-12 col-md-12 col-lg-12 col-xl-12 p-4'>
        <Card shadow="sm"  radius="md" withBorder>
          <div className='p-lg'>
          <div className='role-and-edit-section'>
            <h1 className='Prefered-first-name mt-3  pb-2'>Personal</h1>
           <h1 className='Prefered-first-name mt-3  pb-2 ' onClick={personaledit}>Edit</h1>
           </div>
            <h1 className='Prefered-first-name mt-3  pb-2'>First Name</h1>
            <p>{newData.firstname || '\u00A0'}</p>
            <hr/>
            <h1 className='Prefered-first-name mt-3  pb-2'>Middle Initial</h1>
            <p>{newData.middleName || '\u00A0'}</p>
            <hr/>
            <h1 className='Prefered-first-name mt-3   pb-2'>Last Name</h1>
            <p>{newData.lastName || '\u00A0'}</p>
            <hr/>
            <h1 className='Prefered-first-name mt-3   pb-2'>Prefered First Name</h1>
            <p>{newData.preferedFirstName || '\u00A0'}</p>
            <hr/>
            <h1 className='Prefered-first-name mt-3  pb-2'>Personal Email</h1>
            <p>{newData.email || '\u00A0'}</p>
            <hr/>
            <h1 className='Prefered-first-name mt-3   pb-2'>Country</h1>
            <p>{data.Country || '\u00A0'}</p>
            <hr/>
            <h1 className='Prefered-first-name mt-3  pb-2'>Worker Type</h1>
            <p>{data.worker || '\u00A0'}</p>
            <hr/>
            </div>
            </Card>
          </div>
        </div>

      <Container>
          <div className='reviw-information'>
          <Card shadow="sm"  radius="md" withBorder>
            <div className='p-lg'>
          <div className='role-and-edit-section'>
            <h1 className='Prefered-first-name mt-3  pb-2'>Role</h1>
            <h1 className='Prefered-first-name mt-3  pb-2 ' onClick={roleedit}>Edit</h1>
            </div>
            <h1 className='Prefered-first-name mt-3  pb-2'>Work Location</h1>
            <p>{data.location || '\u00A0'}</p>
            <hr/>
            <h1 className='Prefered-first-name mt-3  pb-2'>Work State</h1>
            <p>{data.work || '\u00A0'}</p>
            <hr/>
            <h1 className='Prefered-first-name mt-3  pb-2'>Job Title</h1>
            <p>{data.jobtitles || '\u00A0'}</p>
            <hr/>
            <h1 className='Prefered-first-name mt-3  pb-2'>Start Date</h1>
            <p>{formattedDate || '\u00A0'}</p>
            <hr/>
            <h1 className='Prefered-first-name mt-3  pb-2'>Department</h1>
            <p>{data.deptid || '\u00A0'}</p>
            <hr/>
            <h1 className='Prefered-first-name mt-3  pb-2'>Manager</h1>
            <p>{data.manager || '\u00A0'}</p>
            </div>
            </Card>
          </div>
        </Container>
        <Container>
        
          <Card shadow="sm" radius="md" withBorder>
            <div className='p-lg '>
           <div className='role-and-edit-section'>
            <h1 className='Prefered-first-name mt-3 pb-2'>Compensation</h1>
            <h1 className='Prefered-first-name mt-3 pb-2 ' onClick={compensationedit}>Edit</h1>
            </div>
            <h1 className='Prefered-first-name mt-3 pb-2'>Employement Type</h1>
            <p>{newData.employmentType || '\u00A0'}</p>
            <hr/>
            <h1 className='Prefered-first-name mt-3 pb-2'>Amount </h1>
            <p>{newData.amount || '\u00A0'} </p>
            <hr/>
            <h1 className='Prefered-first-name mt-3 pb-2'> Per</h1>
            <p>{newData.amountPer || '\u00A0'} </p>
            <h1 className='Prefered-first-name mt-3 pb-2'>Employement Status</h1>
            <p>{newData.employmentStatus || '\u00A0'}</p>
            <hr/>
            <h1 className='Prefered-first-name mt-3 pb-2'>Does have a special tax exemption status?</h1>
            <p>{newData.taxExemption || '\u00A0'}</p>
            <hr/>
            </div>
            </Card>
        
      </Container>
    </Container>
      <Container>
          <div className='biz-whiz'>
          <Card shadow="sm"  radius="md" withBorder>
            <div className='p-lg'>
           <h1 className='Prefered-first-name mt-3 pb-2'>{newData.firstname}'s Start Date</h1>
      <label className='label-text'>{newData.startDate}</label>
      <p>MyBizWhiz onboarding gets {newData.firstname} ready for day one on your team. You can always update {newData.firstname} start date on thier checklist.</p>
      </div>
      </Card>
      </div>
      </Container>
      </div>
      </Stepper.Completed>
    </Stepper>
    </form>
    </div>

    <Group className="p-4" style={{ justifyContent: 'flex-end'}} mt="xl">
      {active !== 0 &&  active !==3 &&(
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
      )}
      {active !== 3 && <Button variant='default' onClick={nextStep}>Save and Continue</Button>
      }
      {active>2 && <Button variant='default' onClick={submitdata}>Add {data.fname} and exit</Button>}
      {active>2 && <Button variant='default' onClick={submitdata}>Add {data.fname} and setup for payroll</Button>}
    </Group>
      </div>
    </div>
 
  )
  function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return date.toLocaleDateString(undefined, options);
  }
}

export default EditEmployee;