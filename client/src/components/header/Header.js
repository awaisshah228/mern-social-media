import React,{useState} from "react";
import { Navbar, Container } from "react-bootstrap";
import Search from "./Search";
import Menu from "./Menu";
import UserCard from "../UserCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const {search}=useSelector(state=>state)
  const [users, setusers] = useState(search)
  
  return (
    <div>
      <Navbar collapseOnSelect  bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/">Media</Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
          {/* <Navbar.Collapse id="responsive-navbar-nav">
           
            
          </Navbar.Collapse> */}
          <Search />
          <Menu className="menu-bot" />
        </Container>
      </Navbar>

      {/* <div style={{position: 'fixed',top: '50px'}}>
        {
          search.length>0 && search.map((user)=>(
            <div><Link key={user._id} to={`/profile/${user._id}`} >
            Users  
            </Link></div>
          ))
          
        }
      </div> */}
      {/* <div >
        
            {
              search? search.map((user)=>(
                <div><Link key={user._id} to={`/profile/${user._id}`} >
                Users  
                </Link></div>
                
              ) ):''
            }
          </div> */}
    </div>
    
  );
};

export default Header;
