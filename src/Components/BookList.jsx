import SingleBook from "./SingleBook"
import { Col, Form, Row } from "react-bootstrap"

import { useState } from "react"

const Booklist = (props) => {
const [searchQuery, setSearchQuery] = useState("")

  return (
    <>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={4} className="text-center">
          <Form.Group>
            <Form.Control
              type="search"
              placeholder="Cerca un libro"
              value={searchQuery}
              onChange={(e) => setSearchQuery({ searchQuery: e.target.value })}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="g-2 mt-3">
        {props.books
          .filter((b) => b.title.toLowerCase().includes(searchQuery))
          .map((b) => (
            <Col xs={12} md={4} key={b.asin}>
              <SingleBook book={b} />
            </Col>
          ))}
      </Row>
    </>
  )
}

export default Booklist