import {useState} from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import {
  Route,
  Link,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';
import Contact from './Contact';
import Home from './Home';
import Login from './authentification/Login';
import About from './About';
import Services from './Services';
import '../styles/Navigation.css';
import '../images/logo.jpeg';
import Register from './authentification/Register';

function Navigation() {

  const [loggedIn, setLoggedIn]=useState(false);

  const handleLogin=()=>{
    setLoggedIn(true)
  }

  return (
    <Router>
      <Navbar className='navbar' expand="lg">
        <Navbar.Brand as={Link} to="/home">
          <img
           src={ '../images/logo.jpeg' }

            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"> 
          <Nav className="ml-auto"> {/* Ajout de la classe ml-auto pour aligner à droite */}
            <Nav.Item>
              <Nav.Link as={Link} to={"/home"} >Accueil</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to={"/about"}>A Propos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to={"/contact-us"}>Contactez-nous</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to={"/nos-services"}>Nos Services</Nav.Link>
            </Nav.Item>
          </Nav>

          {!loggedIn ? ( // Vérifier si l'utilisateur est connecté ou non
            <Button className='button-nav' variant="outline-primary" as={Link} to={"/register"} onClick={handleLogin}>
              S'inscrire
            </Button>
          ) : (
            <Button className='button-nav' variant="outline-primary" as={Link} to={"/login"} onClick={handleLogin
            }>
              Se connecter
            </Button>
          )}
        </Navbar.Collapse>
      </Navbar>
      <div>
        <Routes>
          <Route path='/home' element={<Home />} /> 
          <Route path='/about' element={<About />} /> 
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/nos-services' element={<Services />} />
          <Route path='/login' element={<Login />} /> 
          <Route path='/register' element={<Register/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default Navigation;
