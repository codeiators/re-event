import React from 'react';
import EventListItem from './EventListItem';

export default function EventList(props) {
    const {events,selectEvent,deleteEvent} = props
    return (
       
        <div>
        {
            events.map(evt => {
            return <EventListItem event={evt} key={evt.id} selectEvent={selectEvent} deleteEvent={deleteEvent}/>
        })
    }
        
        
        </div>
    )
}