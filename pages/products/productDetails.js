import Layout from '../../componenets/Layout';
import ProductDetails from '../../componenets/Products/ProductDetails'

const productDetails = () => {
  return (
    <>
    <ProductDetails/>
    </>
  )
}

productDetails.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default productDetails