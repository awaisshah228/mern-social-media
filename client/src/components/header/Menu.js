import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import { Link, useLocation } from "react-router-dom";
import MessageIcon from "@mui/icons-material/Message";
import GroupIcon from "@mui/icons-material/Group";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions/authAction";
import { GLOBALTYPES } from "../../redux/actions/globalType";

const Menu = () => {
  const navlinks = [
    { label: "Home", path: "/", icon: <HomeIcon /> },
    { label: "Message", path: "/message", icon: <MessageIcon /> },
    { label: "Discover", path: "/discover", icon: <GroupIcon /> },
    {
      label: "Notification",
      path: "/notify",
      icon: <CircleNotificationsIcon />,
    },
  ];
  const { auth, theme } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const isActive = (pn) => {
    if (pn === pathname) return "active";
  };
  const { innerWidth: width, innerHeight: height } = window;
  console.log(width)
  return (
    <>
      <Nav className="menu-bot my-auto">
        {navlinks.map((link, index) => {
          return (
            <Link
              key={index}
              to={link.path}
              className={`nav-link my-auto  ${isActive(link.path)}`}
            >
              {link.icon}
            </Link>
          );
          //<h1>hello</h1>
        })}
        {/* <Link  to='/' className={'nav-link active'}><HomeIcon/></Link> */}
        {/* <NavDropdown.Toggle id="collasible-nav-dropdown">Pow! Zoom!</NavDropdown.Toggle> */}
         
        <NavDropdown
          title={
            auth.user.avatar ? (
              <img
                className="img-fluid"
                src={auth.user.avatar} alt='avatar'
                style={{ height: "30px", width: "30px", borderRadius: "50%" }}
              />
            ) : (
              <AccountCircleIcon />
            )
          }
          id="collasible-nav-dropdown"
          className={`mx-2 my-auto ` }
          // align={{ lg: 'end' }}
           
  
        >
          <Link to={`/profile/${auth.user._id}`} className="dropdown-item">
            Profle
          </Link>
          <Link
            to="/"
            className="dropdown-item"
            onClick={() =>
              dispatch({ type: GLOBALTYPES.THEME, payload: !theme })
            }
          >
            {theme ? "LightMode" : "Dark Mode"}
          </Link>
          <NavDropdown.Divider />
          <Link
            to="/"
            className="dropdown-item"
            onClick={() => dispatch(logout())}
          >
            Logout
          </Link>
        </NavDropdown>
        {/* <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link> */}
      </Nav>
    </>
  );
};

export default Menu;
