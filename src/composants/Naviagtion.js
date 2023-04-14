import {Navbar, Nav,Button} from 'react-bootstrap';

function Navigation() {
    return ( 
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Mon Site</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
                <Nav className="justify-content-center">
                    <Nav.Item>
                        <Nav.Link href="#Accueil">Accueil</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='#A Propos'>A Propos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>  
                        <Nav.Link href="#Contactez-Nous">Contactez-nous</Nav.Link>
                    </Nav.Item>


                </Nav>
                <Button variant="outline-primary" href="./composants/">Se Connecter</Button>
            </Navbar.Collapse>


        </Navbar>
        
    );
}

export default Navigation;