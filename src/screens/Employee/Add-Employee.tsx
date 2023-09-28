import { useState } from 'react';
import { Stepper, Button, Group, TextInput, PasswordInput, Code,Select,FileInput,NumberInput   } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
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
      <form >
    <Stepper active={active}>
      <Stepper.Step label="First step" description="Tell us who you'd like to add">
      </Stepper.Step>

      <Stepper.Step label="Second step" description="Tell us about Prefered Name's role" >
     
      </Stepper.Step>

      <Stepper.Step label="Third step" description="How will Name be compensated ?">
        
        </Stepper.Step> 

      <Stepper.Completed>
     
      </Stepper.Completed>
    </Stepper>
    </form>

    <Group style={{ justifyContent: 'flex-end'}} mt="xl">
      {active !== 0 && (
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
      )}
      {active !== 3 && <Button variant='default' onClick={nextStep}>Next step</Button>}
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