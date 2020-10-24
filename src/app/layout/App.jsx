import React, {useState,Fragment} from 'react';
import { Container } from 'semantic-ui-react';
import EventDashBoard from '../../features/events/eventsDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar';
function App() {
  
  const [formOpen,setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  function handleSelectEvent(event)
  {
      setSelectedEvent(event);
      setFormOpen(true);
  }

  function handleCreateFormOpen()
  {
    setSelectedEvent(null);
    setFormOpen(true);
  }

  return (
    <Fragment >
      <NavBar setFormOpen={handleCreateFormOpen}/>
      <Container className='main'>
      <EventDashBoard formOpen = {formOpen} setFormOpen={setFormOpen} selectEvent={handleSelectEvent} selectedEvent={selectedEvent}/>
      </Container>
     
      
    </Fragment>

  );
}

export default App;
