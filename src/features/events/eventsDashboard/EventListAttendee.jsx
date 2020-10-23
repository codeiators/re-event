import React from 'react';
import { Item, List } from 'semantic-ui-react';

export default function EventListAttendee({attendee}) {
    return (
        <List.Item>

        <Item.Image size='mini' circular src={attendee.photoURL} />
        
        
        </List.Item>
    )
}