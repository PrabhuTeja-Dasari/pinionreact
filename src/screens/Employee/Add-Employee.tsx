import { useState } from 'react';
import { Stepper, Button, Group, TextInput, PasswordInput, Code,Select,FileInput,NumberInput   } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import './Add-Employee.css'
import axios from 'axios'
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
    <div className="card">
      <div className="card-body">
      <div className='d-flex flex-row main-container'>

      <form >
    <Stepper active={active}>
      <Stepper.Step label="Personal Information">
         
              <h1 className='pb-4 main-heading'>Tell us who you'd like to add</h1>
              <div className='d-flex flex-row sub-container w-100'>

              <div className='w-100'>
                <p>First Name</p>
                <input type="text"  className='input-style w-100' placeholder='Enter First Name' value={data.fname} onChange={e=>Setdata({...data,fname:e.target.value})}/>
              </div>

              <div className='mb-3 ml-3 w-100'>
                <p className='m-0'>Middle Initial (optional)</p>
                <input type="text" placeholder='Enter Middle Initial' className='input-style w-100' value={data.mname} onChange={e=>Setdata({...data,mname:e.target.value})}/>
               </div>
                </div>

               <p className='last-name-style'>Last Name</p>
                <input type='text' className='input-style-2 w-100' placeholder='Enter Last Name' value={data.lname} onChange={e=>Setdata({...data,lname:e.target.value})}/>

               <h1 className='Prefered-first-name mt-3'>Prefered first name(if any)</h1>
               <p className='label-text'>MyBizWhiz will use this name to refer to this person in communications 
                where their legal first name is required (offer letter, onboarding emails, org etc)</p>
                <input type='text' className='input-style-2 w-100' placeholder='Enter Prefered First Name' value={data.pfname} onChange={e=>Setdata({...data,pfname:e.target.value})}/> 

                <h1 className='Prefered-first-name mt-3'>Personal Email</h1>
               <p className='label-text'>Use an existing address that's not associated with your company. This team member will use 
                this email to sign in to MyBizWhiz and receive certain personal info.
               </p>
                <input type='text' className='input-style-2 w-100' placeholder='Enter Personal Email' value={data.pemail} onChange={e=>Setdata({...data,pemail:e.target.value})}/>

                <h1 className='Prefered-first-name mt-3 pb-2'>Country</h1>
                <select className='input-style-2 w-100 mb-5' value={data.Country} onChange={e=>Setdata({...data,Country:e.target.value})}>
                  <option value=''>Select-</option>
                   <option value="firstName">India</option>
                   <option value="lastName">United States</option>
                   <option value="">United Kingdom</option>
                </select>
                <h1 className='Prefered-first-name pt-3 pb-3'>Worker type</h1>  
                 <div className='d-flex flex-column'>
                  
                <div className='d-flex flex-row workerBtn p-2'>
                <input type="radio" id='radobtn' className='mt-1 mr-2' name="label" value="Employee" onChange={e => Setdata({...data, worker: e.target.value})} />
                 <div>
                    <label htmlFor='radobtn' className='label-one'>Employee</label><br/>
                    <label htmlFor='radobtn' className='label-two'>Worker paid on hourly or salaried wage 
                    with rights and benfits received through employeement.</label>
                 </div>
                 </div>
                  
                 <div className='d-flex flex-row workerBtn p-2'>
                 <input type="radio" id='radobtn' className='mt-1 mr-2' name="label" value="Individual Contractor" onChange={e=>Setdata({...data,worker:e.target.value})}/>
                 <div>
                    <label htmlFor='radobtn' className='label-one'>Individual contractor</label><br/>
                    <label htmlFor='radobtn' className='label-two'>Indepdent Professional engaged under contract for a specific project or projects,usually on a short term basis.</label>
                 </div>
                 </div>
                 <div className='d-flex flex-row workerBtn p-2'>
                 <input type="radio" id='radobtn' className='mt-1 mr-2' name="label" value="Business Contractor" onChange={e=>Setdata({...data,worker:e.target.value})}/>
                 <div>
                    <label htmlFor='radobtn' className='label-one'>Business contractor</label><br/>
                    <label htmlFor='radobtn' className='label-two'>Indepdent Professional working on behalf of a Business.</label>
                 </div>
                 </div>
                 </div>
        

      </Stepper.Step>

      <Stepper.Step label="Role Information">
              <h1 className='pb-4 main-heading'>Tell us about Prefered {data.fname}'s role</h1>
              
              <h1 className='Prefered-first-name mt-3 pb-2'>Where will {data.fname} work ?</h1>
              <p className='last-name-style label-text'>Which location to select and learn about thier potential impacts on your business.</p>
                <select className='input-style-2 w-100 mb-5' value={data.location} onChange={e=>Setdata({...data,location:e.target.value})}>
                <option value="" disabled >Select-</option>
                   <option value="work from home">Work from home</option>
                   <option value="Work from office">Work from office</option>
                   <option value="hybrid">Hybrid</option>
                </select>


                <h1 className='Prefered-first-name mt-3 pb-2'>Work State</h1>
                <p className='last-name-style label-text'>If this employee work from home,tell us the state where they work and live</p>
                <select className='input-style-2 w-100 mb-5' onChange={e=>Setdata({...data,state:e.target.value})} value={data.state}>
                   <option value="" disabled >Select State-</option> 
                   <option value="India">India</option>
                   <option value="United States">United States</option>
                </select>

                <h1 className='Prefered-first-name mt-3 pb-2'>Job Title</h1>
               <p className='last-name-style label-text'>Choose from your existing set of jobs or enter a new one.</p>
                <input type='text' className='input-style-2 w-100' placeholder='Enter Job Title' value={data.jobtitle} onChange={e=>Setdata({...data,jobtitle:e.target.value})}/>

               <h1 className='Prefered-first-name mt-3'>Start Date</h1>
               <p className='last-name-style label-text'>Your employee's first day of work at your company.</p>
                <input type='date' className='input-style-2 w-100' value={data.jdate} onChange={e=>Setdata({...data,jdate:e.target.value})}/> 

                <h1 className='Prefered-first-name mt-3'>Department</h1>
                <input type='text' className='input-style-2 w-100' placeholder='Enter Department' value={data.deptid} onChange={e=>Setdata({...data,deptid:e.target.value})}/>

                <h1 className='Prefered-first-name mt-3 pb-2'>Manager</h1>
                <p className='last-name-style label-text'>Managers can approve hours and time off.Based on your settings.they may also be able to access or edit information about thier requests.</p>
                <input type='text' className='input-style-2 w-100' placeholder='Enter Manager Name' value={data.manager} onChange={e=>Setdata({...data,manager:e.target.value})}/> 
      </Stepper.Step>
      <Stepper.Step label="Compensation Information">
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
                </Stepper.Step>

      <Stepper.Completed>
      <h1 className='pb-4 main-heading'>Review {data.fname}'s Information</h1>
      <div className='col-md-12'>
        <div className='col-md-4'>
          <div className='card'>
            <div className='card-body'>
            <h1 className='Prefered-first-name mt-3 mr-2  pb-2'>Personal</h1><br></br>
           
            <h1 className='Prefered-first-name mt-3 mr-2  pb-2'>First Name</h1>
            <p>23</p>
            <hr/>
            <h1 className='Prefered-first-name mt-3 mr-2  pb-2'>Middle Initial</h1>
            <p>56</p>
            <hr/>
            <h1 className='Prefered-first-name mt-3 mr-2  pb-2'>Last Name</h1>
            <p>56</p>
            <hr/>
            <h1 className='Prefered-first-name mt-3 mr-2  pb-2'>Prefered First Name</h1>
            <p>56</p>
            <hr/>
            <h1 className='Prefered-first-name mt-3 mr-2  pb-2'>Personal Email</h1>
            <p>56</p>
            <hr/>
            <h1 className='Prefered-first-name mt-3 mr-2  pb-2'>Country</h1>
            <p>56</p>
            <hr/>
            <h1 className='Prefered-first-name mt-3 mr-2  pb-2'>Worker Type</h1>
            <p>56</p>
            <hr/>
            </div>
          </div>
        </div><br></br>

        <div className='col-md-4'>
          <div className='card '>
            <div className='card-body '>
            <h1 className='Prefered-first-name mt-3 mr-2  pb-2'>Role</h1><br></br>
            <h1 className='Prefered-first-name mt-3 mr-2  pb-2'>Work Location</h1>
            <p>23</p>
            <hr/>
            <h1 className='Prefered-first-name mt-3 mr-2  pb-2'>Work State</h1>
            <p>23</p>
            <hr/>
            <h1 className='Prefered-first-name mt-3 mr-2  pb-2'>Job Title</h1>
            <p>23</p>
            <hr/>
            <h1 className='Prefered-first-name mt-3 mr-2  pb-2'>Start Date</h1>
            <p>23</p>
            <hr/>
            <h1 className='Prefered-first-name mt-3 mr-2  pb-2'>Department</h1>
            <p>23</p>
            <hr/>
            <h1 className='Prefered-first-name mt-3 mr-2  pb-2'>Manager</h1>
            <p>23</p>

            </div>
          </div>
        </div><br></br>
        <div className='col-md-4'>
          <div className='card '>
            <div className='card-body '>
            <h1 className='Prefered-first-name mt-3 mr-2  pb-2'>Compensation</h1><br></br>
            <h1 className='Prefered-first-name mt-3 mr-2  pb-2'>Employement Type</h1>
            <p>23</p>
            <hr/>
            <h1 className='Prefered-first-name mt-3 mr-2  pb-2'>Amount </h1>
            <p>23</p>
            <hr/>
            <h1 className='Prefered-first-name mt-3 mr-2  pb-2'>Employement Status</h1>
            <p>23</p>
            <hr/>
            <h1 className='Prefered-first-name mt-3 mr-2  pb-2'>Does have a special tax exemption status?</h1>
            <p>23</p>
            </div>
          </div>
        </div>
      </div>
      <h1 className='Prefered-first-name mt-3 mr-2  pb-2'>{data.fname}'s Start Date</h1>
      <label className='label-text'>{data.jdate}</label>
      MyBizWhiz onboarding gets {data.fname} ready for day one on your team. You can always update {data.fname} start date on thier checklist.
      </Stepper.Completed>
    </Stepper>
    </form>
    </div>

    <Group style={{ justifyContent: 'flex-end'}} mt="xl">
      {active !== 0 && (
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
      )}
      {active !== 3 && <Button variant='default' onClick={nextStep}>Save and Continue</Button>
      }
      {active>2 && <Button variant='default' onClick={submitdata}>Submit</Button>}
    </Group>


       
      </div>
    </div>
  )
}
function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return date.toLocaleDateString(undefined, options);
}
export default AddEmployee;