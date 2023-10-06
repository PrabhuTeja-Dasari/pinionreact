import { useState,useEffect } from 'react';
import { Stepper, Button, Group,Title , TextInput,Radio, PasswordInput, Code,Select,FileInput,NumberInput,Container,Card, Checkbox} from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import './Add-Employee.css'
import moment from 'moment';

import axios from 'axios'
function AddEmployee(){
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
   jobtitle:'',
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

  const submitdata=(e:any)=>{
    e.preventDefault();
    console.log(data);
    var obj={
      "firstname": data.fname,
      "middleName": data.mname,
      "lastName": data.lname,
      "preferedFirstName": data.pfname,
      "email": data.pemail,
      "designation": data.jobtitle,
      "startDate": formattedDate,
      "employeeType": data.empmode,
      "employmentStatus": data.empstatus,
      "amount": data.amount,
      "amountPer": data.per,
      "additionalCompensation": false,
      "taxExemption": false
    }
    let json=JSON.stringify(obj);
    let pjson=JSON.parse(json);
    console.log(pjson);
    const addemployeeresponse=async()=>{
      try{
        const response = await axios.post('https://localhost:7097/api/Employee/create',pjson);
        console.log(response)
      }catch(err){
        console.error("Failed to insert the data",err);
      }
    }
    addemployeeresponse();
   
  }
  const nextStep = () =>
  setActive((current) => {
    return current < 3 ? current + 1 : current;
  });



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

    <div id="main-container">
      <div>
      <div>
      <form >
    <Stepper active={active}>
      <Stepper.Step label="Personal Information">
        <Container>
          <div>
          <Card shadow="sm"  radius="md" withBorder>
            <div className='p-lg'>
            <div className='card-body'>
              
              <Title order={4} >Tell us who you'd like to add</Title>
              <div className='Personal-Information-container'>
              <TextInput placeholder='Enter First Name' label="First Name" id='customInputStyle' className='first-name' value={data.fname} onChange={(e) => Setdata({ ...data, fname: e.target.value })}/>
            
                <TextInput className='middle-name' placeholder='Enter Middle Initial' label="Middle Initial (optional)" id="customInputStyle" value={data.mname} onChange={(e)=>Setdata({...data,mname:e.target.value})}/>
               </div>
                

                <TextInput placeholder='Enter Last Name' label="Last Name" id="inputStyle2" value={data.lname} onChange={(e)=>Setdata({...data,lname:e.target.value})} />
               <h1 className='Prefered-first-name mt-3'>Prefered first name(if any)</h1>
               <p className='label-text'>MyBizWhiz will use this name to refer to this person in communications 
                where their legal first name is required (offer letter, onboarding emails, org etc)</p>
                <TextInput placeholder=' Enter Prefered First Name'id="inputStyle2" value={data.pfname} onChange={(e)=>Setdata({...data,pfname:e.target.value})}/>

                <h1 className='Prefered-first-name mt-3'>Personal Email</h1>
               <p className='label-text'>Use an existing address that's not associated with your company. This team member will use 
                this email to sign in to MyBizWhiz and receive certain personal info.
               </p>
                <TextInput id="inputStyle2" value={data.pemail} placeholder='Enter Personal Email' onChange={(e)=>Setdata({...data,pemail:e.target.value})}/>

                <h1 className='Prefered-first-name mt-3 pb-2'>Country</h1>
                <Select placeholder="Select Country" id="inputStyle2" value={data.Country|| ''} data={['India', 'United States', 'United Kingdom']} onChange={(selectedOption) => Setdata({ ...data, Country: selectedOption||'' })}/>              
                <h1 className='Prefered-first-name pt-3 pb-3'>Worker type</h1>  
                 <div className='worker-type-container'>
                
                <div className='rodio-btn-container'>
                  <Radio value="Employee" id="radobtn" className="mt-1 mr-2" name="label" onChange={e=>Setdata({...data,worker:e.target.value})} checked={data.worker==="Employee"} />
                 <div className='labels-container'>
                    <label htmlFor='radobtn' className='label-one'>Employee</label>
                    <label htmlFor='radobtn' className='label-two'>Worker paid on hourly or salaried wage 
                    with rights and benfits received through employeement.</label>
                 </div>
                 </div>
                 <div className='rodio-btn-container'>
                  <Radio value="Employee" id="radobtn1" className="mt-1 mr-2" name="label" onChange={e=>Setdata({...data,worker:e.target.value})} checked={data.worker==="Employee"} />
                 <div className='labels-container'>
                    <label htmlFor='radobtn1' className='label-one'>Individual Contractor</label>
                    <label htmlFor='radobtn1' className='label-two'>Indepedent Professional engaged under contract for a specific project or projects,usually on a short term basis.</label>
                 </div>
                 </div>


                 <div className='rodio-btn-container'>
                  <Radio value="Employee" id="radobtn2" className="mt-1 mr-2" name="label" onChange={e=>Setdata({...data,worker:e.target.value})} checked={data.worker==="Employee"} />
                 <div className='labels-container'>
                    <label htmlFor='radobtn2' className='label-one'>Business Contractor</label>
                    <label htmlFor='radobtn2' className='label-two'>Indepedent Professional working on behalf of a business.</label>
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
              <h1 className='pb-4 main-heading'>Tell us about Prefered {data.fname}'s role</h1>
              
              <h1 className='Prefered-first-name mt-3 pb-2'>Where will {data.fname} work ?</h1>
              <p className='last-name-style label-text'>Which location to select and learn about thier potential impacts on your business.</p>
              <Select placeholder="Select Work" id="inputStyle2" data={['Work From Home', 'Work From Office', 'Hybrid']} value={data.work} onChange={(selectedOption) => Setdata({ ...data, work: selectedOption || '' })} />              
                <h1 className='Prefered-first-name mt-3 pb-2'>Work Location</h1>
                <p className='last-name-style label-text'>If this employee work from home,tell us the state where they work and live</p>
                <Select placeholder="Select Location" id="inputStyle2" data={['Visakhapatnam,IN', 'Hyderabad,IN', 'Chicago,US']} value={data.location} onChange={(selectedOption) => Setdata({ ...data, location: selectedOption || '' })} />     

                <h1 className='Prefered-first-name mt-3 pb-2'>Job Title</h1>
               <p className='last-name-style label-text'>Choose from your existing set of jobs or enter a new one.</p>
               {/* <TextInput id='inputStyle2' placeholder='Enter Job Title' className='w-100' value={data.jobtitle || ''} onChange={(e)=>Setdata({...data,jobtitle:e.target.value})} /> */}
               <Select
  id="inputStyle2"
  placeholder="Select Job Title"
  data={jobtitle.map((x, index) => ({
    label: x.designationName,
    value: x.designationName,
    key: x.designationId
  }))}
  onChange={(selectedOption) => {
    // Extract the label from the selected option
    const selectedLabel = selectedOption;
    console.log(selectedLabel);

    // Now, you can set the selected label to your data state
    Setdata({ ...data, jobtitle: selectedLabel });
  }}
/>




               <h1 className='Prefered-first-name mt-3'>Start Date</h1>
               <p className='last-name-style label-text'>Your employee's first day of work at your company.</p>
               
                <DatePicker placeholder="Pick date" id="inputStyle2" className='w-100' value={data.jdate} onChange={(selectedDate: Date | null) => {
    if (selectedDate !== null) {
      const formattedDate = formatDate(selectedDate);
      console.log(formattedDate);
      Setdata({ ...data, jdate: formattedDate });
    }
  }}  />

                <h1 className='Prefered-first-name mt-3'>Department</h1>
                <TextInput id="inputStyle2" placeholder='Enter Department Name' value={data.deptid} onChange={(e)=>Setdata({...data,deptid:e.target.value})}/>
                <h1 className='Prefered-first-name mt-3 pb-2'>Manager</h1>
                <p className='last-name-style label-text'>Managers can approve hours and time off.Based on your settings.they may also be able to access or edit information about thier requests.</p>
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
              <h1 className='pb-4 main-heading'>How will {data.fname} be compansated ?</h1>
              
              <h1 className='Prefered-first-name mt-3 pb-2'>Employement Type</h1>
              <Select placeholder="Select Employement Type" id="inputStyle2" data={['Permanent', 'Contract']} value={data.empmode} onChange={(selectedOption) => Setdata({ ...data, empmode: selectedOption || '' })} />   

                <div className='Employement-type-section'>
                  <div className='middle-name'>
                <h1 className='Prefered-first-name mt-3 pb-2'>Amount</h1>
                <TextInput id="inputStyle3" placeholder='Enter Amount Value' className='mr-2 year-input' value={data.amount} onChange={e=>Setdata({...data,amount:e.target.value})}/>
                </div>
                <div className='per-year'>
                <h1 className='Prefered-first-name'>Per</h1>
                <Select id="inputStyle2" placeholder='Select Month/Year' data={['Month', 'Year']} value={data.per} onChange={(suggestedOption)=>Setdata({...data,per:suggestedOption || ''})}/>
                 
               
                </div>
                </div>

                <div className='d-flex flex-row workerBtn p-2'>
                 <Checkbox id='radobtn' className=' mr-2' name="label" value="Yes" onChange={e=>Setdata({...data,commission:e.target.value})}/>
                 <div>
                    <label htmlFor='radobtn' className='label-two ' ></label>
                    This employee will receive commissions or other types of additional compensation.
                 </div>
                 </div>
                <div className='Employement-status-section'>
               <h1 className='Prefered-first-name'>Employement Status</h1>
               <Select id = 'inputStyle2' placeholder = 'Select Employment Status' data={['Active', 'Inactive']} value={data.empstatus} onChange={(suggestedOption)=>Setdata({...data,empstatus:suggestedOption || ''})}/>
                
                
                </div>
                <div className='Employement-status-section'>
                <h1 className='Prefered-first-name mt-3 pb-2'>Does {data.fname} have a special tax exemption status? (This is not common.)</h1>
                <p className='last-name-style label-text'>Certain types of employees are exempt from taxes, such as non-resident aliens (visa-holders). members of clergy or religioud holders,news papers,vendors,family employees,owners and coporate officers.</p>
                <Select id = 'inputStyle2' placeholder='Select Tax' data = {['Yes', 'No']} value={data.tax} onChange={(suggestedOption)=>Setdata({...data,tax:suggestedOption || ''})}/>
                 
                  
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
            <p>{data.fname || '\u00A0'}</p>
            <hr/>
            <h1 className='Prefered-first-name mt-3  pb-2'>Middle Initial</h1>
            <p>{data.mname || '\u00A0'}</p>
            <hr/>
            <h1 className='Prefered-first-name mt-3   pb-2'>Last Name</h1>
            <p>{data.lname || '\u00A0'}</p>
            <hr/>
            <h1 className='Prefered-first-name mt-3   pb-2'>Prefered First Name</h1>
            <p>{data.pfname || '\u00A0'}</p>
            <hr/>
            <h1 className='Prefered-first-name mt-3  pb-2'>Personal Email</h1>
            <p>{data.pemail || '\u00A0'}</p>
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
            <p>{data.jobtitle || '\u00A0'}</p>
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
            <p>{data.empmode || '\u00A0'}</p>
            <hr/>
            <h1 className='Prefered-first-name mt-3 pb-2'>Amount </h1>
            <p>{data.amount || '\u00A0'} </p>
            <hr/>
            <h1 className='Prefered-first-name mt-3 pb-2'> Per</h1>
            <p>{data.per || '\u00A0'} </p>
            <h1 className='Prefered-first-name mt-3 pb-2'>Employement Status</h1>
            <p>{data.empstatus || '\u00A0'}</p>
            <hr/>
            <h1 className='Prefered-first-name mt-3 pb-2'>Does have a special tax exemption status?</h1>
            <p>{data.tax || '\u00A0'}</p>
            </div>
            </Card>
        
      </Container>
    </Container>
      <Container>
          <div className='biz-whiz'>
          <Card shadow="sm"  radius="md" withBorder>
            <div className='p-lg'>
           <h1 className='Prefered-first-name mt-3 pb-2'>{data.fname}'s Start Date</h1>
      <label className='label-text'>{data.jdate}</label>
      <p>MyBizWhiz onboarding gets {data.fname} ready for day one on your team. You can always update {data.fname} start date on thier checklist.</p>
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

export default AddEmployee;