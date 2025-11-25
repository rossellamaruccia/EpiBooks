
import { Card } from "react-bootstrap"
import CommentArea from "./CommentArea"
import { useState } from "react"

const SingleBook = (props) => {

  const [selected, setSelected] = useState(false)
  const [id, setId] = useState(props.book.asin)

    return (
      <Card
        onClick={() => { setSelected({ selected: true }), setId({id: props.book.asin})}}
        style={{ border: selected ? "3px solid red" : "none" }}
      >
        <Card.Img variant="top" src={props.book.img} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>
            {props.book.title}
          </Card.Title>
          <CommentArea asin={props.book.asin} />
        </Card.Body>
      </Card>
    )
  }


export default SingleBook

