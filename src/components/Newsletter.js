import {Alert} from "react-bootstrap";

export const Newsletter = ({subscribe, status, message}) => {
    return(
        <Col lg={12}>
            <div className="newsletter-bx">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>Subscribe to our Newsletter</h3>
                        {status === 'sending' && <Alert>Sending...</Alert>}
                        {status === 'error' && <Alert variant="danger">{message}</Alert>} {/* parei aqui 1:30:03 */}
                        {status === 'sending' && <Alert>Sending...</Alert>}
                    </Col>
                </Row>
            </div>
        </Col>
    )
}