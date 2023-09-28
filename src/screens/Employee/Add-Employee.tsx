import { useState } from 'react';
import { Stepper, Button, Group, TextInput, PasswordInput, Code,Select,FileInput,NumberInput   } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import axios from 'axios'
function AddEmployee() {
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
    return current < 2 ? current + 1 : current;
  });

const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

return (
  <>
  <form >
    <Stepper active={active}>
      <Stepper.Step label="First step" description="Office Information">
      <TextInput label="Employee Id" variant='filled' placeholder="Employee Id" onChange={(e:any) => Setdata({ ...data, empid: e.target.value })} required  />
        <DatePicker placeholder="Joining Date" label="Joining Date"onChange={(selectedDate: Date | null) => {
    if (selectedDate !== null) {
      const formattedDate = formatDate(selectedDate);
      Setdata({ ...data, jdate: formattedDate });
    }
  }}   required/>
        <Select label="Employee Mode" placeholder="Select Employee Mode" data={['Permanent', 'Contract']} onChange={(value: string | null) => {
    if (value !== null) {
      Setdata({ ...data, empmode: value });
    }
  }} required/>
        <TextInput label="Work Mobile" placeholder="Enter Work Mobile" onChange={(e) => Setdata({ ...data, workmobile: e.target.value })} required/>
        <TextInput label="Work Email" placeholder="Enter Work Email" onChange={(e:any) => Setdata({ ...data, workemail: e.target.value })} required />
        <DatePicker placeholder="Financial Appraisal Cycle" label="Financial Appraisal Cycle" onChange={(selectedDate: Date | null) => {
    if (selectedDate !== null) {
      const formattedDate = formatDate(selectedDate);
      Setdata({ ...data, financial: formattedDate });
    }
  }}  required />

      </Stepper.Step>

      <Stepper.Step label="Second step" description="Personal Information" >
      <TextInput label="First Name" placeholder="Enter First Name"  onChange={(e) => Setdata({ ...data, fname: e.target.value })} required/>

        <TextInput label="Last Name" placeholder="Enter Last Name"  onChange={(e) => Setdata({ ...data, lname: e.target.value })} required/>
        <DatePicker placeholder="Date Of Birth" label="Date Of Birth" onChange={(selectedDate: Date | null) => {
    if (selectedDate !== null) {
      const formattedDate = formatDate(selectedDate);
      Setdata({ ...data, dob: formattedDate });
    }
  }}  required />
        <Select
  label="Gender"
  placeholder="Select-"
  data={['Male', 'Female', 'Other']} 
  onChange={(value: string | null) => {
    if (value !== null) {
      Setdata({ ...data, gender: value });
    }
  }}
  required
/>
<Select label="Martial Status" placeholder="Select-" name="marital"  data={['Married', 'Single', 'Divorced', 'Widowed']} onChange={(value: string | null) => {
    if (value !== null) {
      Setdata({ ...data, marital: value });
    }
  }} required/>
<FileInput
      label="Photo"
      placeholder="Photo" onChange={(e:any) => Setdata({ ...data, photo: e.target.value })}
    />
            <TextInput label="Personal Email" placeholder="Enter Personal Email" onChange={(e) => Setdata({ ...data, pemail: e.target.value })} required/>
            <TextInput label="Display Name" placeholder="Enter Display Name" onChange={(e) => Setdata({ ...data, dname: e.target.value })} required/>
      </Stepper.Step>

      {/* <Stepper.Step label="Final step" description="Confirmation">
        <TextInput label="Website" placeholder="Website" {...form.getInputProps('website')} />
        <TextInput
          mt="md"
          label="GitHub"
          placeholder="GitHub"
          {...form.getInputProps('github')}
        />
      </Stepper.Step> */}
      <Stepper.Completed>
      <TextInput label="Employee Id" placeholder="Employee Id" value={data.empid} readOnly   />
        <DatePicker placeholder="Joining Date" label="Joining Date"value={new Date(data.jdate)}  readOnly  />
        <Select label="Employee Mode" placeholder="Select Employee Mode" value={data.empmode} data={['Permanent', 'Contract']}  readOnly />
        <TextInput label="Work Mobile" value={data.workmobile} placeholder="Enter Work Mobile" onChange={(e) => Setdata({ ...data, workmobile: e.target.value })} readOnly />
        <TextInput label="Work Email" placeholder="Enter Work Email" value={data.workemail} onChange={(e:any) => Setdata({ ...data, workemail: e.target.value })} readOnly  />
        <DatePicker placeholder="Financial Appraisal Cycle" label="Financial Appraisal Cycle" value={new Date(data.financial)} readOnly    />
   <TextInput label="First Name" placeholder="Enter First Name" value={data.fname} readOnly />

        <TextInput label="Last Name" placeholder="Enter Last Name"  value={data.lname} readOnly />
        <DatePicker placeholder="Date Of Birth" label="Date Of Birth" value={new Date(data.dob)} readOnly  />
        <Select label="Gender" placeholder="Select-" value={data.gender} data={['Male', 'Female', 'Other']} 
required readOnly />
<Select label="Martial Status" placeholder="Select-" name="marital"  data={['Married', 'Single', 'Divorced', 'Widowed']} value={data.marital}  readOnly />
            <TextInput label="Personal Email" placeholder="Enter Personal Email" value={data.pemail} readOnly />
            <TextInput label="Display Name" placeholder="Enter Display Name" value={data.dname} readOnly />
      </Stepper.Completed>
    </Stepper>
    </form>

    <Group style={{ justifyContent: 'flex-end'}} mt="xl">
      {active !== 0 && (
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
      )}
      {active !== 2 && <Button variant='default' onClick={nextStep}>Next step</Button>}
      {active>1 && <Button variant='default' onClick={submitdata}>Submit</Button>}
    </Group>
  </>
);
}
function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return date.toLocaleDateString(undefined, options);
}
export default AddEmployee
