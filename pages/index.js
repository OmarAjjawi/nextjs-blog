import Categories from "../componenets/Categories/Categories";
import Announcment from "../componenets/UI/Announcment";
import Footer from "../componenets/UI/Footer";
import Navbar from "../componenets/UI/Navbar";
import Products from "../componenets/Products/Products";

export default function Home() {
  return (
    <>
      <Announcment />
      <Navbar />
      <Categories/>
      <Products/>
      <Footer/>
      <Announcment />
    </>
  );
}
