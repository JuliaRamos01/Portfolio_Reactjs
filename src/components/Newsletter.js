import {Alert} from "react-bootstrap";
import { useState } from "react";

export const Newsletter = ({subscribe, status, message}) => {

    const [email, setEmail] = useState('');
    const handleSubmit = () =>{

    }


    return(
        <Col lg={12}>
            <div className="newsletter-bx">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>Subscribe to our Newsletter</h3>
                        {status === 'sending' && <Alert>Sending...</Alert>}
                        {status === 'error' && <Alert variant="danger">{message}</Alert>} 
                        {status === 'success' && <Alert variant="success">{message}</Alert>}
                    </Col>
                    <Col md={6} xl={7}>
                        <form onSubmit={handleSubmit}></form>
                        <div className="new-email-bx">
                            <imput value={} />
                        </div>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}