import {Container, Row, Col} from "react-bootstrap"
import linked from '../assets/61109.png'
import g from '../assets/github.png'

export const Footer = () => {
    return(
        <footer className = "footer">
            <Container>
                <Row className = "align-item-center">
                    <Col sm = {6} className = "text-center text-sm-end">
                        <div className = "social-icon">
                            <a href = ""><img src ={linked}></img></a>
                            <a href = ""><img src ={g}></img></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}