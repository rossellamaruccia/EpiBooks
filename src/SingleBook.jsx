import { Component } from "react"
import { Card, Button, CardSubtitle } from "react-bootstrap"

// Converti il tuo componente SingleBook in una classe,
// e crea il suo stato contenente una proprietà booleana selected.

class SingleBook extends Component {
  state = {
    Selection: {
      selected: false,
    },
  }

  render() {
    return (
      <Card style={{ width: "18rem" }} key={this.prop.asin}>
        <Card.Img src={this.prop.img} />
        <Button>Details</Button>
      </Card>
    )
  }

  ChangeStatus = () => {
    let ButtonArray = document.getElementsByClassName("Button")
    let switchState = function () {
        this.Selection.setState({ selected: true })
        console.log(this.state)
    }
    ButtonArray.forEach((button) => {
      button.addEventListener("click", switchState())
    })
  }
}
export default SingleBook
