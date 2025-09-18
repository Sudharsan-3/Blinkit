import React from 'react'
import ProductList from '../ProductList'
import All from "../../data/AllProducts.json"

const ExtraProducts = ({ id }) => {
  // Get the product with the matching ID (use find for single item)
  const product = All.find((e) => Number(e.id) ===Number( id));

  // If no product found, render nothing or a fallback
  if (!product) return null;

  let category = product.category
  const title = "Similar products"
  const title1 = "Top 10 products in this category"
  const title2 = "People also bought"

  // Get all products in the same category
  const data = All.filter(
    (e) => e.category.toLowerCase() === category.toLowerCase()
  );
  console.log(data,category,"from ExtraProducts")

  return (
    <div>
      <ProductList title={title} data={data} />
      <ProductList title={title1} data={data} />
      <ProductList title={title2} data={data} />
    </div>
  );
};

export default ExtraProducts;
