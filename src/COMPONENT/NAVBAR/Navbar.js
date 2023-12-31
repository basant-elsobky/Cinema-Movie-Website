import './navbar.css';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../images/logo.png';
import { HashLink as Link } from 'react-router-hash-link';
import { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function MyNavbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState('transparent');
  const location = useLocation();

  useEffect(() => {
    // Close the Navbar when navigating to another website
    const handleExternalLinkClick = () => {
      setNavbarOpen(false);
    };

    document.addEventListener('click', handleExternalLinkClick);

    return () => {
      document.removeEventListener('click', handleExternalLinkClick);
    };
  }, []);

  useEffect(() => {
    setNavbarOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
        setNavbarBackground('#171D22');
      } else {
        setNavbarBackground('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div className="header" >
      <Navbar style={{ backgroundColor: navbarBackground }} expand="lg" 
        className={`text-uppercase fixed-top ${navbarOpen ? 'show' : ''}`}>
        <Container>
          <Link to='/' className="navbar-brand">
            <img src={logo} alt="Logo" />
          </Link>

          <Navbar.Toggle
  aria-controls="responsive-navbar-nav"
  onClick={toggleNavbar}
  style={{ borderColor: 'yellow' }} 
/>
          <Navbar.Collapse   id="responsive-navbar-nav" className={`justify-content-between${navbarOpen ? ' show' : ''}`}>
            <Nav className="mx-auto text-center">
              <Nav.Link as={NavLink} to='/' activeClassName="active" exact>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to='/movie'>
                Movie
              </Nav.Link>
              <Nav.Link as={NavLink} to='/watchlist' activeClassName="active">
                Watchlist
              </Nav.Link>
              <Nav.Link as={NavLink} to='/watched' activeClassName="active">
                Watched
              </Nav.Link>
              <Nav.Link as={NavLink} to='/add' activeClassName="active">
                Add
              </Nav.Link>
              <Nav.Link as={Link}  smooth to='#contactus'>
                Contacts
              </Nav.Link>
            </Nav>

            <div className="header_action d-none d-md-flex">
              <div className="lista d-flex mt-3">
                <a className="ms-3">
                  <i className="fa-solid fa-magnifying-glass search" style={{ color: 'white' }} />
                </a>
                <div>
                  <i className="fa-solid fa-earth-europe earth" style={{ color: 'white' }} />
                </div>
              </div>
              <button className="ms-3">Sign In</button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
