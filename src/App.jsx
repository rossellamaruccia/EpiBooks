import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from "./MyNav"
import MyFooter from "./MyFooter"
import Welcome from './Welcome'
import AllTheBooks from './AllTheBooks'

const Home = function () {
  return (
    <>
      <MyNav />
      <Welcome />
      <AllTheBooks />
      <MyFooter />
    </>
  )
}
