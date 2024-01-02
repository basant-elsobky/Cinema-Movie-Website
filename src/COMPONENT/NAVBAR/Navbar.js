import './navbar.css';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../images/logo.png';
import { Modal} from 'react-bootstrap';


import { useEffect, useState } from 'react';
import Login from './Login';

function MyNavbar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const location = useLocation();
  const [backgroundColor, setBackgroundColor] = useState();

  useEffect(() => {

    setNavbarOpen(false);
 
    window.scrollTo(0, 0);
  }, [location]);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
  
      const scrollY = window.scrollY;

  
      if (scrollY > 100) {
        setBackgroundColor('#171D22');
      } else {
        setBackgroundColor();
      }
    };

   
    window.addEventListener('scroll', handleScroll);

 
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
  
   
    <div className='header' style={{backgroundColor}}>
    <div className='container '  >
      <nav className="navbar navbar-expand-lg " >
        <div className="container-fluid">
          <NavLink to='/' className="navbar-brand ordered-3" href="#">
          <img src={logo}/>
          </NavLink>
          <button  onClick={toggleNavbar} className="navbar-toggler" type="button" 
          data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
          aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse order-lg-2 justify-content-center order-3${navbarOpen ? ' show' : ''}`} id="navbarNav">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item ordered-2">
                <NavLink to='/' className="nav-link " aria-current="page" href="#"  onClick={toggleNavbar}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/watchlist' className="nav-link" href="#"   onClick={toggleNavbar}> Watchlist</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/watched' className="nav-link" href="#"  onClick={toggleNavbar}>    Watched</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/add' className="nav-link" href="#"  onClick={toggleNavbar}>  Add</NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="header_action d-none d-md-flex">
          <div className="lista d-flex mt-3">
            <NavLink to='/add' className="ms-3">
              <i className="fa-solid fa-magnifying-glass search" style={{ color: 'white' }} />
            </NavLink>
            <div>
              <i className="fa-solid fa-earth-europe earth" style={{ color: 'white' }} />
            </div>
          </div>
          <button onClick={handleShow} className="ms-3">Sign In</button>
          <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Login />
              </Modal>
        </div>
      </nav>
    </div>
  </div>
  );
}

export default MyNavbar;