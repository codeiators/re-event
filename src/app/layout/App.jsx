import React, {Fragment} from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import EventForm from '../../features/events/eventForm/EventForm';
import EventDashBoard from '../../features/events/eventsDashboard/EventDashboard';
import HomePage from '../../features/home/HomePage';
import NavBar from '../../features/nav/NavBar';
function App() {
  
  
  
  return (

    <>
    <Route exact path='/' component={HomePage} />
    <Route path={'/(.+)'} render={() => (
      <>
      <NavBar />
      <Container className='main'>
    <Route exact path='/events' component={EventDashBoard} />
    <Route path='/events/:id' component={EventDetailedPage} />
    <Route path={['/createEvent','/manage/:id']} component={EventForm} />
    </Container>
     </>
    )} />
  </>
    );
    
}

export default App;
