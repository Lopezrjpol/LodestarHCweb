import styles from '../../styles/Bod.module.css'
import { Card, Tab, Row, ListGroup, Col, Container, Accordion, Button} from 'react-bootstrap'

export default function Home() {
    return (
      <div >
          <div className={styles.headtag}> 
                <hr/>
            <h1>Board of Committee Members</h1>
                <hr/>
           </div>
          <div className={styles.container}>
         <Container>
            <div> 
                    <hr/>
                <h1><center>Executive Committee</center></h1>
                    <hr/>
            </div>
                <Card className={styles.headcontent}>
                <Card.Img variant="top" src="../image.png" />
                <Card.Body>
                    <Card.Title>Mr. Allan L Crisologo</Card.Title>
                    <Card.Text>
                    Chairman of Executive Committee
                    </Card.Text>
                    <Button variant="dark text-white">See More</Button>
                </Card.Body>
                </Card>
                <Card className={styles.headcontent}>
                <Card.Img variant="top" src="../image.png" />
                <Card.Body>
                    <Card.Title>Mr. Nathaniel C. Go</Card.Title>
                    <Card.Text>
                    Member of Executive Committee
                    </Card.Text>
                    <Button variant="dark text-white">See More</Button>
                </Card.Body>
                </Card>
                <Card className={styles.headcontent}>
                <Card.Img variant="top" src="../image.png" />
                <Card.Body>
                    <Card.Title>Mr. Delfin S. Castro Jr.</Card.Title>
                    <Card.Text>
                    Member of Executive Committee
                    </Card.Text>
                    <Button variant="dark text-white">See More</Button>
                </Card.Body>
                </Card>
           </Container>
        <br/>
           <Container>
            <div> 
                    <hr/>
                <h1><center>Audit Committee</center></h1>
                    <hr/>
            </div>
                <Card className={styles.headcontent}>
                <Card.Img variant="top" src="../image.png" />
                <Card.Body>
                    <Card.Title>Mr. Leonardo B. Cua</Card.Title>
                    <Card.Text>
                    Chairman of Audit Committee
                    </Card.Text>
                    <Button variant="dark text-white">See More</Button>
                </Card.Body>
                </Card>
                <Card className={styles.headcontent}>
                <Card.Img variant="top" src="../image.png" />
                <Card.Body>
                    <Card.Title>Mr. Delfin S. Castro Jr.</Card.Title>
                    <Card.Text>
                    Member of Audit Committee
                    </Card.Text>
                    <Button variant="dark text-white">See More</Button>
                </Card.Body>
                </Card>
                <Card className={styles.headcontent}>
                <Card.Img variant="top" src="../image.png" />
                <Card.Body>
                    <Card.Title>Mr. Rae Alvyn H. Lim</Card.Title>
                    <Card.Text>
                    Member of Executive Committee
                    </Card.Text>
                    <Button variant="dark text-white">See More</Button>
                </Card.Body>
                </Card>
           </Container>
           <br/>
           <Container>
            <div> 
                    <hr/>
                <h1><center>Governance Committee</center></h1>
                    <hr/>
            </div>
                <Card className={styles.headcontent}>
                <Card.Img variant="top" src="../image.png" />
                <Card.Body>
                    <Card.Title>Mr. Leonardo B. Cua</Card.Title>
                    <Card.Text>
                    Chairman of Governance Committee
                    </Card.Text>
                    <Button variant="dark text-white">See More</Button>
                </Card.Body>
                </Card>
                <Card className={styles.headcontent}>
                <Card.Img variant="top" src="../image.png" />
                <Card.Body>
                    <Card.Title>Mr. Nathaniel C. Go</Card.Title>
                    <Card.Text>
                    Member of Governance Committee
                    </Card.Text>
                    <Button variant="dark text-white">See More</Button>
                </Card.Body>
                </Card>
                <Card className={styles.headcontent}>
                <Card.Img variant="top" src="../image.png" />
                <Card.Body>
                    <Card.Title>Mr. Ramoncito B. Cabalu</Card.Title>
                    <Card.Text>
                    Member of Governance Committee
                    </Card.Text>
                    <Button variant="dark text-white">See More</Button>
                </Card.Body>
                </Card>
           </Container>

           <br/>
           <Container>
            <div> 
                    <hr/>
                <h1><center>Compensation Committee</center></h1>
                    <hr/>
            </div>
                <Card className={styles.headcontent}>
                <Card.Img variant="top" src="../image.png" />
                <Card.Body>
                    <Card.Title>Mr. Delfin S. Castro Jr.</Card.Title>
                    <Card.Text>
                    Chairman of Compensation Committee
                    </Card.Text>
                    <Button variant="dark text-white">See More</Button>
                </Card.Body>
                </Card>
                <Card className={styles.headcontent}>
                <Card.Img variant="top" src="../image.png" />
                <Card.Body>
                    <Card.Title>Mr. Nathaniel C. Go</Card.Title>
                    <Card.Text>
                    Member of Compensation Committee
                    </Card.Text>
                    <Button variant="dark text-white">See More</Button>
                </Card.Body>
                </Card>
                <Card className={styles.headcontent}>
                <Card.Img variant="top" src="../image.png" />
                <Card.Body>
                    <Card.Title>Mr. David V. Gamboa</Card.Title>
                    <Card.Text>
                    Member of Compensation Committee
                    </Card.Text>
                    <Button variant="dark text-white">See More</Button>
                </Card.Body>
                </Card>
           </Container>

           <br/>
           <Container>
            <div> 
                    <hr/>
                <h1><center>Nomination Committee</center></h1>
                    <hr/>
            </div>
                <Card className={styles.headcontent}>
                <Card.Img variant="top" src="../image.png" />
                <Card.Body>
                    <Card.Title>Mr. Rae Alvyn H. Lim</Card.Title>
                    <Card.Text>
                    Chairman of Nomination Committee
                    </Card.Text>
                    <Button variant="dark text-white">See More</Button>
                </Card.Body>
                </Card>
                <Card className={styles.headcontent}>
                <Card.Img variant="top" src="../image.png" />
                <Card.Body>
                    <Card.Title>Mr. Nathaniel C. Go</Card.Title>
                    <Card.Text>
                    Member of Nomination Committee
                    </Card.Text>
                    <Button variant="dark text-white">See More</Button>
                </Card.Body>
                </Card>
                <Card className={styles.headcontent}>
                <Card.Img variant="top" src="../image.png" />
                <Card.Body>
                    <Card.Title>Mr. Ramoncito B. Cabalu</Card.Title>
                    <Card.Text>
                    Member of Nomination Committee
                    </Card.Text>
                    <Button variant="dark text-white">See More</Button>
                </Card.Body>
                </Card>
           </Container>
            <br/>
        </div>
    </div>
    )
}
  