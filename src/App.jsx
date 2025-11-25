import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import Welcome from "./components/Welcome"
// import AllTheBooks from './components/AllTheBooks'
import { Container, Row, Col } from "react-bootstrap"
import BookList from "./components/BookList"
import { Component } from "react"

import fantasy from '../public/data/fantasy.json'
import CommentArea from "./Components/CommentArea"

class App extends Component {
  state = {
    searchQuery: "", // ma poi diventerà 'Uno", 'Due' oppure 'Tre'
  }

  changeAppState = (value) => {
    this.setState({
      searchQuery: value,
    })
  }

  render() {
    return (
      <>
        <MyNav />
        <Container>
          <Welcome />
          <Row>
            {/* <AllTheBooks /> */}
            <Col md={6}>
              <BookList books={fantasy} changeAppState={this.changeAppState} />
            </Col>
            <Col md={6}>
              <CommentArea book={this.state.searchQuery} />
            </Col>
          </Row>
        </Container>
        <MyFooter />
      </>
    )
  }
}

export default App
