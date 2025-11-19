import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"

const MyNav = function () {
  return (
    <>
      <Container fluid>
        <Nav>
          <Nav.Item>
            <Nav.Link href="#">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </>
  )
}

export default MyNav
