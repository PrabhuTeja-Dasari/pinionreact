import {Stepper, Container, Card, Box,Group, Button, Radio, Select,TextInput,Textarea} from '@mantine/core';
import { useState, useEffect } from 'react';
import { DatePicker } from '@mantine/dates';
import './DismissEmployee.css'
function DismissEmployee(){
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
        <div id="main-container">
            <div className='row'>
                <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                    <form>
                        <Stepper active={active}>
                            <Stepper.Step label= 'Enter Dismissal Details'>
                            <Container>
                                <div className='row'>
                                <Card>
                                    <div className='p-lg'>
                                        <div className='card-body'>
                                        <Box bg="" my="xl" component="a" >
                                        Look out for letters from your health insurance carriers
    Some carriers require a certain amount of employees to be enrolled in health insurance. If your company falls below their minimum, they'll send you a notice.
    If you get one, make sure to pass that along to MyBizWhiz so we can help.
        </Box>
        <p> You can edit the dismissal details up until (write fname dynamically) last day. Their employment info will stay in your account to reference later. If Uday is taking a leave of absence or on furlough, skip them on payroll instead of dismissing them.</p>
        
        <h5>Employee's Last Day</h5>
        <DatePicker id = 'inputStyle2' placeholder="Pick date"  onChange={(selectedDate: Date | null) => {
       
       if (selectedDate !== null) {
          const formattedDate = formatDate(selectedDate);
          Setdata({ ...data, dob: formattedDate });
        }
      }} />
     <h1 className='Prefered-first-name pt-3 pb-3'>Did Uday choose to leave ?</h1>  
     <p>We wont report this anywhere, but we'll record it for your in case you need to use it later.</p>
                     <div className='worker-type-container'>
                       <div className='radio-btn-container'>
                      <Radio value="Employee" id=" radobtn" className="mt-1 mr-2" name="label" onChange={e=>Setdata({...data,worker:e.target.value})} checked={data.worker==="Employee"} />
                     <div className='labels-container'>
                        <label htmlFor='radobtn' className='label-one'>Yes - Uday is leaving voluntarily</label>
                     </div>
                     </div>
                     <div className='radio-btn-container'>
                      <Radio value="Employee" id=" radobtn1" className="mt-1 mr-2" name="label" onChange={e=>Setdata({...data,worker:e.target.value})} checked={data.worker==="Employee"} />
                     <div className='labels-container'>
                        <label htmlFor='radobtn1' className='label-one'>No - Uday didn't choose to leave</label>
                     </div>
                     </div>
                     </div>
                        <h5>Reason For Dismissal (optional)</h5>
                        <p>We wont report this anywhere, but we'll record it for your in case you need to use it later.</p>
                       <Select placeholder='Choose one'  data = {['Career Advancement', 'Compensation', 'Leave of absence', 'Personal Reasons', 'Reloaction', 'Return to School', 'Type of work', 'Other']} />
                       <Container bg="" my="xl" >
                        <Card>
                       Final payroll moved to the offboarding checklist Once you've scheduled a dismissal, you can run or update the final payroll method from the offboarding checklist.
                       </Card>
        </Container>
        <h5>Uday's Personal Email</h5>
        <p>This is the email that Uday will use to sign into MyBizWhiz later for W-2 forms.</p>
        <TextInput placeholder='Enter email'></TextInput>
        <h5>Dismissal notes (optional)</h5>
        <p>Only admins will see these notes.</p>
        <Textarea placeholder='For example: Jordan moved out of the country to help his family'></Textarea>
                                        </div>
    
                                    </div>
                                </Card>
                                </div>
                            </Container>
                            </Stepper.Step>
                            <Stepper.Step label ='Review and Dismiss'>
                                <Card>
                                <p>Review and dismiss working</p>
                                </Card>                          
                            </Stepper.Step>
    
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
          {/* {active>2 && <Button variant='default' onClick={submitdata}>Add {data.fname} and exit</Button>}
          {active>2 && <Button variant='default' onClick={submitdata}>Add {data.fname} and setup for payroll</Button>} */}
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
export default DismissEmployee;