import { Tab } from 'react-bootstrap'
import { ProjectCard } from './ProjectCard'
import {Container, Row, Col} from "react-bootstrap"
import Nav from 'react-bootstrap/Nav'

export const Projects = () => {
    const school = [
        {
            title: "E-Store",
            description: "Group project in SWEN-261 using Angular and Java",
            imgUrl:''
        },
        {
            title: "Minesweeper",
            description: "Group Project in GCIS-124 using Java and JavaFX",
            imgUrl:''
        }
    ]
    const projects = [
        {
            title: "Netflix Clone",
            description: "Clone of Netflix app coded in Xcode using SwiftUI and UIKit.",
            imgUrl: ''
        },
        {
            title: "Personal Website",
            description: "What you are currently using; serves as a portfolio and is coded in react",
            imgUrl: ''
        },
        {
            title: "Music App - In Development",
            description: "App that allows users to find music videos coded in Xcode using Swift and UIKit",
            imgUrl: ''
        },
        {
            title: "Flask-React App - In Development",
            description: "Personal project using flask and react",
            imgUrl: ''
        }
    ]
    return (
        <section className = 'projects' id = "projects">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>Personal Projects that demonstrate my passion for learning new coding languages and frameworks both inside and outside of the classroom</p>
                    <Tab.Container id = "projects-tabs" defaultActiveKey="first">
                        <Nav variant = "pills" defaultActiveKey = "/home">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Personal Projects</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey = "second">School Projects</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey = "first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return(
                                                <ProjectCard key = {index}{...project}/>
                                            )
                                        }
                                        )
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey = "second">
                            <Row>
                                    {
                                        school.map((project, index) => {
                                            return(
                                                <ProjectCard key = {index}{...project}/>
                                            )
                                        }
                                        )
                                    }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}