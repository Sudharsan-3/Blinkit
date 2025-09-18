import React from 'react'
import PreviewImages from './PreviewImages'
import All from "../../data/AllProducts.json"
import Notfounded from '../search not founded/Notfounded';

const Detailed = ({ id }) => {
  console.log(id, "from the detailed component");

  const product = All.find((p) => Number(p.id) === Number(id));
  console.log(product?.images, "from detailed page");

  return (
    <div>
      {product ? (
        <PreviewImages images={product.images} data ={product} />
        
      ) : (
        <Notfounded />
      )}
    </div>
  );
};

export default Detailed;
