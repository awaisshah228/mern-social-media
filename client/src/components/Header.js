import React from 'react'
import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import {Link} from 'react-router-dom'
import MessageIcon from '@mui/icons-material/Message';
import GroupIcon from '@mui/icons-material/Group';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import {useSelector,useDispatch} from 'react-redux'
import {logout} from '../redux/actions/authAction'


const Header = () => {
    const navlinks=[
        { label : 'Home', path: '/', icon :<HomeIcon/>},
        { label : 'Message', path: '/message', icon :<MessageIcon/>},
        { label : 'Discover', path: '/discover', icon :<GroupIcon/>},
        { label : 'Notification', path: '/notify', icon :<CircleNotificationsIcon/>},
    ]
    const {auth}=useSelector(state=>state)
    const dispatch=useDispatch()
    return (
        <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="#home">Media</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="me-auto">
                           
                        {/* <Link to='/' className='nav-link'>Home</Link> */}
                        {/* <Nav.Link href="#">HIih</Nav.Link>
                        <Nav.Link href="#pricing">Feed</Nav.Link> */}
                        
                        </Nav>
                        <Nav>
                        {
                                navlinks.map((link,index)=>{
                                  return(<Link key={index} to={link.path} className='nav-link'>{link.icon}</Link>)  
                                  //<h1>hello</h1>
                                })
                            }
                        {/* <NavDropdown.Toggle id="collasible-nav-dropdown">Pow! Zoom!</NavDropdown.Toggle> */}
                        <NavDropdown title={<AccountCircleIcon/>} id="collasible-nav-dropdown" className='mx-3'>
                            <Link  to="/profile" className='dropdown-item'>Profle</Link>
                            <Link  to="/" className='dropdown-item'>Dark Mode</Link>
                            <NavDropdown.Divider />
                            <Link  to="/" className='dropdown-item' onClick={()=>dispatch(logout())}>Logout</Link>

                        </NavDropdown>
                        {/* <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                 </Navbar>
        </div>
    )
}

export default Header
