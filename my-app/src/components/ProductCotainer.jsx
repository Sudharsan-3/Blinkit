import React from "react";
import ProductList from "./ProductList";
import data from "../data/Food.json";
import data1 from "../data/Rolling.json";
import data2 from "../data/Snacks .json";
import data3 from "../data/Hookah.json";
import data4 from "../data/Mouth-fresheners.json";
import data5 from "../data/Juices.json";
import data6 from "../data/Candies .json";

const ProductContainer = () => {
  const title = "Dairy, Bread & Eggs";
  const title1 = "Rolling paper & tobacco";
  const title2 = "Snacks & Munchies";
  const title3 = "Hookah";
  const title4 = "Mouth fresheners";
  const title5 = "Cold Drinks & Juices";
  const title6 = "Candies & Gums";

  return (
    <div>
      <ProductList title={title} data={data} />
      <ProductList title={title1} data={data1} />
      <ProductList title={title2} data={data2} />
      <ProductList title={title3} data={data3} />
      <ProductList title={title4} data={data4} />
      <ProductList title={title5} data={data5} />
      <ProductList title={title6} data={data6} />
      
    </div>
  );
};

export default ProductContainer;
