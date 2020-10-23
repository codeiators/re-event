import React, {useState} from 'react';
import { Button, Form, Header, Input, Segment } from 'semantic-ui-react';

export default function EventForm({setFormOpen,setEvents}) {
     const [title, setTitle] = useState('');

     function handleFormSubmit()
     {
      console.log(title);
     }
    return (

        <Segment clearing>

        <Header content='Create New Event' />
        <Form onSubmit={handleFormSubmit}>
        <Form.Field>
        <Input type='text' placeholder='Event Title' value={title} onChange={(e) => setTitle(e.target.value)}/>
        </Form.Field>
        <Form.Field>
        <Input type='text' placeholder='Category' />
        </Form.Field>
        <Form.Field>
        <Input type='text' placeholder='Event Description' />
        </Form.Field>
        <Form.Field>
        <Input type='text' placeholder='City' />
        </Form.Field>
        <Form.Field>
        <Input type='text' placeholder='Venue' />
        </Form.Field>
        <Form.Field>
        <Input type='date' placeholder='Date' />
        </Form.Field>
        <Button type='submit' floated='right' positive content='Submit'/>
        <Button type='submit' onClick={() => setFormOpen(false)} floated='right' content='Cancel' />
        </Form>
        
        </Segment>

    )
}