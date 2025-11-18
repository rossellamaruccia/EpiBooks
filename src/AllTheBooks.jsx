import { Container, Row, Col} from 'react-bootstrap'

import { Card } from "react-bootstrap";

const AllTheBooks = function () {
    return (
        <>
            <Container>
                <Row xs={1} sm={2} md={3} lg={4}>
                    <Card>
                <Card.img></Card.img>
            </Card>
                </Row>
                
                </Container>
        </>
    )
}