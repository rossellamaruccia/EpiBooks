import { Component } from "react"
import HistoryBooks from "../../public/data/history.json"
import FantasyBooks from "../../public/data/fantasy.json"
import HorrorBooks from "../../public/data/horror.json"
import RomanceBooks from "../../public/data/romance.json"
import SciFiBooks from "../../public/data/scifi.json"
import SingleBook from "../SingleBook"
import { Container, Row } from "react-bootstrap"

class BookList extends Component {
  render() {
    return (
      <>
        <Container fluid>
          <Row>
            
              <h3>History</h3>

              {HistoryBooks.map((book) => {
                return <SingleBook asin={book.asin} img={book.img} />
              })}
            
          </Row>
          <Row>
            
              <h3>SciFi</h3>

              {SciFiBooks.map((book) => {
                return <SingleBook asin={book.asin} img={book.img} />
              })}
            
          </Row>
          <Row>
            
              <h3>Romance</h3>

              {RomanceBooks.map((book) => {
                return <SingleBook asin={book.asin} img={book.img} />
              })}
            
          </Row>
        </Container>
      </>
    )
  }
}

export default BookList
