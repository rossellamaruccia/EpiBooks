import { Component } from "react";
import { Container, Row, Card } from "react-bootstrap";
import HistoryBooks from '../../public/data/history.json'
class BookCards extends Component {
    render() {
        return (
            <Container>
                <Row xs={1} sm={2} md={3} lg={4}>
                    {HistoryBooks.map((book) => {
                        return (
                            <Card key={book.asin}>
                                <Card.Img src={book.img} />
                        </Card>
                    )
                    }
                    )}

                </Row>

            </Container>
        )
    }
}

export default BookCards