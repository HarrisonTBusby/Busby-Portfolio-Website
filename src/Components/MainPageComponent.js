import React from 'react'
import '../App.css';
import NavBarComponent from './NavbarComponent';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headshots from '../Assets/output-onlinepngtools.png';
import NicePic from '../Assets/IMG_2398.jpg';
import NicePic2 from '../Assets/IMG_1711.jpg';
import DevWeek from '../Assets/IMG_2752.JPG';
import BcLogo from '../Assets/BuildComp_Logo-removebg-preview (1).png';
import PokeBall from '../Assets/Poké_Ball_icon.svg.png';
import Cloud from '../Assets/cloud-icon-8.png';
import { AiFillGithub} from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';

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
    window.open('https://github.com/HarrisonTBusby?tab=repositories',"_blank");
  }

  const handleLink = () => {
    window.open('https://www.linkedin.com/in/harrison-busby-a4241018b/',"_blank");
  }

  const handleSummary = () => {
    window.location.href = '#Summary';
  }

  const handleProject = () => {
    window.location.href = '#Projects';
  }

  const handleAbout = () => {
    window.location.href = '#AboutMe';
  }

  const handleBc = () => {
    window.open();
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
          <Col>
            <Row className='descBox mt-5'>
              <h1><strong>Harrison Busby</strong></h1>
              <h2>Web Developer</h2>
              <p className='mt-3 descText'>Hello! My name is Harrison Busby and I am a Web Developer. I am currently an attendee CodeStack Academy, an academy based out of San Joaquin County of Education that specializes in both Front-End and Back-End development; I am hoping to graduate in August.</p>
            </Row>
          </Col>

          <Col className='d-flex justify-content-end'>
            <img src={Headshots} className='headshotBackground' />
          </Col>

        </Row>


        <div className='mt-5 d-flex justify-content-center'>
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
            <Col>
              <Card className='cardBg'>
                <button onClick={handleClick1} className='buttonShow'><Card.Img variant="top" src={BcLogo} className='projImg1' /></button>

                {show1 && (
                  <Card.Body className='animate'>
                    <Card.Title className='d-flex justify-content-center cardHeader'>BuildComp</Card.Title>
                    <Card.Text>
                      <ul>
                        <li>Fullstack application that finds pc components based on your criteria.</li>
                        <li>Uses a Webscraper made in C# to get the most recent data</li>
                        <li>As the project manager, I led a team of two skilled developers to successfully deliver the project on time and with high quality output. We worked together closely and efficiently to ensure that all project goals were achieved. </li>
                        <li>Created using React, Typescript, HTML5. CSS, Bootstrap, Azure Cloud Services.</li>
                        <li>Created prototype using Figma.</li>
                      </ul>
                    </Card.Text>
                  </Card.Body>
                )}
              </Card>
            </Col>
            <Col>
              <Card className='cardBg'>
                <button onClick={handleClick2} className='buttonShow'><Card.Img variant="top" src={PokeBall} className='projImg2' /></button>

                {show2 && (
                  <Card.Body className='animate'>
                    <Card.Title className='d-flex justify-content-center cardHeader'><button className='linkBtn' onClick={handlePokemon}><u>Pokedex API</u></button></Card.Title>
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
            <Col>
              <Card className='cardBg'>
                <button onClick={handleClick3} className='buttonShow'><Card.Img variant="top" src={Cloud} className='projImg3' /></button>

                {show3 && (
                  <Card.Body className='animate'>
                    <Card.Title className='d-flex justify-content-center cardHeader'><button className='linkBtn' onClick={handleWeather}><u>Weather Application</u></button></Card.Title>
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
            <div className='projHeading d-flex justify-content-end' id='AboutMe'>
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
            <Col>

              <p className='descText'>I was born in Sacramento, California, and subsequently moved to Redding, where I spent my formative years. After residing in Redding for 16 years, I relocated to Stockton to pursue my passion for Fullstack development at Codestack Academy. During my time at the academy, I have acquired in-depth knowledge and skills in Fullstack development, but I have discovered that my true interest lies in Front-end development, where I can leverage my passion for designing and creating web-related projects.</p>

              <p className='descText'>When I'm not engaged in coding or programming, I cherish spending quality time with my family and friends. Additionally, I have been an avid pianist for over 15  years, having taught myself to play. I have had the opportunity to showcase my skills professionally by performing background music for several events and playing   in a band on a few occasions.</p>

            </Col>

            <Col className='d-flex justify-content-end'>
              <Carousel>
                <Carousel.Item>
                  <img src={NicePic} style={{ width: '600px', borderRadius: '4px' }} />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={DevWeek} style={{ width: '600px', height: '450px', borderRadius: '4px', objectFit: 'cover' }} />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={NicePic2} style={{ width: '600px', height: '450px', borderRadius: '4px', objectFit: 'cover' }} />
                </Carousel.Item>
              </Carousel>
            </Col>


          </Row>
        </div>

      </Container>

      <footer className='mt-5' id='Socials'>
        <div className='footerBg'>
          <Row className='mt-5' style={{padding:'40px'}}>
            <Col>
            <h4><u>Directives</u></h4>
            <div className='mt-5'><button className='linkBtn' style={{fontSize:'15px'}} onClick={handleSummary}><u>Summary</u></button></div>
            <div className='mt-4'><button className='linkBtn' onClick={handleProject} style={{fontSize:'15px'}}><u>Projects</u></button></div>
            <div className='mt-4'><button className='linkBtn' onClick={handleAbout} style={{fontSize:'15px'}}><u>About Me</u></button></div>
            </Col>
            
            <Col className='' style={{textAlign:'end',fontSize:'15px'}}>
            <h4><u>Github Repositories/LinkedIn</u></h4>
              <div className='mt-4' style={{fontSize:'15px'}}>Github - <button className='linkBtn' onClick={handleGit}><u>https://github.com/HarrisonTBusby?tab=repositories</u></button></div>
              <br/>
              <div style={{fontSize:'15px'}}>LinkedIn - <button className='linkBtn' onClick={handleLink}><u>https://www.linkedin.com/in/harrison-busby-a4241018b/</u></button></div>

            <h4 className='mt-3'><u>Contact Information</u></h4>
              <div className='mt-4'>Email - harrisontbusby@gmail.com</div>
              <br/>
              <div>Phone Number - (530) 945-4842</div>
            </Col>
          </Row>
        </div>
      </footer>
    </body>
  )
}
