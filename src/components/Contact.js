import { useState } from "react"
import { Container, Row, Col} from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg"

export const Contact = () => {
    const formInitialDetails ={
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});


    return(
        <section className="contact" id="connect">
            <Container>
                <Row className="align-itens-center">
                    <Col md ={6}>
                        <img scr={contactImg} alt="Contact Us"/>
                    </Col>
                    <Col md ={6}>
                        <h2>Get in Touch</h2>
                        <form>
                            <Row>
                                <Col sm={6} className="px-1">
                                    {/* parei aqui 1:09:15 */}
                                </Col>
                                <Col sm={6} className="px-1"></Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}