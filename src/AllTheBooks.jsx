import { Container, Row } from "react-bootstrap"

import { Card } from "react-bootstrap"

import SciFiBooks from "../public/scifi.json"
import RomanceBooks from "../public/romance.json"
import HorrorBooks from "../public/horror.json"
import HistoryBooks from "../public/history.json"
import FantasyBooks from "../public/fantasy.json"

const AllTheBooks = function () {
  return (
    <>
      <Container>
              <Row xs={1} sm={2} md={3} lg={4}>
                  <h1>Sci Fi</h1>
          {SciFiBooks.map((SciFiBook) => {
            return (
              <Card>
                    <Card.img src= {SciFiBook.img}></Card.img>
              </Card>
            )
          })}
                  <h1>Romance</h1>
          {RomanceBooks.map((RomanceBook) => {
            return (
              <Card>
                    <Card.img src= {RomanceBook.img}></Card.img>
              </Card>
            )
          })}
                  <h1>Horror</h1>
          {HorrorBooks.map((HorrorBook) => {
            return (
              <Card>
                    <Card.img src= {HorrorBook.img}></Card.img>
              </Card>
            )
          })}
                  <h1>History</h1>
          {HistoryBooks.map((HistoryBook) => {
            return (
              <Card>
                    <Card.img src= {HistoryBook.img}></Card.img>
              </Card>
            )
          })}
                  <h1>Fantasy</h1>
          {FantasyBooks.map((FantasyBook) => {
            return (
              <Card>
                    <Card.img src= {FantasyBook.img}></Card.img>
              </Card>
            )
          })}
          
        </Row>
      </Container>
    </>
  )
}

export default AllTheBooks