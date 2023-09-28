import { useState } from 'react';
import { Stepper, Button, Group, TextInput, PasswordInput, Code,Select,FileInput,NumberInput   } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import './Add-Employee.css'
import axios from 'axios'
function AddEmployee(){
  const [active, setActive] = useState(0);
  const [data,Setdata]=useState({
    fname:'',
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
    financial:''

  })
  const submitdata=(e:any)=>{
    e.preventDefault();
    console.log(data);
    const technicalarea=async()=>{
      try{
        const technicalresponse = await axios.get('https://localhost:7190/api/TechnicalArea/GetTechnicalData');
        const practiceresponse = await axios.get('https://localhost:7190/api/PracticeArea/GetAllAreas');
        const aspnetuseresponse=await axios.get('https://localhost:7190/api/AspnetUser/GetAllUsers');
const designationresponse=await axios.get('https://localhost:7190/api/Designation/GetAllDesignation');
const locationresponse = await axios.get('https://localhost:7190/api/Location/GetAllLocations');
const companyresponse = await axios.get('https://localhost:7190/api/Company/GetAllCompany');
{/* september 25,2023 converting to yyyt-mm-ddT00:00:00*/}
const originldate=new Date(data.jdate);
originldate.setDate(originldate.getDate()+1);
const Joiningdate=originldate.toISOString().slice(0, 10) + 'T00:00:00';
const dobdate=new Date(data.dob);
dobdate.setDate(dobdate.getDate()+1);
const dateofbirth=dobdate.toISOString().slice(0,10) +'T00:00:00';
const financial=new Date(data.financial);
financial.setDate(financial.getDate()+1);
const finance=financial.toISOString().slice(0,10) +'T00:00:00';
        var obj={
          "userId": aspnetuseresponse.data[0].userId,
          "empID": data.empid,
          "firstName": data.fname,
          "middleName": "",
          "lastName": data.lname,
          "designationId": designationresponse.data[0].designationId,
          "departmentId": 0,
          "joiningDate": Joiningdate,
          "currentLocationId": locationresponse.data[0].locationId,
          "baseLocationId": locationresponse.data[0].locationId,
          "gender": data.gender,
          "maritalStatus": data.marital,
          "empStatus": "active",
          "empMode": data.empmode,
          "reportingManagerId": aspnetuseresponse.data[0].userId,
          "companyId": companyresponse.data[0].id,
          "createdBy": aspnetuseresponse.data[0].userId,
          "modifiedBy": aspnetuseresponse.data[0].userId,
          "isActive": true,
          "photo": "1",
          "personalEmail": data.pemail,
          "dateofBirth": dateofbirth,
          "displayName": data.dname,
          "counsellorId": aspnetuseresponse.data[0].userId,
          "workMobile": data.workmobile,
          "workEmail": data.workemail,
          "practiceAreaId": practiceresponse.data[0].practiceId,
          "technicalAreaId": technicalresponse.data[0].technicalAreaId,
          "excludeTmslock": true,
          "financialAppraisalCycle": finance,
          "priorExperience": 0
        }
        console.log(obj);
        let json = JSON.stringify(obj);
        console.log(json)

        const insertemployee=await axios.post('https://localhost:7190/api/Employee/AddEmployees',JSON.parse(json));
        console.log(insertemployee)
        
      }catch(err){
        console.error(err);
      }
    }
    technicalarea();
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
      <Stepper.Step label="First step" description="Tell us who you'd like to add">
         
              <h1 className='pb-4 main-heading'>Tell us who you'd like to add</h1>
              <div className='d-flex flex-row sub-container w-100'>

              <div className='w-100'>
                <p>First Name</p>
                <input type="text"  className='input-style w-100'/>
              </div>

              <div className='mb-3 ml-3 w-100'>
                <p className='m-0'>Middle Name (optional)</p>
                <input type="text" className='input-style w-100'/>
               </div>
                </div>

               <p className='last-name-style'>Last Name</p>
                <input type='text' className='input-style-2 w-100'/>

               <h1 className='Prefered-first-name mt-3'>Prefered first name(if any)</h1>
               <p>Gusto will use this name to refer to this person in communications 
                where their legal first name is required (offer letter, onboarding emails, org etc)</p>
                <input type='text' className='input-style-2 w-100'/> 

                <h1 className='Prefered-first-name mt-3'>Personal Email</h1>
               <p>Use an existing address that's not associated with your company. This team member will use 
                this email to sign in to Gusto and receive certain personal info.
               </p>
                <input type='text' className='input-style-2 w-100'/>

                <h1 className='Prefered-first-name mt-3 pb-2'>country</h1>
                <select className='input-style-2 w-100 mb-5'>
                   <option value="firstName">India</option>
                   <option value="lastName">United States</option>
                </select>
                <h1 className='Prefered-first-name pt-3 pb-3'>Worker type</h1>  
                 <div className='d-flex flex-column'>
                  
                <div className='d-flex flex-row workerBtn p-2'>
                 <input type="radio" id='radobtn' className='mt-1 mr-2' name="label"/>
                 <div>
                    <label htmlFor='radobtn' className='label-one'>Employee</label><br/>
                    <label htmlFor='radobtn' className='label-two'>Worker paid on hourly or salaried wage 
                    with rights and benfits received through employeement.</label>
                 </div>
                 </div>
                  
                 <div className='d-flex flex-row workerBtn p-2'>
                 <input type="radio" id='radobtn' className='mt-1 mr-2' name="label"/>
                 <div>
                    <label htmlFor='radobtn' className='label-one'>Individual contractor</label><br/>
                    <label htmlFor='radobtn' className='label-two'>Indepdent Professional engaged under contract for a specific project or projects,usually on a short term basis.</label>
                 </div>
                 </div>
                 <div className='d-flex flex-row workerBtn p-2'>
                 <input type="radio" id='radobtn' className='mt-1 mr-2' name="label"/>
                 <div>
                    <label htmlFor='radobtn' className='label-one'>Business contractor</label><br/>
                    <label htmlFor='radobtn' className='label-two'>Indepdent Professional working on behalf of a Business.</label>
                 </div>
                 </div>
                 </div>
        

      </Stepper.Step>

      <Stepper.Step label="Second step" description="Tell us about Prefered Name's role" >
              <h1 className='pb-4 main-heading'>Tell us about Prefered Name's role</h1>
              
              <h1 className='Prefered-first-name mt-3 pb-2'>Where will Selva work ?</h1>
              <p className='last-name-style'>Which location to select and learn about thier potential impacts on your business.</p>
                <select className='input-style-2 w-100 mb-5'>
                   <option value="work from home">Work from home</option>
                   <option value="lastName">United States</option>
                </select>


                <h1 className='Prefered-first-name mt-3 pb-2'>Work State</h1>
                <p className='last-name-style'>If this employee work from home,tell us the state where they work and live</p>
                <select className='input-style-2 w-100 mb-5'>
                  <option value="">Select State</option>
                   <option value="firstName">India</option>
                   <option value="lastName">United States</option>
                </select>

                <h1 className='Prefered-first-name mt-3 pb-2'>Job title</h1>
               <p className='last-name-style'>Choose from your existing set of jobs or enter a new one.</p>
                <input type='text' className='input-style-2 w-100'/>

               <h1 className='Prefered-first-name mt-3'>Start date</h1>
               <p className='last-name-style'>Your employee's first day of work at your company.</p>
                <input type='date' className='input-style-2 w-100'/> 

                <h1 className='Prefered-first-name mt-3'>Department</h1>
                <input type='text' className='input-style-2 w-100'/>

                <h1 className='Prefered-first-name mt-3 pb-2'>Manager</h1>
                <p className='last-name-style'>Managers can approve hours and time off.Based on your settings.they may also be able to access or edit information about thier requests.</p>
                <input type='text' className='input-style-2 w-100'/> 
      </Stepper.Step>
      <Stepper.Step label="Third step" description="Tell us about Prefered Name's role" >
              <h1 className='pb-4 main-heading'>How will Selva be compansated ?</h1>
              
              <h1 className='Prefered-first-name mt-3 pb-2'>Employeement type</h1>
 
                <select className='input-style-2 w-100 mb-5'>
                   <option value="Salary/No overtime">Salary/No overtime</option>
                   <option value="lastName">United States</option>
                </select>

                <div className='d-flex flex-row'>
                  <div>
                <h1 className='Prefered-first-name mt-3 pb-2'>Amount</h1>
                <input type='text' className='input-style-3 mr-2 year-input ' />
                </div>

                <div>
                <h1 className='Prefered-first-name mt-3 mr-2  pb-2'>Per</h1>
                <select className='input-style-2 w-100 ml-2  mb-2'>
                  <option value="">Select Month/Year</option>
                   <option value="Month">Month</option>
                   <option value="Year">Year</option>
                </select>
                </div>
                </div>

                <div className='d-flex flex-row workerBtn p-2'>
                 <input type="checkbox" id='radobtn' className=' mr-2' name="label"/>
                 <div>
                    <label htmlFor='radobtn' className='label-two'>This employee will receive commissions or other types of additional compensation.</label>
                 </div>
                 </div>

               <h1 className='Prefered-first-name mt-3 pb-2'>Employement Status</h1>
               <select className='input-style-2 w-100 mb-5'>
                   <option value="Salary/No overtime">Salary/No overtime</option>
                   <option value="lastName">United States</option>
                </select>

                
                <h1 className='Prefered-first-name mt-3 pb-2'>Does Salva have a special tax exemption status?(This is not common.)</h1>
                <p className='last-name-style'>Certain types of employees are exempt from taxes, such as non-resident aliens (visa-holders). members of clergy or religioud holders,news papers,vendors,family employees,owners and coporate officers.</p>
                <select className='input-style-2 w-100 mb-5'>
                   <option value="Salary/No overtime">Salary/No overtime</option>
                   <option value="lastName">United States</option>
                </select>      
                </Stepper.Step>

      <Stepper.Completed>
     
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
      {active !== 3 && <Button variant='default' onClick={nextStep}>Save and Continue</Button>}
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
