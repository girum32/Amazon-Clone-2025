import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from './Product.module.css'

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        // console.log(res);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log("Error fetching products:", err);
      });
  }, []);

  return (
    <section className={classes.products__container}>
      {products.length > 0 ? (
        products.map((singleProduct) => (
          <ProductCard product={singleProduct} key={singleProduct.id} />
        ))
      ) : (
        <p>Loading products...</p> // Show message if API is slow
      )}
    </section>
  );
}

export default Product;
