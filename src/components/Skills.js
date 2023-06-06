import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import angular from "../assets/angular.png"
import java from "../assets/java.png"
import py from "../assets/python.png"
import react from "../assets/react.png"
import swift from "../assets/swift.png"
import html from "../assets/html.png"


export const Skills = () =>{
    const responsive = {
        superLargeDesktop: {
            breakpoint: {max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };

    return(
        <section className = "skill" id = "skills">
            <Container>
                <Row>
                    <Col>
                    <div className = "skill-box">
                        <h2>
                            Skills
                        </h2>
                        <p>Programming Languages and Frameworks</p>
                        <Carousel responsive={responsive} infinite = {true} className = "skill-slider">
                            <div className="item">
                                <img src = {py} alt="Image"/>
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src = {java} alt="Image"/>
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src = {html} alt="Image"/>
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src = {swift} alt="Image"/>
                                <h5>Swift</h5>
                            </div>
                            <div className="item">
                                <img src = {react} alt="Image"/>
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src = {angular} alt="Image"/>
                                <h5>Angular</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}