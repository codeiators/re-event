import React from 'react';
import EventListItem from './EventListItem';

export default function EventList(props) {
    const {events} = props
    return (
       
        <div>
        {
            events.map(evt => {
            return <EventListItem event={evt} key={evt.id} />
        })
    }
        
        
        </div>
    )
}