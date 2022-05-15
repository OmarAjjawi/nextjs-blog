import Announcment from './UI/Announcment'
import Navbar from './UI/Navbar'
import Footer from './UI/Footer'

const Layout = ({children}) => {
  return (
    <>
    <Announcment/>
    <Navbar/>
    <main>{children}</main>
    <Footer/>
    <Announcment/>
    </>
  )
}

export default Layout