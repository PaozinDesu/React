import { useEffect, useState } from "react"
import { Alert, Col, Row } from "react-bootstrap"

export const Newsletter = ({ onValidated, status, message }) => {
    const [email, setEmail] = useState('')

    useEffect(() => {
        if (status === 'success') clearFailds
    }, [status])
    const handleSubmit = () => {
        e.preventDefault();
        email &&
            email.indexOf("@") > -1 &&
            onValidated({
                EMAIL: email
            })
    }

    const clearFailds = () => {
        setEmail('')

    }

    return (
        <Col lg={12}>
            <div className="newsletter-bx">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>Subscribe to our Newsletter</h3>
                        {status === 'subscribed' && <Alert>Sending...</Alert>}
                        {status === 'error' && <Alert variant="danger">{message}</Alert>}
                        {status === 'success' && <Alert variant="success">{message}</Alert>}
                    </Col>
                    <Col md={6} xl={7}>
                        <form onSubmit={handleSubmit}>
                            <div value="new-email-bx" >
                                <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                                <button type="submit">Submit</button>
                            </div>

                        </form>
                    </Col>
                </Row>
            </div>
        </Col>
    )

}