import React, {useState,Fragment} from 'react';
import { Container } from 'semantic-ui-react';
import EventDashBoard from '../../features/events/eventsDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar';
function App() {
  
  const [formOpen,setFormOpen] = useState(false);
  return (
    <Fragment >
      <NavBar setFormOpen={setFormOpen}/>
      <Container className='main'>
      <EventDashBoard formOpen = {formOpen} setFormOpen={setFormOpen}/>
      </Container>
     
      
    </Fragment>

  );
}

export default App;
