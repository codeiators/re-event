import React, {useState} from 'react'
import { NavLink,useHistory } from 'react-router-dom';
import { Container, Menu, Button } from 'semantic-ui-react';
import SignedInMenu from './SignedInMenu';
import SignedOutMenu from './SignedOutMenu';


export default function NavBar({setFormOpen}){
    const history = useHistory(); 
    const [authenticated,setAuthenticated] = useState(false);

     function handleSignOut()
    {
     setAuthenticated(false);
     history.push('/');
    }
    return(
        <Menu inverted fixed='top'>
        <Container>
        <Menu.Item header as={NavLink} exact to='/'>
        <img src="/assets/logo.png" alt="logo" style={{marginRight: 15}}/>
        Re-vents
        </Menu.Item>
        
        <Menu.Item as={NavLink} to='/events' name="Events" />
        <Menu.Item as={NavLink} to='/sandbox' name="Sandbox" />
       { authenticated && 
       
        <Menu.Item as={NavLink} to='/createEvent'>
        <Button   positive inverted content="Create Event" />
        </Menu.Item> }


        {authenticated ? <SignedInMenu signOut={handleSignOut}/> : <SignedOutMenu setAuthenticated={setAuthenticated}/> }
        
        
        
        </Container>
        </Menu>
    )
}