import React from 'react';
import { Button, Form, Header, Input, Segment } from 'semantic-ui-react';

export default function EventForm({setFormOpen}) {

    return (

        <Segment clearing>

        <Header content='Create New Event' />
        <Form>
        <Form.Field>
        <Input type='text' placeholder='Event Title' />
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
        </Form>
        <Button type='submit' floated='right' positive content='Submit' />
        <Button type='submit' onClick={() => setFormOpen(false)} floated='right' content='Cancel' />
        </Segment>

    )
}