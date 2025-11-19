import Alert from "react-bootstrap/Alert"
import { Container } from "react-bootstrap"

const Welcome = function () {
  return (
    <>
      <Container>
        <Alert variant="secondary">
          <Alert.Heading>Welcome to Epibooks</Alert.Heading>
          <p>Where books are always Epic</p>
          <hr />
          <p className="mb-0">Find out about our suggestions an events</p>
        </Alert>
        <h2>
          “I know not all that may be coming, but be it what it will, I'll go to
          it laughing.” - H. Melville
        </h2>
      </Container>
    </>
  )
}

export default Welcome
