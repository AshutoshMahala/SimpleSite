import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Media from 'react-bootstrap/Media';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';


function BasicInfoOverlay(){
  return (
    <div className="overlay3 glass2">
      <Container>
        <Row className="profile-pic-row">
          <Col lg={4} ></Col>
          <Col lg={4} className="profileImageContainer">
            <Image className="sm-profile-img d-block d-md-none" fluid  src="./images/ashu-2.jpg"/>
            <Image className="lg-profile-img d-none d-lg-block" fluid  src="./images/ashu-2.jpg"/>
          </Col>
          <Col lg={4}></Col>
        </Row>
        <Row className="md-profile-padder d-none d-md-block d-lg-none"></Row>
        <Row>
          <Col md={2} className="d-none d-md-block d-lg-none">
            <Image className="md-profile-img d-none d-md-block d-lg-none" fluid  src="./images/ashu-2.jpg"/>
          </Col>
          <Col>
        <Row>
          <Col md={6}>
            <div className="l1 tile glass05">
            <p>
              Name: Ashutosh Mahala
            </p>
            </div>
          </Col>
          <Col md={6}>
          <div className="l1 tile glass05">
            <p>
              Email: ashutoshmahala@live.com
            </p>
            </div>
          </Col>
          <Col md={6}>
          <div className="l1 tile glass05">
            <p>
              LinkedIn:   <Button href="https://www.linkedin.com/in/ashutosh-mahala/">View Profile</Button>
            </p>
            </div>
          </Col>
          <Col md={6}>
          <div className="l1 tile glass05">
            <p>
              GitHub:   <Button className="btn-dark" href="https://github.com/AshutoshMahala">My work</Button>
            </p>
            </div>
          </Col>
        </Row>
        </Col>
        </Row>
      </Container>
    </div>
  );
}

function DetailBox(){
  return (
    <div className="overlay2 glass2">
        <Container>
          <Row>
          <Col lg={4} ></Col>
          <Col lg={4}></Col>
          <Col lg={4}></Col>
          </Row>
          <Row>

          </Row>
        </Container>
    </div>
  );
}

function Grid(){
  return (
    <>
    <Navbar className="glass2">
    <Navbar.Brand href="#home"><Image className="navbarlogo" src="./images/mlogo2.png"/></Navbar.Brand>
  </Navbar>
    <Container fluid>
      <Row></Row>
      <Row>
        <Col lg={1}></Col>
        <Col lg={4} className="vertical-center">
          <Row>
            <BasicInfoOverlay/>
          </Row>
        </Col>
        <Col lg={1}></Col>
        <Col lg={5}>
          <Row>
          <DetailBox/>
          </Row>
        </Col>
        <Col lg={1}></Col>
      </Row>
    </Container>
    </>
  );
}

function App() {
  return (
    <>
            <video className="bgvid" loop={true} autoPlay={true} muted playsInline={true} poster="./images/waves.jpg">
	            <source src="./videos/wave-original.mp4" type="video/mp4"/>
                Your browser doesn't support the video tag.
            </video>
    {/* <div id="overlay">
      <img className="profileImage" src="./images/ashu.jpg"/>
    </div> */}
    <Grid/>
    <div id="overlay2">
    </div>
    </>
  );
}

export default App;
