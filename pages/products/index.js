import ProductList from "../../componenets/Products/ProductList";
import Products from "../../componenets/Products/Products";
import Layout from "../../componenets/Layout";
import axios from "axios";

const index = (props) => {
  return (
    <>
      <ProductList />
      <Products products={props.products} />
    </>
  );
};

index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps() {
  let products = [];

  await axios.get("http://127.0.0.1:8000/api/products").then(({ data }) => {
    products = data;
  });

  return {
    props: {
      products: products,
    },
  };
}

export default index;
