import { Component } from "react"
import SingleBook from "./SingleBook"
import { Col, Form, Row } from "react-bootstrap"

class BookList extends Component {
  state = {
    searchQuery: "",
    selectedBook: "",
    border: false,
  }

  changeBookListState = (asin, boolean) => {
    this.setState({
      ...this.state,
      selectedBook: asin,
      border: boolean,
    })
  }

  render() {
    return (
      <>
        <Row className="justify-content-center mt-5">
          <Col className="text-center">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca un libro"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="g-2 mt-3">
          {this.props.books
            .filter((b) =>
              b.title.toLowerCase().includes(this.state.searchQuery)
            )
            .map((b) => (
              <Col
                key={b.asin}
                onClick={() => this.props.changeAppState(b.asin)}
              >
                <SingleBook
                  book={b}
                  changeBookListState={this.changeBookListState}
                />
              </Col>
            ))}
        </Row>
      </>
    )
  }
}

export default BookList
