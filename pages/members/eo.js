import styles from '../../styles/Bod.module.css'
import { Card, Tab, Row, ListGroup, Col, Container, Accordion} from 'react-bootstrap'

export default function Home() {
    return (
      <div >
          <div className={styles.headtag}> 
                <hr/>
            <h1>Executive Officers</h1>
                <hr/>
           </div>
          <div className={styles.container}>
         <Container>
            <Accordion  defaultActiveKey="0">
                <Row>
                    <Col>
                         <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0" className={styles.head}>
                            Mr. Allan L. Crisologo / Chairman of the Board
                            </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Card.Img src="../image.png" className={styles.profile} /> 
                                <div className={styles.content}><br/>
                                     <h4><center><b>Mr. Allan L. Crisologo</b></center></h4>
                                     <p><center>Chairman of the Board</center></p>
                                     <h4><b>Business and Professional Background / Experiences</b></h4>
                                     <p>Mr. Crisologo has a vast experience in mining, real estate, shipping and trade
                                        industry. He currently serves as Chairman of Dizon Copper Silver Mines, Inc.,
                                        Chairman and President of Nihao Mineral Resources International, Inc.,
                                        President of New Sky Energy (PH), Inc. Phil Sino Union Resources, and SS Pacific
                                        Corporation. He also serves as a Director of Golden Topper Group, Inc. from
                                        2017 to present. He has served as Managing Director of Megaquip Corporation
                                        and Adnama Pacific Marine Corp. from 2012 to 2016; Director and Vice
                                        President for Business Development of Adnama Mining Resources and Oriental
                                        Vision Mining from 2008 to 2016; President of Dwell Asia Philippines Corp. from
                                        2004 to 2014, and Director thereof from 2014 to 2015; and the
                                        Proprietor/General manager of A2C Trading Center from 1998 to 2013.</p>
                                    <h4><b>Academic Background</b></h4>
                                    <p>Mr. Crisologo holds a Bachelor’s degree in Architecture from the University of
                                        San Carlos.</p>
                                    <h4><b>Committee Membership</b></h4>
                                    <p>Chairman - Executive Committee</p>
                                    <h4><b>Directorship in Other Listed Companies in the Philippines</b></h4>
                                    <p>1. Dizon Copper Silver Mines, Inc.<br/>
                                       2. Nihao Mineral Resources International, Inc.</p>
                                </div>
                            </Card.Body>
                                </Accordion.Collapse>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1" className={styles.head}>
                            Mr. Nathaniel C. Go / President
                            </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <Card.Img src="../image.png" className={styles.profile} />
                                <div className={styles.content}><br/>
                                     <h4><center><b>Mr. Nathaniel C. Go</b></center></h4>
                                     <p><center>President</center></p>
                                     <h4><b>Business and Professional Background / Experiences</b></h4>
                                     <p>He was Internal Auditor, Corporate Secretary and Financial Analyst and
                                        Technology Manager and Internet Banking Manager of NAB Bank in Chicago,
                                        IL from 1995 to 2000. He was Chief Financial Officer and Chief Information Offer
                                        of American Metro Bank, Chicago, IL from 2003 to 2005. He was Assistant to the
                                        President of the Agricultural Bank of the Philippines from 2010 to 2015. He was
                                        VP strategic Planning Director of M&A of Premier Wilmette, Illinois from 2005-
                                        2008.</p>
                                    <h4><b>Academic Background</b></h4>
                                    <p>Mr. Go holds a Bachelor of Science in Medical Technology from University of
                                        Santo Tomas and received his Master of Concentrate in Finance from Bentley
                                        College Graduate School of Business in Watham, Massachusetts and Asian
                                        Institute of Management.</p>
                                    <h4><b>Committee Membership</b></h4>
                                    <p>Member – Executive Committee<br/>
                                       Member – Governance Committee<br/>
                                       Member - Compensation Committee<br/>
                                       Member - Nomination Committee</p>
                                </div>
                            </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                    </Col>
                </Row>

                <Row>
                    <Col>
                         <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="2" className={styles.head}>
                            Mr. Delfin S Castro Jr. / Treasurer
                            </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                <Card.Img src="../image.png" className={styles.profile} />
                                <div className={styles.content}><br/>
                                     <h4><center><b>Mr. Delfin S. Castro Jr.</b></center></h4>
                                     <p><center>Director, Treasurer and Chief Finance Officer</center></p>
                                     <h4><b>Business and Professional Background / Experiences</b></h4>
                                     <p>Mr. Castro is currently the Director and President of Geograce Resources
                                        Philippines, Inc., Director and Treasurer of Nihao Mineral Resources International,
                                        Inc., Director and Director / President of Dizon Copper Silver Mines, Inc., Director
                                        and President/Director of Redridge Resources Corporation. He is also the
                                        Corporate Secretary of Sunplaza Development Corporation and Treasurer of
                                        the Peak Condominium Corporation. From June 2000 to April 2001, he was the
                                        Global Portfolio Manager for Private Equities at United Resources Asset
                                        Management, Inc. He was formerly the Engagement Director of Palo Alto
                                        Consultant Asia, Inc. and a Senior Assistant Vice President at Asiatrust Bank.
                                        </p>
                                    <h4><b>Academic Background</b></h4>
                                    <p>He holds a Master in Business Administration and a Bachelor of Science in
                                        Business Administration from the University of the Philippines.</p>
                                    <h4><b>Committee Membership</b></h4>
                                    <p>Chairman - Compensation Committee<br/>
                                        Member – Executive Committeee<br/>
                                        Member – Audit Committee
                                        </p>
                                    <h4><b>Directorship in Other Listed Companies in the Philippines</b></h4>
                                    <p>1. Dizon Copper Silver Mines, Inc.<br/>
                                       2. Nihao Mineral Resources International, Inc.<br/>
                                       3. Geograce Resources Philippines, Inc.</p>
                                </div>
                            </Card.Body>
                                </Accordion.Collapse>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col>
                         <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="3" className={styles.head}>
                            Ms. Arlene Mendoza Wilkerson / Corporate Secretary
                            </Accordion.Toggle>
                                <Accordion.Collapse eventKey="3">
                            <Card.Body>
                                <Card.Img src="../image.png" className={styles.profile} />
                                <div className={styles.content}><br/>
                                     <h4><center><b> Mr. Ramoncito B. Cabalu</b></center></h4>
                                     <p><center>Director</center></p>
                                     <h4><b>Business and Professional Background / Experiences</b></h4>
                                     <p>Atty Wilkerson is a lawyer by profession. She is also a certified Corporate
                                        Compliance and Ethics Professional and a certified Corporate Risk Analyst. She is
                                        presently serving as Independent Director of Dizon Copper Silver Mines, Inc and
                                        Nihao Mineral resources International Inc. She has previously served as Director
                                        and Legal Consultant of the Company, as well as Angping & Associates, and
                                        Geograce Resources Philippines from 2012 to 2014. She has served as the Vice
                                        President and Head of Corporate Compliance Group of St. Luke’s Medical
                                        Center, Inc. from 2017 to 2020; Vice President for Legal and Compliance/Chief
                                        Compliance Officer of Eagle Cement Corporation from 2016 to 2017; Legal
                                        Counsel of ARCADIS from 2014 to 2016; Non-Executive Director for the Australian
                                        company Klondyke Gold Pty. Ltd. From 2011 to 2014; Director and General
                                        Manager of Camarines Norte Mining & Exploration, Inc. from 2009 to 2013; Legal
                                        Consultant for Mineral Agencies Australia from 2009 to 2013; Non-Executive
                                        Director of the Australian company Dourado Resources Pty Ltd. From 2009 to 2011;
                                        Vice President for Legal of Geograce Resources Philippines, inc. from 2006 to 2007;
                                        Corporate Secretary of Angping & Associates Securities, Inc. and AC & D
                                        Corporate Partners from 2006 to 2008. She worked as an Assistant Compliance
                                        Officer of United Coconut Planters Bank from 2005 to 2006; Associate and Office
                                        Manager of AA Amador Associates in 2004; Legal Consultant for the Presidential
                                        Commission on Good Government from 2001 to 2005; Partner of Mendoza
                                        Mendoza & Associates/Fortun Almodiel & Mendoza from 1997 to 2009. She also
                                        served the government as Legal Consultant for the Office of the Director of Legal
                                        Services of the Department of Agrarian Reform from 2013 to 2014; Supervising
                                        Legislative Staff Officer for the Office of the Deputy Speaker of the House of
                                        Representatives from 1998 to 1999; and a lawyer for the Department of
                                        Environment and Natural Resources from 1997 to 1998.</p>
                                    <h4><b>Academic Background</b></h4>
                                    <p>Atty Wilkerson received her Bachelor of Laws degree from the University of the
                                        Philippines, and finished the Management Development Program of the Asian
                                        Institute of Management.
                                        </p>
                                </div>
                            </Card.Body>
                                </Accordion.Collapse>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col>
                         <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="4" className={styles.head}>
                            Mr. Reyno D. Dizon / Compliance Officer
                            </Accordion.Toggle>
                                <Accordion.Collapse eventKey="4">
                            <Card.Body>
                                <Card.Img src="../image.png" className={styles.profile} />
                                <div className={styles.content}><br/>
                                     <h4><center><b>Mr. Reyno D. Dizon</b></center></h4>
                                     <p><center>Compliance Officer</center></p>
                                     <h4><b>Business and Professional Background / Experiences</b></h4>
                                     <p>Mr. Dizon was a member of the Board of Directors of Geograce Resources
                                        Philippines, Inc. and Director and Corporate Secretary of Redridge Resources
                                        Corporation. He is also the Compliance officer of Nihao Mineral Resources
                                        International, Inc. and Director / Compliance Officer of Dizon Copper Silver Mines,
                                        Inc. He was the formerly Vice-President for Operations of Dizon Copper Silver
                                        Mines, Inc. and Materials Management Manager of Benguet Corporation. He
                                        served as Vice-President for Administration and Finance of Vendiz
                                        Pharmaceuticals, Inc. for several years. Mr. Dizon is also the past President of
                                        Celestino-Maria Dizon Foundation, Inc.</p>
                                    <h4><b>Academic Background</b></h4>
                                    <p>Mr. Dizon graduated from University of Santo Tomas, with a Bachelor of Science
                                       degree in Mechanical Engineering. He finished the Management Development
                                       Program of the Asian Institute of Management. </p>
                                
                                </div>
                            </Card.Body>
                                </Accordion.Collapse>
                        </Card>
                    </Col>
                </Row>
            </Accordion>
        </Container>
       
            <br/>
        </div>
    </div>
    )
}
  