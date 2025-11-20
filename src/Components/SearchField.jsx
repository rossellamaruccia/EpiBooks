import { Component } from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"

class SearchField extends Component {
  render() {
    return (
      <>
        <Container>
          <Form inline>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2"
                />
              </Col>
              <Col xs="auto">
                <Button type="submit">Submit</Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </>
    )
  }
}

export default SearchField
