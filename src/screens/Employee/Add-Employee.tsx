import { useState } from 'react';
import { Stepper, Button, Group,Title , TextInput,Radio, PasswordInput, Code,Select,FileInput,NumberInput,Container,Card} from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import './Add-Employee.css'
import axios from 'axios'
import { e } from 'vitest/dist/index-5aad25c1';
function AddEmployee(){
  const [active, setActive] = useState(0);
  const [data,Setdata]=useState({
    fname:'',
    mname:'',
    lname:'',
    dob:'',
    gender:'',
    marital:'',
    photo:'',
    pemail:'',
    dname:'',
    empid:'',
    jdate:'',
    empmode:'',
    workmobile:'',
    workemail:'',
    financial:'',
    pfname:'',
    Country:'',
    worker:'',
    location:'',
    state:'',
    jobtitle:'',
    deptid:'',
    manager:'',
    amount:'',
    per:'',
    commision:'',
    empstatus:'',
    tax:''

  })

  const submitdata=(e:any)=>{
    e.preventDefault();
    console.log(data);
   
  }
  const nextStep = () =>
  setActive((current) => {
    return current < 3 ? current + 1 : current;
  });


const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
  return(

    <div className='container'>
      <div className='row'>
      <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
      <form >
    <Stepper active={active}>
      <Stepper.Step label="Personal Information">
        <Container>
          <div className='row'>
          <div className='col-12 col-md-12 col-lg-12 col-xl-12'>
          <div className='card'>
            <div className='card-body'>
              {/* <h1 className='pb-4 main-heading'></h1> */}
              <Title order={4} id="main-heading">Tell us who you'd like to add</Title>
              <div className='d-flex flex-row sub-container w-100'>

              <div className='w-100'>
              <TextInput
  placeholder='Enter First Name'
  label="First Name"
  id='customInputStyle'
  value={data.fname}
  onChange={(e) => Setdata({ ...data, fname: e.target.value })}
/>
              </div>

              <div className='mb-3 ml-3 w-100'>
                <TextInput placeholder='Enter Middle Initial' label="Middle Initial (optional)" id="customInputStyle" value={data.mname} onChange={(e)=>Setdata({...data,mname:e.target.value})}/>
               </div>
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
                 <div className='d-flex flex-column'>
                <div className='d-flex flex-row workerBtn p-2'>
                  <Radio value="Employee" id=" radobtn" className="mt-1 mr-2" name="label" onChange={e=>Setdata({...data,worker:e.target.value})} checked={data.worker==="Employee"} />
                 <div>
                    <label htmlFor='radobtn' className='label-one'>Employee</label><br/>
                    <label htmlFor='radobtn' className='label-two'>Worker paid on hourly or salaried wage 
                    with rights and benfits received through employeement.</label>
                 </div>
                 </div>
                  
                 <div className='d-flex flex-row workerBtn p-2'>
                  <Radio value="Individual Contractor" id="radobtn" className='mt-1 mr-2' name="label" onChange={e=>Setdata({...data,worker:e.target.value})} checked={data.worker==="Individual Contractor"}/>
                 <div>
                    <label htmlFor='radobtn1' className='label-one'>Individual contractor</label><br/>
                    <label htmlFor='radobtn1' className='label-two'>Indepdent Professional engaged under contract for a specific project or projects,usually on a short term basis.</label>
                 </div>
                 </div>
                 <div className='d-flex flex-row workerBtn p-2'>
                  <Radio value="Business Contractor" id="radobtn" className='mt-1 mr-2' name="label" onChange={e=>Setdata({...data,worker:e.target.value})} checked={data.worker==="Business Contractor"}/>
                 <div>
                    <label htmlFor='radobtn2' className='label-one'>Business contractor</label><br/>
                    <label htmlFor='radobtn2' className='label-two'>Indepdent Professional working on behalf of a Business.</label>
                 </div>
                 </div>
                 </div>
                 </div>
                </div>
                </div>
                </div>
                </Container>

      </Stepper.Step>

      <Stepper.Step label="Role Information">
        
      <div className='container'>
          <div className='row'>
          <div className='col-12 col-md-12 col-lg-12 col-xl-12'>
          <div className='card'>
            <div className='card-body'>
              <h1 className='pb-4 main-heading'>Tell us about Prefered {data.fname}'s role</h1>
              
              <h1 className='Prefered-first-name mt-3 pb-2'>Where will {data.fname} work ?</h1>
              <p className='last-name-style label-text'>Which location to select and learn about thier potential impacts on your business.</p>
              <Select placeholder="Select Location" id="inputStyle2" data={['Work From Home', 'Work From Office', 'Hybrid']} value={data.location} onChange={(selectedOption) => Setdata({ ...data, location: selectedOption || '' })} />              
                <h1 className='Prefered-first-name mt-3 pb-2'>Work State</h1>
                <p className='last-name-style label-text'>If this employee work from home,tell us the state where they work and live</p>
                <Select placeholder="Select Location" id="inputStyle2" data={['Visakhapatnam,IN', 'Hyderabad,IN', 'Chicago,US']} value={data.location} onChange={(selectedOption) => Setdata({ ...data, location: selectedOption || '' })} />     

                <h1 className='Prefered-first-name mt-3 pb-2'>Job Title</h1>
               <p className='last-name-style label-text'>Choose from your existing set of jobs or enter a new one.</p>
               <TextInput id='inputStyle2' placeholder='Enter Job Title' className='w-100' value={data.jobtitle || ''}/>

               <h1 className='Prefered-first-name mt-3'>Start Date</h1>
               <p className='last-name-style label-text'>Your employee's first day of work at your company.</p>
               
                <DatePicker placeholder="Pick date" id="inputStyle2" className='w-100'value={data.jdate ? new Date(data.jdate) : null} onChange={(selectedDate: Date | null) => {
    if (selectedDate !== null) {
      const formattedDate = formatDate(selectedDate);
      Setdata({ ...data, dob: formattedDate });
    }
  }}  />

                <h1 className='Prefered-first-name mt-3'>Department</h1>
                <TextInput id="inputStyle2" placeholder='Enter Department Name' value={data.deptid} onChange={(e)=>Setdata({...data,deptid:e.target.value})}/>
                <h1 className='Prefered-first-name mt-3 pb-2'>Manager</h1>
                <p className='last-name-style label-text'>Managers can approve hours and time off.Based on your settings.they may also be able to access or edit information about thier requests.</p>
                <TextInput id="inputStyle2" placeholder='Enter Manager Name' value={data.manager} onChange={e=>Setdata({...data,manager:e.target.value})} className='w-100'/>
                </div>
                </div>
                </div>
                </div>
                </div>
      </Stepper.Step>
      <Stepper.Step label="Compensation Information">
      <div className='container'>
          <div className='row'>
          <div className='col-12 col-md-12 col-lg-12 col-xl-12'>
          <div className='card'>
            <div className='card-body'>
              <h1 className='pb-4 main-heading'>How will {data.fname} be compansated ?</h1>
              
              <h1 className='Prefered-first-name mt-3 pb-2'>Employement Type</h1>
 
                <select className='input-style-2 w-100 mb-5' value={data.empmode} onChange={e=>Setdata({...data,empmode:e.target.value})}>
                  <option value='' disabled >Select Employement Type</option>
                   <option value="Permanent">Permanent</option>
                   <option value="Contract">Contract</option>
                </select>

                <div className='d-flex flex-row'>
                  <div>
                <h1 className='Prefered-first-name mt-3 pb-2'>Amount</h1>
                <input type='text' className='input-style-3 mr-2 year-input ' value={data.amount} onChange={e=>Setdata({...data,amount:e.target.value})} placeholder='Enter Amount' />
                </div>

                <div>
                <h1 className='Prefered-first-name mt-3 mr-2  pb-2'>Per</h1>
                <select className='input-style-2 w-100 ml-2  mb-2' value={data.per} onChange={e=>Setdata({...data,per:e.target.value})}>
                  <option value="" disabled  >Select Month/Year</option>
                   <option value="Month">Month</option>
                   <option value="Year">Year</option>
                </select>
                </div>
                </div>

                <div className='d-flex flex-row workerBtn p-2'>
                 <input type="checkbox" id='radobtn' className=' mr-2' name="label" value="Yes" onChange={e=>Setdata({...data,commision:e.target.value})}/>
                 <div>
                    <label htmlFor='radobtn' className='label-two ' >This employee will receive commissions or other types of additional compensation.</label>
                 </div>
                 </div>

               <h1 className='Prefered-first-name mt-3 pb-2'>Employement Status</h1>
               <select className='input-style-2 w-100 mb-5' value={data.empstatus} onChange={e=>Setdata({...data,empstatus:e.target.value})}>
                <option value=''  disabled>Select Employement Status</option>
                   <option value="Active">Active</option>
                   <option value="Inactive">Inactive</option>
                </select>

                
                <h1 className='Prefered-first-name mt-3 pb-2'>Does {data.fname} have a special tax exemption status? (This is not common.)</h1>
                <p className='last-name-style label-text'>Certain types of employees are exempt from taxes, such as non-resident aliens (visa-holders). members of clergy or religioud holders,news papers,vendors,family employees,owners and coporate officers.</p>
                <select className='input-style-2 w-100 mb-5' value={data.tax} onChange={e=>Setdata({...data,tax:e.target.value})}>
                  <option value='' disabled >Select Special Excemption Tax</option>
                   <option value="Yes">Yes</option>
                   <option value="No">No</option>
                </select>    
                </div>
                </div>
                </div>
                </div>
                </div>  
                </Stepper.Step>

      <Stepper.Completed>
      <h1 className='pb-4 main-heading'>Review {data.fname}'s Information</h1>
      <div className='container'>
        <div className='row'>
        <div className='col-12 col-md-12 col-lg-12 col-xl-12 p-4'>
          <div className='card'>
            <div className='card-body'>
            <div className='d-flex flex-row justify-content-between'>
            <h1 className='Prefered-first-name mt-3  pb-2'>Personal</h1>
           <h1 className='Prefered-first-name mt-3  pb-2 '>Edit</h1>
           </div>
            <h1 className='Prefered-first-name mt-3  pb-2'>First Name</h1>
            <p>{data.fname}</p>
            <hr/>
            <h1 className='Prefered-first-name mt-3  pb-2'>Middle Initial</h1>
            <p>{data.mname}</p>
            <hr/>
            <h1 className='Prefered-first-name mt-3   pb-2'>Last Name</h1>
            <p>{data.lname}</p>
            <hr/>
            <h1 className='Prefered-first-name mt-3   pb-2'>Prefered First Name</h1>
            <p>{data.pfname}</p>
            <hr/>
            <h1 className='Prefered-first-name mt-3  pb-2'>Personal Email</h1>
            <p>{data.pemail}</p>
            <hr/>
            <h1 className='Prefered-first-name mt-3   pb-2'>Country</h1>
            <p>{data.Country}</p>
            <hr/>
            <h1 className='Prefered-first-name mt-3  pb-2'>Worker Type</h1>
            <p>{data.worker}</p>
            <hr/>
            </div>
            </div>
          </div>
        </div><br></br>

        <div className='container'>
          <div className='row'>

          <div className='col-12 col-md-12 col-lg-12 col-xl-12'>
          <div className='card'>
            <div className='card-body'>
            <div className='d-flex flex-row justify-content-between'>
            <h1 className='Prefered-first-name mt-3  pb-2'>Role</h1>
            <h1 className='Prefered-first-name mt-3  pb-2 '>Edit</h1>
            </div>
            <h1 className='Prefered-first-name mt-3  pb-2'>Work Location</h1>
            <p>{data.location}</p>
            <hr/>
            <h1 className='Prefered-first-name mt-3  pb-2'>Work State</h1>
            <p>{data.state}</p>
            <hr/>
            <h1 className='Prefered-first-name mt-3  pb-2'>Job Title</h1>
            <p>{data.jobtitle}</p>
            <hr/>
            <h1 className='Prefered-first-name mt-3  pb-2'>Start Date</h1>
            <p>{data.jdate}</p>
            <hr/>
            <h1 className='Prefered-first-name mt-3  pb-2'>Department</h1>
            <p>{data.deptid}</p>
            <hr/>
            <h1 className='Prefered-first-name mt-3  pb-2'>Manager</h1>
            <p>{data.manager}</p>

            </div>
          </div>
          </div>
          </div>
        </div><br></br>
        <div className='container'>
          <div className='row'>
          <div className='col-12 col-md-12 col-lg-12 col-xl-12'>
          <div className='card'>
            <div className='card-body '>
            <div className='d-flex flex-row justify-content-between'>
            <h1 className='Prefered-first-name mt-3 pb-2'>Compensation</h1>
            <h1 className='Prefered-first-name mt-3 pb-2 '>Edit</h1>
            </div>
            <h1 className='Prefered-first-name mt-3 pb-2'>Employement Type</h1>
            <p>{data.empmode}</p>
            <hr/>
            <h1 className='Prefered-first-name mt-3 pb-2'>Amount </h1>
            <p>{data.amount} {data.per}</p>
            <hr/>
            <h1 className='Prefered-first-name mt-3 pb-2'>Employement Status</h1>
            <p>{data.empstatus}</p>
            <hr/>
            <h1 className='Prefered-first-name mt-3 pb-2'>Does have a special tax exemption status?</h1>
            <p>{data.tax}</p>
            </div>
          </div>
          </div>
        </div>
      </div>
      </div>
      <div className='container mt-3'>
          <div className='row'>
          <div className='col-12 col-md-12 col-lg-12 col-xl-12 p-4'>
          <div className='card'>
            <div className='card-body'>
      <h1 className='Prefered-first-name mt-3 pb-2'>{data.fname}'s Start Date</h1>
      <label className='label-text'>{data.jdate}</label>
      <p>MyBizWhiz onboarding gets {data.fname} ready for day one on your team. You can always update {data.fname} start date on thier checklist.</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </Stepper.Completed>
    </Stepper>
    </form>
    </div>

    <Group className="p-4" style={{ justifyContent: 'flex-end'}} mt="xl">
      {active !== 0 && (
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