import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import classes from './ProductItem.module.css'
import { useRouter } from 'next/router'

const ProductItem = (props) => {
    const router = useRouter();
  return (
    <div className={classes.container}>
        <div className={classes.circle}></div>
        <img src={`http://localhost:8000/storage/product/image/${props.image}`}/>
        <div className={classes.info} onClick={() => router.push('/products/productDetails')}>
            <div className={classes.icon}>
                <ShoppingCartOutlined />
            </div>
            <div className={classes.icon}>
                <SearchOutlined/>
            </div>
            <div className={classes.icon}>
                <FavoriteBorderOutlined/>
            </div>
        </div>
    </div>
  )
}

export default ProductItem