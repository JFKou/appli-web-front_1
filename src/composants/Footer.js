import '../styles/Footer.css'
import { Row, Col, Container} from 'react-bootstrap'

const Footer = () => {
    return ( 
        <Container fluid className='footer'>
            <Row>
                <Col xs={12} sm={4} className='footer-col'>
                    <h5>Liens utiles</h5>
                    <p>Accueil</p>
                    <p>A Propos</p>
                    <p>Services</p>
                    <p>Connexion</p>
                    



                </Col>
                <Col xs={12} sm={4} className="footer-col">
                <h5>Nos services</h5>
                <p>Some text for column 2.</p>
                </Col>
                <Col xs={12} sm={4} className="footer-col">
                <h5>Notre Newsletter</h5>
                <p>Some text for column 3.</p>
                </Col>
            </Row>

        </Container>



     );
}
 
export default Footer;