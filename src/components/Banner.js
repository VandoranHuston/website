import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import {useState, useEffect} from "react"
import headerImage from '../assets/header-image.png'


export const Banner = () => {
    const toCycle = ["Software Engineer", "Web Developer", "Student"];
    const [loopNum, setLoopNum] = useState(0);
    const[isDeleting, setIsDeleting] = useState(false);
    const[text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 10);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toCycle.length;
        let fullText = toCycle[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);

        if( isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }

        if(!isDeleting && updatedText ===fullText){
            setIsDeleting(true);
            setDelta(period)
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }
    return (
        <section className = "banner" id ="home">
            <Container>
                <Row className = "align-items-center">
                    <Col xs = {12} md ={6} xl = {7}>
                        <span className = "tagline">Welcome to Vandoran's Portfolio</span>
                        <h1>{"Hi I'm Vandoran Huston\t"}</h1>
                        <h2><span className = "wrap">{text}</span></h2>
                        <p>I am a second year student at Rochester Institute of Technology looking for a Summer and Fall coop in 2023</p>
                    </Col>
                    <Col xs = {12} md = {6} xl = {5}>
                        <img src = {headerImage} alt = "Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}