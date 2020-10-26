import React, {useState} from 'react';
import { Grid } from 'semantic-ui-react';

import EventList from './EventList';
import {sampleData} from '../../../app/api/sampleData'; 

 const EventDashBoard = () =>
{
    const [events,setEvents] = useState(sampleData);
    
    // function handleCreateEvent(event)
    // {
    //    setEvents([...events,event])
    // }

    // function handleUpdateEvent(updatedEvent)
    // {
    //   setEvents(events.map((event) => {
    //     return event.id === updatedEvent.id ? updatedEvent : event 
    //   }))
     
     
    // }

    function handleDeleteEvent(eventId)
    {
     setEvents(events.filter(event => {
        return eventId !== event.id 
     }))
    }

   
    
    return(
        <Grid>
        <Grid.Column width={10} >
        <EventList events={events}  deleteEvent={handleDeleteEvent} />
        </Grid.Column>
        <Grid.Column width={6} >
       <h2>Event Filters</h2>
        </Grid.Column>
        </Grid>
    )
}

export default EventDashBoard