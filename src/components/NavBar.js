import { Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import linked from '../assets/61109.png'
import g from '../assets/github.png'
import logo from '../assets/logo.png';
import { Linkedin } from "react-bootstrap-icons";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const[scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50){
                seScrolled(true);
            }else{
                seScrolled(false)
            }
        }
        window.addEventListener("scroll",onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    return(
    <Navbar expand="lg" className = {scrolled ? "scrolled": ""}>
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className = "navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className = {activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick = {() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className = {activeLink === 'skills' ? 'active navbar-link': 'navbar-link'} onClick = {() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href = "#projects" className = {activeLink === 'projects' ? 'active navbar-link': 'navbar-link'} onClick = {() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className = "navbar-text">
            <div className = "social-icon">
                <a href = "https://www.linkedin.com/in/vandoran-huston-5ba657223" target="_blank"><img src = {linked} alt = ""/></a>
            </div>
            <div className = "social-icon">
                <a href = "https://github.com/VandoranHuston" target="_blank"><img src = {g} alt = ""/></a>
            </div>
            <Nav.Link href = "#connect" className = {activeLink === 'connect' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('connect')}><button><span>Let's Connect</span></button></Nav.Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}