import styles from '../styles/Home.module.css'
import { Container,Row,Col } from 'react-bootstrap'
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
return(
        <div>
            <div className={styles.foot}>
                <Container className={styles.design}>
                    <Row>
                    <Col md="auto">
                            <h2>Contacts :</h2>
                            <div>
                                <p><FontAwesomeIcon icon={faPhoneAlt} /> (632) 8920-9306</p>
                                <p><FontAwesomeIcon icon={faEnvelope}/> ilodestar@yahoo.com</p>
                            </div>
                        </Col>
                        <Col> 
                            <div>
                                <h2>Location :</h2>
                                <p><FontAwesomeIcon icon={faMapMarkerAlt}/> 7th Floor Peaksun Bldg., 1505 Princeton St., corner Shaw Blvd., Brgy. Wack Wack Greenhills East, Mandaluyong City</p>
                            </div>
                        </Col>
                        
                        <Col xs lg="3"> 
                            <h4>Lodestar Investment Holdings Corporation</h4>
                            <div className={styles.designB}>
                                <img
                                p
                                src="/Lode.png"
                                width="200"    
                                height="80"
                                alt="Lodestarholdings Logo"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={styles.footer}><center>© {new Date().getFullYear()} | Lodestar Investment Holdings Corporation Unofficial.</center></div>

        </div>

    )
}

export default Footer;