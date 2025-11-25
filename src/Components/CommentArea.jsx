import { useState, useEffect } from "react"
import CommentsList from "./CommentsList.jsx"
import AddComment from "./AddComment"

const CommentArea = (props) => {
  // state = {
  //   comments: [],
  //   id: "",
  // }

  const [comments, setComments] = useState()
  const [id, setID] = useState()
  let bookId = props.book

  fetchFunction = () => {
    const myUrl = "https://striveschool-api.herokuapp.com/api/comments/"
    const myKey =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTBkYmRjMmY0YmQ0NzAwMTU4NWIxZjEiLCJpYXQiOjE3NjM2NDg0MTYsImV4cCI6MTc2NDg1ODAxNn0.oKSCNefb9N-2U-1FPkbJS5Or45wHZ0YYdwJj4u0HviU"
    fetch(myUrl + bookId, { headers: { Authorization: myKey } })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("Error: " + res.status)
        }
      })

      .then((ArrayOfComments) => {
        console.log(ArrayOfComments)
<<<<<<< HEAD
        this.setState({
          comments: ArrayOfComments,
          id: bookId,
        })
=======
        setComments({
          comments: ArrayOfComments,
        })
        setID({ id: bookId })
>>>>>>> hooks-exercises
      })

      .catch((err) => {
        console.log("Error:", err)
      })
  }

<<<<<<< HEAD
  componentDidUpdate() {
    this.getComments()
  }

  render() {
    return (
      <>
        <h3>Recensioni</h3>
        <CommentsList reviews={this.state.comments} />
        <AddComment asin={this.props.asin} />
      </>
    )
  }
=======
  useEffect(() => {
    fetchFunction()
  }, [id])

  return (
    <>
      <h3>Recensioni</h3>
      <CommentsList reviews={comments} />
      <AddComment asin={props.asin} />
    </>
  )
>>>>>>> hooks-exercises
}

export default CommentArea
