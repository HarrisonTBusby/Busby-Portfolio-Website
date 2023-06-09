import React from 'react'
import '../App.css';
import NavBarComponent from './NavbarComponent';
import { useState } from 'react';
import { Container, Row, Col, Card, Button, Carousel, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headshots from '../Assets/output-onlinepngtools.png';
import NicePic from '../Assets/IMG_2398.jpg';
import NicePic2 from '../Assets/IMG_1711.jpg';
import Graduation from '../Assets/Graduation.jpg'
import BcLogo from '../Assets/BuildComp_Logo-removebg-preview (1).png';
import PokeBall from '../Assets/Poké_Ball_icon.svg.png';
import Cloud from '../Assets/iconizer-10cE3B01.png';
import Resume from '../Assets/HarrisonBusbyResume.pdf'
import { SiReact, SiBootstrap, SiHtml5, SiJavascript, SiCss3, SiCsharp, SiDotnet, SiMysql, SiNodedotjs, SiTailwindcss, SiFigma, SiPostman, SiSlack, SiVisualstudiocode, SiJirasoftware, SiMicrosoftazure, SiTypescript, SiNotion, SiGithub, SiLinkedin } from "react-icons/si"
import ModalComponent from './ModalComponent';

export default function MainPageComponent() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const handleClick1 = () => {
    setShow1(!show1);
  }

  const handleClick2 = () => {
    setShow2(!show2);
  }

  const handleClick3 = () => {
    setShow3(!show3)
  }

  const handleGit = () => {
    window.open('https://github.com/HarrisonTBusby?tab=repositories', "_blank");
  }

  const handleLink = () => {
    window.open('https://www.linkedin.com/in/harrison-busby-a4241018b/', "_blank");
  }

  const handleSummary = () => {
    window.location.href = '#Summary';
  }

  const handleSkills = () => {
    window.location.href = '#Skills';
  }

  const handleProject = () => {
    window.location.href = '#Projects';
  }

  const handleAbout = () => {
    window.location.href = '#AboutMe';
  }

  const handleBc = () => {
    window.open('', '_blank');
  }

  const handlePokemon = () => {
    window.open('https://busbyhpokemonapi.azurewebsites.net/', "_blank")
  }

  const handleWeather = () => {
    window.open('https://busbyhweatherappredux.azurewebsites.net/', '_blank');
  }


  return (
    <body>
      <NavBarComponent />
      <Container>
        <Row className='mt-5'>
          <Col id='Summary' xs={12} md={12} lg={6} xl={6} className='d-flex justify-content-center'>
            <Row className='descBox mt-5'>
              <div className='d-flex justify-content-end'>
                <ModalComponent />
              </div>
              <h1 style={{ letterSpacing: '5px' }}><strong>Harrison Busby</strong></h1>
              <h2>Web Developer</h2>
              <p className='mt-3 descText'>Hello! My name is Harrison Busby and I am a Web Developer. I am currently an attendee CodeStack Academy, an academy based out of San Joaquin County of Education that specializes in both Front-End and Back-End development. I am hoping to graduate in August.</p>


            </Row>
          </Col>

          <Col xs={12} md={12} lg={6} xl={6} className='d-flex justify-content-center mt-5'>
            <img src={Headshots} className='headshotBackground' />
          </Col>
        </Row>

        <div className='ProjectSpacer2 d-flex justify-content-center'>
          <div className='projHeading' id='Skills'>
            <span>S</span>
            <span>k</span>
            <span>i</span>
            <span>l</span>
            <span>l</span>
            <span>s</span>
          </div>
        </div>

        <div className='descBox mt-5' style={{ padding: 30 }}>
          <Row>
            <h4 className='d-flex justify-content-center'>Languages</h4>
            <Col className='d-flex justify-content-center mt-3'>
              <SiHtml5 size={80} style={{ marginRight: 10 }} />
              <SiCss3 size={80} style={{ marginRight: 10 }} />
              <SiJavascript size={80} style={{ marginRight: 10 }} />
              <SiTypescript size={80} style={{ marginRight: 10 }} />
              <SiCsharp size={80} style={{ marginRight: 10 }} />
              <SiMysql size={80} style={{ marginRight: 10 }} />
            </Col>
          </Row>
          <Row>
          <h4 className='d-flex justify-content-center mt-3'>Frameworks & Libraries</h4>
            <Col className='d-flex justify-content-center mt-3'>
              <SiReact size={80} style={{ marginRight: 10 }} />
              <SiBootstrap size={80} style={{ marginRight: 10 }} />
              <SiTailwindcss size={80} style={{ marginRight: 10 }} />
              <SiDotnet size={80} style={{ marginRight: 10 }} />
              <SiNodedotjs size={80} style={{ marginRight: 10 }} />
            </Col>
          </Row>
          <Row className='mt-3'>
            <h4 className='d-flex justify-content-center'>Productivity Tools</h4>
            <Col className='d-flex justify-content-center mt-3'>
              <SiFigma size={80} style={{ marginRight: 10 }} />
              <SiPostman size={80} style={{ marginRight: 10 }} />
              <SiSlack size={80} style={{ marginRight: 10 }} />
              <SiNotion size={80} style={{ marginRight: 10 }} />
              <SiVisualstudiocode size={80} style={{ marginRight: 10 }} />
              <SiJirasoftware size={80} style={{ marginRight: 10 }} />
              <SiMicrosoftazure size={80} style={{ marginRight: 10 }} />
            </Col>
          </Row>
        </div>

        <div className='ProjectSpacer2 d-flex justify-content-center'>
          <div className='projHeading' id='Projects'>
            <span>P</span>
            <span>r</span>
            <span>o</span>
            <span>j</span>
            <span>e</span>
            <span>c</span>
            <span>t</span>
            <span>s</span>
          </div>
        </div>

        <div className='ProjectSpacer2'>
          <Row>
            <Col xs={12} xxl={4} style={{ marginBottom: '20px' }}>
              <Card className='cardBg'>
                <button onClick={handleClick1} className='buttonShow'><Card.Img variant="top" src={BcLogo} className='projImg1' /></button>

                {show1 && (
                  <Card.Body className='animate'>
                    <Card.Title className='d-flex justify-content-center cardHeader'>BuildComp - In Development</Card.Title>
                    <Card.Text>
                      <ul>
                        <li>Fullstack application that finds pc components based on your criteria.</li>
                        <li>Uses a Webscraper made in C# to get the most recent data</li>
                        <li>As the project manager, I led a team of two skilled developers to successfully deliver the project on time and with high quality output. We worked together closely and efficiently to ensure that all project goals were achieved. </li>
                        <li>Created using React, Typescript, HTML5. CSS, Bootstrap, Azure Cloud Services.</li>
                      </ul>
                    </Card.Text>
                  </Card.Body>
                )}
              </Card>
            </Col>
            <Col xs={12} xxl={4} style={{ marginBottom: '20px' }}>
              <Card className='cardBg'>
                <button onClick={handleClick2} className='buttonShow'><Card.Img variant="top" src={PokeBall} className='projImg2' /></button>

                {show2 && (
                  <Card.Body className='animate'>
                    <Card.Title className='d-flex justify-content-center cardHeader'><button className='linkBtn' onClick={handlePokemon}><u>Pokedex API</u>-Visit Here</button></Card.Title>
                    <Card.Text>
                      <ul>
                        <li>An application that takes information from the PokeAPI and displays them in the trading card format.</li>
                        <li>Used the free PokeAPI to display the name, ID, sprite, abilities, moves, evolution tree, habitat, and typing of a Pokemon. </li>
                        <li>Ability to search based off ID or name of Pokemon. </li>
                        <li>Has the ability to Favorite Pokemon using Local Storage</li>
                        <li>Created using React, Javascript, HTML5, CSS, Bootstrap, Azure Cloud Services.</li>
                      </ul>
                    </Card.Text>
                  </Card.Body>
                )}

              </Card>
            </Col>
            <Col xs={12} xxl={4} style={{ marginBottom: '20px' }}>
              <Card className='cardBg'>
                <button onClick={handleClick3} className='buttonShow'><Card.Img variant="top" src={Cloud} className='projImg3' /></button>

                {show3 && (
                  <Card.Body className='animate'>
                    <Card.Title className='d-flex justify-content-center cardHeader'><button className='linkBtn' onClick={handleWeather}><u>Weather Application</u>-Visit Here</button></Card.Title>
                    <Card.Text>
                      <ul>
                        <li>An application that finds the 5-day weather forecast for areas the user searches.</li>
                        <li>Used the 5-Day weather forecast API to get the high temperature, the low temperature, and the type of weather (i.e. cloudy, rainy, etc...).</li>
                        <li>Has the ability to Favorite a city and Delete a city using Local Storage</li>
                        <li>Created desktop and mobile prototype using Figma</li>
                        <li>Created using React, Javascript, HTML5, CSS, Bootstrap, Azure Cloud Services</li>
                      </ul>
                    </Card.Text>
                  </Card.Body>
                )}

              </Card>
            </Col>
          </Row>

        </div>

        <div className='ProjectSpacer'>
          <div>
            <div className='projHeading d-flex justify-content-center' id='AboutMe'>
              <span>A</span>
              <span>b</span>
              <span>o</span>
              <span>u</span>
              <span>t</span>
              <span>&nbsp;</span>
              <span>M</span>
              <span>e</span>

            </div>
          </div>

          <Row className='mt-5 descBox'>
            <Col xs={12} s={12} md={12} l={6} xl={6} xxl={6} className='d-flex justify-content-center'>
              <Carousel style={{ maxWidth: '100%', maxHeight: '100%' }}>
                <Carousel.Item>
                  <img src={NicePic} style={{ width: '100%', height: 'auto', borderRadius: '4px', objectFit: 'cover' }} />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={Graduation} style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px', objectFit: 'cover' }} />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={NicePic2} style={{ width: '100%', height: 'auto', borderRadius: '4px', objectFit: 'cover' }} />
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col xs={12} md={12} lg={12} xl={6} xxl={6}>
              <p className='descText'>I was born in Sacramento, California, and subsequently moved to Redding, where I spent my formative years. After residing in Redding for 16 years, I relocated to Stockton to pursue my passion for Fullstack development at Codestack Academy. During my time at the academy, I have acquired in-depth knowledge and skills in Fullstack development, but I have discovered that my true interest lies in Front-end development, where I can leverage my passion for designing and creating web-related projects.</p>

              <p className='descText'>When I'm not engaged in coding or programming, I cherish spending quality time with my family and friends. Additionally, I have been an avid pianist for over 15 years, having taught myself to play. I have had the opportunity to showcase my skills professionally by performing background music for several events and playing in a band on a few occasions.</p>
            </Col>
          </Row>
        </div>
      </Container>

      <footer className='mt-5' id='Socials'>
        <div className='footerBg'>
          <Container>
            <Row className='mt-5' style={{ padding: '40px' }}>
              <Col xs={12} md={6} lg={6} xl={6} xxl={6}>
                <h4><u>Directives</u></h4>
                <div className='mt-5'>
                  <button className='linkBtn' style={{ fontSize: '15px' }} onClick={handleSummary}>
                    <u>Summary</u>
                  </button>
                </div>
                <div className='mt-4'>
                  <button className='linkBtn' style={{ fontSize: '15px' }} onClick={handleSkills}>
                    <u>Skills</u>
                  </button>
                </div>
                <div className='mt-4'>
                  <button className='linkBtn' onClick={handleProject} style={{ fontSize: '15px' }}>
                    <u>Projects</u>
                  </button>
                </div>
                <div className='mt-4'>
                  <button className='linkBtn' onClick={handleAbout} style={{ fontSize: '15px' }}>
                    <u>About Me</u>
                  </button>
                </div>
              </Col>

              <Col xs={12} md={6} lg={6} xl={6} xxl={6} className='mt-5 mt-md-0'>
                <h4><u>Github Repositories/LinkedIn</u></h4>
                <div className='mt-4' style={{ fontSize: '15px', }}>
                  <SiGithub size={50} onClick={handleGit} style={{ marginRight: 10 }} />
                  <SiLinkedin size={50} onClick={handleLink} />
                </div>
                <br />

                <h4 className='mt-3'><u>Contact Information</u></h4>
                <div className='mt-4'>Email - harrisontbusby@gmail.com</div>
                <br />
                <div>Phone Number - (530) 945-4842</div>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </body>
  )
}
