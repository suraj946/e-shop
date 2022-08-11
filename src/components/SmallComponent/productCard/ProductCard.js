import React from 'react';
import "./productCard.css";
import {Link} from "react-router-dom";
import { Typography } from '@mui/material';

const ProductCard = ({pName, pImage, pId, pPrice, pMainInfo}) => {
  return (
    <div className='productCard'>
        <Link to={`/product/${pId}`}>
            <img className='productImage' src={pImage} alt={`${"pName"}`} />
        </Link>
        <div className="productInfo">
            <Typography>{pName}</Typography>
            <Typography>{pMainInfo.slice(0, 15)}...</Typography>
            <Typography style={{color:"#0008ff"}}>Rs.{pPrice}</Typography>
        </div>
    </div>
  )
}

export default ProductCard;