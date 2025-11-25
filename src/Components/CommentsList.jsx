import { ListGroup } from "react-bootstrap"
import SingleComment from "./SingleComment"

const CommentsList = (props) => {
  return (
    <>
      <ListGroup style={{ color: "black" }} className="mt-2">
        {props.reviews.map((comment) => (
          <SingleComment comment={comment} key={comment._id} />
        ))}
      </ListGroup>
    </>
  )
}

export default CommentsList
