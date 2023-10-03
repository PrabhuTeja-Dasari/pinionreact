import { Container,Card } from '@mantine/core';
import './View-Employee.css'
function ViewEmployee(){
    return(
        <Container size="xl">
        <Card shadow="sm" radius="md" withBorder>
        <div className="main-container">

<div id="teamMemberSection">
    <p><span className="teamMebername">Team member</span>/Srikanth</p>
</div>

<div className="teamMemberSection-2">

    <p className="profile-section"></p>

    <div className="input-name-section">
    <p className="teamMembername-2">Srikanth</p>
    <div className="down-section">
        <p className='each_name'>Job & Pay</p>
        <p className='each_name'>personal</p>
        <p className='each_name'>Performance</p>
        <p className='each_name'>Time Off</p>
        <p className='each_name'>Apps</p>
        <p className='each_name'>Document</p>
    </div>
    </div>
    
</div>

</div>
            </Card>
        </Container>
    )
}
export default ViewEmployee;



