import { Button, Form } from "react-bootstrap"
import { Component } from "react"
const myUrl = "https://striveschool-api.herokuapp.com/api/comments/"
        const myKey =
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTBkYmRjMmY0YmQ0NzAwMTU4NWIxZjEiLCJpYXQiOjE3NjM2NDg0MTYsImV4cCI6MTc2NDg1ODAxNn0.oKSCNefb9N-2U-1FPkbJS5Or45wHZ0YYdwJj4u0HviU"
    

class AddComment extends Component {
  state = {
    newReview: {
      comment: "",
      rate: "5",
      elementId: this.props.asin,
    },
    }
    
    
  render() {
    return (
        <Form onSubmit={e => {
            e.preventDefault()
            fetch(myUrl, {
                method: 'POST',
                body: JSON.stringify(this.state.newReview),
                headers:
                    {
                        Authorization: myKey,
                        'Content-type': 'application/json'
                    }
                }
            )
                .then((res) => {
                if (res.ok) {alert('Commento salvato')}
            else {throw new Error('errore nel salvataggio')}
        })
                .catch(err => {
            console.log('error: ', err)
        })
    
      }}>
        <Form.Group className="mb_3">
          <Form.Label>Commento</Form.Label>
          <Form.Control required
            type="text"
            value={this.state.newReview.comment}
            onChange={(e) => {
              this.setState({
                newReview: {
                  ...this.state.newReview,
                  comment: e.target.value,
                },
              })
            }}
          ></Form.Control>
          <Form.Label>Voto</Form.Label>
          <Form.Select
            value={this.state.newReview.rate}
            onChange={(e) => {
              this.setState({
                newReview: {
                  ...this.state.newReview,
                  rate: e.target.value,
                },
              })
            }}
          >
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit">Invia</Button>
      </Form>
    )
  }
}

export default AddComment