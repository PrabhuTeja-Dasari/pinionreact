import {Stepper, Container, Card, Box,Group, Button, Radio, Select,TextInput,Textarea} from '@mantine/core';
import { useState, useEffect } from 'react';
import {IconInfoCircle} from '@tabler/icons'
import { DatePicker } from '@mantine/dates';
import './DismissEmployee.css'
function DismissEmployee(){
    const [active, setActive] = useState(0);
    const [data,Setdata]=useState({
       emplastdate:'',
       leaving:'',
       reason:'',
       email:'',
       notes:''
    
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
                    <form>
                        <Stepper active={active}>
                            <Stepper.Step label= 'Enter Dismissal Details'>
                            <Container>
                                <div className='row'>
                                <Card>
                                    <div className='p-lg'>
                                      
            <div className='card-body'>
                <div className='look-out-letters'>
                <IconInfoCircle className='iconcircle'/>
                Look out for letters from your health insurance carriers
                Some carriers require a certain amount of employees to be enrolled in health insurance. If your company falls below their minimum, they'll send you a notice.
                If you get one, make sure to pass that along to MyBizWhiz so we can help.
                </div>
                <p> You can edit the dismissal details up until (write fname dynamically) last day. Their employment info will stay in your account to reference later. If Uday is taking a leave of absence or on furlough, skip them on payroll instead of dismissing them.</p>
        <div className='Date-aligns'>
        <h5>Employee's Last Day</h5>
        <DatePicker id = 'inputStyle2' placeholder="Pick date"  onChange={(selectedDate: Date | null) => {
       
       if (selectedDate !== null) {
          const formattedDate = formatDate(selectedDate);
          Setdata({ ...data, emplastdate: formattedDate });
        }
      }} />
      </div>
      <div className='Radio-section'> 
     <h1 className='Prefered-first-name pt-3 pb-3'>Did Uday choose to leave ?</h1>  
     <p>We wont report this anywhere, but we'll record it for your in case you need to use it later.</p>
                     <div className='worker-type-container'>
                       <div className='radio-btn-container'>
                      <Radio value="Yes" id=" radobtn" className="mt-1 mr-2" name="label" onChange={e=>Setdata({...data,leaving:e.target.value})} checked={data.leaving==="Yes"} />
                     <div className='labels-container'>
                        <label htmlFor='radobtn' className='label-one'>Yes - Uday is leaving voluntarily</label>
                     </div>
                     </div>
                     <div className='radio-btn-container'>
                      <Radio value="No" id=" radobtn1" className="mt-1 mr-2" name="label" onChange={e=>Setdata({...data,leaving:e.target.value})} checked={data.leaving==="No"} />
                     <div className='labels-container'>
                        <label htmlFor='radobtn1' className='label-one'>No - Uday didn't choose to leave</label>
                     </div>
                     </div>
                     </div>
                     </div>
                     <div className='Reason-align'>
                        <h5>Reason For Dismissal (optional)</h5>
                        <p>We wont report this anywhere, but we'll record it for your in case you need to use it later.</p>
                        <Select placeholder="Choose One" id="inputStyle2" data={['Carrer advancement', 'Compensation', 'Leave of absence','Personal resons','Relocation','Return to shool','Type of work','other']} value={data.leaving} onChange={(selectedOption) => Setdata({ ...data, leaving: selectedOption || '' })} />     
                       </div>

                       <div className='look-out-letters'>
                        <IconInfoCircle className='iconinfocircle'/>&nbsp;
                       Final payroll moved to the offboarding checklist Once you've scheduled a dismissal, you can run or update the final payroll method from the offboarding checklist.
                       
                       </div>
        
        <h5>Uday's Personal Email</h5>
        <p>This is the email that Uday will use to sign into MyBizWhiz later for W-2 forms.</p>
        <TextInput id = 'inputStyle2' placeholder='Enter email' onChange={e=>Setdata({...data,email:e.target.value})}></TextInput>
        <h5>Dismissal notes (optional)</h5>
        <p>Only admins will see these notes.</p>
        <Textarea id = 'inputStyle2' placeholder='For example: Jordan moved out of the country to help his family' onChange={e=>Setdata({...data,notes:e.target.value})}></Textarea>
                                        </div>
    
                                    </div>
                                </Card>
                                </div>
                            </Container>
                            </Stepper.Step>
                            <Stepper.Step label ='Review and Dismiss'>
                            <Container>
                                <div className='row'>
                                <Card>
                                    <div className='p-lg'>
                                      
            <div className='card-body'>
                <div className='look-out-letters'>
                <IconInfoCircle className='iconcircle'/>
                Look out for letters from your health insurance carriers
                Some carriers require a certain amount of employees to be enrolled in health insurance. If your company falls below their minimum, they'll send you a notice.
                If you get one, make sure to pass that along to MyBizWhiz so we can help.
                </div>
                <p> You can edit the dismissal details up until (write fname dynamically) last day. Their employment info will stay in your account to reference later. If Uday is taking a leave of absence or on furlough, skip them on payroll instead of dismissing them.</p>
        <div className='Date-aligns'>
        <h5>Employee's Last Day</h5>
        <p><b>{data.emplastdate}</b></p>
      </div>
      <div className='Radio-section'> 
     <h1 className='Prefered-first-name pt-3 pb-3'>Did Uday choose to leave ?</h1>  
     <p>We wont report this anywhere, but we'll record it for your in case you need to use it later.</p>
                    <p><b>{data.leaving}</b></p>
                     </div>
                     <div className='Reason-align'>
                        <h5>Reason For Dismissal (optional)</h5>
                        <p>We wont report this anywhere, but we'll record it for your in case you need to use it later.</p>
                        <p><b>{data.reason}</b></p>
                       </div>

                       <div className='look-out-letters'>
                        <IconInfoCircle className='iconinfocircle'/>&nbsp;
                       Final payroll moved to the offboarding checklist Once you've scheduled a dismissal, you can run or update the final payroll method from the offboarding checklist.
                       
                       </div>
        
        <h5>Uday's Personal Email</h5>
        <p>This is the email that Uday will use to sign into MyBizWhiz later for W-2 forms.</p>
        <p><b>{data.email}</b></p>
        <h5>Dismissal notes (optional)</h5>
        <p>Only admins will see these notes.</p>
        <p><b>{data.notes}</b></p>
                                        </div>
    
                                    </div>
                                </Card>
                                </div>
                            </Container>                       
                            </Stepper.Step>
    
                        </Stepper>
                    </form>
            
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