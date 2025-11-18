import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from "./MyNav"
import MyFooter from "./MyFooter"
import Welcome from './Welcome'

const Home = function () {
  return (
    <>
      <MyNav />
      <Welcome />
      <MyFooter />
    </>
  )
}
