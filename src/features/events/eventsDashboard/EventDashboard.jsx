import React, {useState} from 'react';
import { Grid } from 'semantic-ui-react';
import EventForm from '../eventForm/EventForm';
import EventList from './EventList';
import {sampleData} from '../../../app/api/sampleData'; 

 const EventDashBoard = ({formOpen,setFormOpen,selectEvent,selectedEvent}) =>
{
    const [events,setEvents] = useState(sampleData);
    
    function handleCreateEvent(event)
    {
       setEvents([...events,event])
    }

    function handleUpdateEvent(updatedEvent)
    {
      setEvents(events.map((event) => {
        return event.id === updatedEvent.id ? updatedEvent : event 
      }))
      selectEvent(null);
     
    }

    function handleDeleteEvent(eventId)
    {
     setEvents(events.filter(event => {
        return eventId !== event.id 
     }))
    }

   
    
    return(
        <Grid>
        <Grid.Column width={10} style={{marginTop:100}}>
        <EventList events={events} selectEvent={selectEvent} deleteEvent={handleDeleteEvent} />
        </Grid.Column>
        <Grid.Column width={6} style={{marginTop:100}}>
        { formOpen && <EventForm setFormOpen={setFormOpen} setEvents={setEvents} createEvent={handleCreateEvent}
        selectedEvent={selectedEvent} 
        key={selectedEvent? selectedEvent.id : null}
        updateEvent={handleUpdateEvent}/> }
        </Grid.Column>
        </Grid>
    )
}

export default EventDashBoard