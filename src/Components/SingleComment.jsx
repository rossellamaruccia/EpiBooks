import { ListGroup } from "react-bootstrap"

const SingleComment = (props) => {
    return (
      <ListGroup.Item key={props.review._id}>
        {props.review.comment} - {props.review.rate}/5
      </ListGroup.Item>
    )
}

export default SingleComment