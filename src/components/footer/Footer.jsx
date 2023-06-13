import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './footer.css'
const Footer = () => {

    return (
        <div className='footer'>
        <div className="container">
        <div className="sec aboutus">
        <h2>A Propos</h2>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat placeat voluptatibus illum at magnam voluptatum quis unde nihil odit alias veniam, voluptas rerum minima, quae quisquam nesciunt in laudantium sequi.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque exercitationem, deserunt, similique commodi perferendis laborum voluptatum quidem veniam, vel eveniet magni reiciendis ab quod minima aliquid esse facere obcaecati! Ad!
        </p>
        <ul className="sci">
        <li><a href="http://www.mon-site-fictif.com/produits/nouveautes"><FontAwesomeIcon icon={faFacebook} className='i' /></a></li>
        <li><a href="http://www.mon-site-fictif.com/produits/nouveautes"><FontAwesomeIcon icon={faInstagram} className='i' /></a></li>
        <li><a href="http://www.mon-site-fictif.com/produits/nouveautes"><FontAwesomeIcon icon={faYoutube} className='i' /></a></li>
        <li><a href="http://www.mon-site-fictif.com/produits/nouveautes"><FontAwesomeIcon icon={faTwitter} className='i' /></a></li>
        </ul>
        </div>
        <div className="sec quickLinks">
        <h2>Services</h2>
        <ul>
        <li><a href="http://www.mon-site-fictif.com/produits/nouveautes">A Propos</a></li>
        <li><a href="http://www.mon-site-fictif.com/produits/nouveautes">FAQ</a></li>
        <li><a href="http://www.mon-site-fictif.com/produits/nouveautes">Privacy Policy</a></li>
        <li><a href="http://www.mon-site-fictif.com/produits/nouveautes">Help</a></li>
        <li><a href="http://www.mon-site-fictif.com/produits/nouveautes">Terms & Conditions</a></li>
        <li><a href="http://www.mon-site-fictif.com/produits/nouveautes">Contact</a></li>
        </ul>
        </div>
        <div className="sec contact">
        <h2>Contacts</h2>
        <ul className="info">
        <li>
        <span><FontAwesomeIcon icon={faMapMarkerAlt} className='i' /></span>
        <span>Km4 Bd Marseille<br />
        Treichville, Rue 12, <br /> Tr</span>
        </li>
        <li>
        <span>< FontAwesomeIcon icon={faPhone} className='i' /></span>
        <p><a href="tel:12345678900"> +2250554701816</a><br />
        <a href="tel:12345678900"> +2250554701816</a></p>
        </li>
        <li>
        <span>< FontAwesomeIcon icon={faEnvelope} className='i' /></span>
        <p><a href="mailto:exampl@ex.com">exampl@ex.com</a></p>
        </li>
        </ul>
        </div>
        </div>
        <div className="copyrightText">
        <p>Copyright@2023 Activilink,Treichville. Tous droits reservés.</p>
        </div>
        </div>
        );
  
}

export default Footer