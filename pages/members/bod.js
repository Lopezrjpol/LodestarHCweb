import styles from '../../styles/Bod.module.css'
import { Card, Tab, Row, ListGroup, Col, Container, Accordion} from 'react-bootstrap'

export default function Home() {
    return (
      <div >
          <div className={styles.headtag}> 
                <hr/>
            <h1>Board of Directors</h1>
                <hr/>
           </div>
          <div className={styles.container}>
         <Container>
            <div> 
                    <hr/>
                <h1><center>Regular Directors</center></h1>
                    <hr/>
            </div>
            <Accordion>
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
                            Mr. Nathaniel C. Go / Director and President
                            </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <Card.Img src="../image.png" className={styles.profile} />
                                <div className={styles.content}><br/>
                                     <h4><center><b>Mr. Nathaniel C. Go</b></center></h4>
                                     <p><center>Director and President</center></p>
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
                            Mr. Delfin S Castro Jr. / Director, Treasure and Chief Finance Officer
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
                            Mr. Ramoncito B. Cabalu / Director
                            </Accordion.Toggle>
                                <Accordion.Collapse eventKey="3">
                            <Card.Body>
                                <Card.Img src="../image.png" className={styles.profile} />
                                <div className={styles.content}><br/>
                                     <h4><center><b> Mr. Ramoncito B. Cabalu</b></center></h4>
                                     <p><center>Director</center></p>
                                     <h4><b>Business and Professional Background / Experiences</b></h4>
                                     <p>Mr. Cabalu is a director and President of a major entertainment company
                                        Circle Asia Group with major industry players to service the entertainment
                                        requirements of gaming companies in Manila and the emerging markets (2014
                                        to present). He is also currently a director and Partner of Maple Tree Investments
                                        (2014 to present) and Vice -President/Partner for Business Development of
                                        Garco Minerals and Chemical Trading. He is also a director of Geograce
                                        Resources Philippines Inc. (2016 to present) and he was a director of Asiabest
                                        Group International Inc. (2014-2018).</p>
                                    <h4><b>Academic Background</b></h4>
                                    <p>Mr. Ramoncito Cabalu graduated with a Bachelor of Arts degree major in
                                        Economics and Social Sciences at the University of the Philippines in 1977.
                                        </p>
                                    <h4><b>Committee Membership</b></h4>
                                    <p>Member - Nomination Committee<br/>
                                        Member - Governance Committees
                                        </p>
                                    <h4><b>Directorship in Other Listed Companies in the Philippines</b></h4>
                                    <p>3. Geograce Resources Philippines, Inc.</p>
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
                            Mr. David Christian Verar Gamboa / Director
                            </Accordion.Toggle>
                                <Accordion.Collapse eventKey="4">
                            <Card.Body>
                                <Card.Img src="../image.png" className={styles.profile} />
                                <div className={styles.content}><br/>
                                     <h4><center><b>Mr. David Christian Verar Gamboa </b></center></h4>
                                     <p><center>Director</center></p>
                                     <h4><b>Business and Professional Background / Experiences</b></h4>
                                     <p>Mr. Gamboa is currently the Chief Operating Officer of Anteriore Inc.</p>
                                    <h4><b>Academic Background</b></h4>
                                    <p>Mr. Gamboa holds a Bachelor of Science in Management from De la Salle
                                        University. </p>
                                    <h4><b>Committee Membership</b></h4>
                                    <p>Member of Compensation Committee</p>
                                </div>
                            </Card.Body>
                                </Accordion.Collapse>
                        </Card>
                    </Col>
                </Row>
            </Accordion>
        </Container>
       
         </div>
         <br/>
         <div className={styles.container}>
         <Container >
            <div > 
                    <hr/>
                <h1><center>Independent Directors</center></h1>
                    <hr/>
            </div>
            <Accordion>
                <Row>
                    <Col>
                         <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0" className={styles.head}>
                            Mr. Leonardo B. Cua / Independent Director
                            </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Card.Img src="../image.png" className={styles.profile} />
                                <div className={styles.content}><br/>
                                     <h4><center><b>Mr. Leonardo B. Cua </b></center></h4>
                                     <p><center>Independent Director</center></p>
                                     <h4><b>Business and Professional Background / Experiences</b></h4>
                                     <p>Dr. Cua is a physician by profession. He is currently an Independent Director of
                                        Nihao Mineral Resources International, Inc. and Director / Treasurer of Dizon
                                        Copper Silver Mines, Inc. He is Vice President for Operations of BCHT Enterprises
                                        from 1990 to present. Dr. Cua is currently a member of the Philippine Medical
                                        Association and the Philippine Society of Anaesthesiologists. He is currently a
                                        visiting Anaesthesia Consultant at the University of the East Ramon Magsaysay
                                        Memorial Medical Center.</p>
                                    <h4><b>Academic Background</b></h4>
                                    <p>Dr. Cua graduated from the University of the Philippines, Diliman, with a degree
                                        in Bachelor of Science in Biology. He is a Doctor of Medicine from the University
                                        of the East Ramon Magsaysay Memorial Medical Center. He completed his post
                                        graduate internship from the Manila Doctor’s Hospital (1980-1981) and
                                        residency training, specializing in anaesthesiology at University of the East
                                        Ramon Magsaysay Memorial Medical Center.
                                        </p>
                                    <h4><b>Committee Membership</b></h4>
                                    <p>Chairman - Audit Committee<br/>
                                        Chairman - Governance Committee</p>
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
                            Mr. Rae Alvyn H. Lim / Independent Director
                            </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <Card.Img src="../image.png" className={styles.profile} />
                                <div className={styles.content}><br/>
                                     <h4><center><b> Mr. Rae Alvyn H. Lim</b></center></h4>
                                     <p><center>Independent Director</center></p>
                                     <h4><b>Business and Professional Background / Experiences</b></h4>
                                     <p>Mr. Lim is currently served as the Vice President and Chief Marketing Officer of
                                        Anteriore, Inc. He has served as President and Co-Founder of Unboxd from
                                        2016 to 2017; Brand Manager of Salikneta Farm and Market from 2017 to 2018;
                                        and copywriter for Play PH in 2017.</p>
                                    <h4><b>Academic Background</b></h4>
                                    <p>Mr. Lim holds a Bachelor of Science in Advertising Management from the De
                                        La Salle University. He also took up courses in Agriculture Management and
                                        Agriculture Marketing from the University of British Columbia.
                                        </p>
                                    <h4><b>Committee Membership</b></h4>
                                    <p>Chairman - Nomination Committee</p>
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
  