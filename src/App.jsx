import MyNav from "./MyNav.jsx"
import MyFooter from "./MyFooter.jsx"
import Welcome from "./Welcome.jsx"
import BookList from "./Components/BookCards.jsx"
import MyForm from "./Components/myForm.jsx"

const App = () => {
  return (
    <>
      <MyNav />
      <Welcome />
      <BookList />
      <MyForm />
      <MyFooter />
    </>
  )
}

export default App
