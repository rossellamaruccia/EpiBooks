import { useState, useEffect } from "react"
import CommentsList from "srcComponentsCommentsList.jsx"
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
        setComments({
          comments: ArrayOfComments,
        })
        setID({ id: bookId })
      })

      .catch((err) => {
        console.log("Error:", err)
      })
  }

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
}

export default CommentArea
