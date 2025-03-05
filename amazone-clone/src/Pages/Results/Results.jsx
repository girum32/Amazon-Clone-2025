import React, { useEffect, useState } from "react";
import classes from "./Results.module.css";
import Layout from "../../components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../API/endPoints";
import ProductCard from "../../components/Product/ProductCard";

function Results() {
  const [results, setResults] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    axios
      .get(`${baseUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category/{categoryName}</p>
        <hr />
        <div className={classes.products__grid}>
          {results?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default Results;
