import cuid from 'cuid';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Header, Input, Segment } from 'semantic-ui-react';

export default function EventForm({setFormOpen,setEvents,createEvent,selectedEvent,updateEvent}) {

    const initialValues = selectedEvent  ?? {
        title:'',
        category:'',
        description:'',
        city: '',
        venue:'',
        date:''
    }

     const [values, setValues] = useState(initialValues);

     function handleInputChange(e)
     {
         const {name,value} = e.target;
         setValues({
             ...values,
             [name]:value
         })
     }

     function handleFormSubmit()
     {
      selectedEvent ? updateEvent({...selectedEvent,...values}) :  
      createEvent({...values,id:cuid(),hostedBy:'Bob',attendees:[],hostPhotoURL:'/assets/user.png'});
      setFormOpen(false);
     }
    return (

        <Segment clearing style={{marginTop:80}}>

        <Header content= {selectedEvent ?'Edit the Event':'Create new Event'} />
        <Form onSubmit={handleFormSubmit}>
        <Form.Field>
        <Input type='text' placeholder='Event Title' name='title' value={values.title} onChange={(e) => handleInputChange(e)}/>
        </Form.Field>
        <Form.Field>
        <Input type='text' placeholder='Category'  name='category' value={values.category} onChange={(e) => handleInputChange(e)}/>
        </Form.Field>
        <Form.Field>
        <Input type='text' placeholder='Event Description'  name='description' value={values.description} onChange={(e) => handleInputChange(e)} />
        </Form.Field>
        <Form.Field>
        <Input type='text' placeholder='City'  name='city' value={values.city} onChange={(e) => handleInputChange(e)} />
        </Form.Field>
        <Form.Field>
        <Input type='text' placeholder='Venue'  name='venue' value={values.venue} onChange={(e) => handleInputChange(e)}/>
        </Form.Field>
        <Form.Field>
        <Input type='date' placeholder='Date'  name='date' value={values.date} onChange={(e) => handleInputChange(e)} />
        </Form.Field>
        <Button type='submit'  floated='right' positive content='Submit'/>
        <Button type='submit' as={Link} to='/events' floated='right' content='Cancel' />
        </Form>
        
        </Segment>

    )
}