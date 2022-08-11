import { Typography } from '@mui/material';
import React from 'react';
import "./FeaturedProducts.css";

//import product picture
import camera from "../../../images/product/camera.jpeg";
import laptop from "../../../images/product/laptop.jpeg";
import mobile from "../../../images/product/mobile.jpeg";
import shirt from "../../../images/product/shirt.jpeg";
import ProductCard from '../productCard/ProductCard';

const productData = [
  {
    name:"DSLR Camera",
    price:60000,
    mainInfo:"Its a main info for camera",
    image:{url:camera, public_id:"its a public id"}, 
    productId:"its a product id"
  },
  {
    name:"HP-Pavilion",
    price:120000,
    mainInfo:"8GB RAM 1TD HARD DISK",
    image:{url:laptop, public_id:"its a public id"}, 
    productId:"its a product id"
  },
  {
    name:"HP-Pavilion",
    price:120000,
    mainInfo:"8GB RAM 1TD HARD DISK",
    image:{url:laptop, public_id:"its a public id"}, 
    productId:"its a product id"
  },
  {
    name:"Iphone 13 pro max",
    price:150000,
    mainInfo:"Main info for this phone",
    image:{url:mobile, public_id:"its a public id"}, 
    productId:"its a product id"
  },
  {
    name:"Iphone 13 pro max",
    price:150000,
    mainInfo:"Main info for this phone",
    image:{url:mobile, public_id:"its a public id"}, 
    productId:"its a product id"
  },
  {
    name:"Cool T-shirt",
    price:500,
    mainInfo:"Super cool and very cheap t-shirt for men",
    image:{url:shirt, public_id:"its a public id"}, 
    productId:"its a product id"
  },
  {
    name:"Cool T-shirt",
    price:500,
    mainInfo:"Super cool and very cheap t-shirt for men",
    image:{url:shirt, public_id:"its a public id"}, 
    productId:"its a product id"
  },
  {
    name:"DSLR Camera",
    price:60000,
    mainInfo:"Its a main info for camera",
    image:{url:camera, public_id:"its a public id"}, 
    productId:"its a product id"
  },
]

const FeaturedProducts = () => {
  return (
    <div className='featuredProductBox'>
      <Typography className='headerText'>Featured Products</Typography>
      <div className="productItemBox">
        {productData && productData.map((p, i)=>(
          <ProductCard key={i} pName={p.name} pImage={p.image.url} pId={p.productId} pPrice={p.price} pMainInfo={p.mainInfo} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts;