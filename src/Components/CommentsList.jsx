import { ListGroup } from "react-bootstrap"
import SingleComment from './SingleComment'


const CommentsList = (props) => {
    return (
        <ListGroup>
            {props.reviews.map((review) => {
                return (
                    <SingleComment key={review._id} review = {review} />
                )
            })}
        </ListGroup>
    )
}

export default CommentsList