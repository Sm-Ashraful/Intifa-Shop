import React from "react";
import Hero from "../../components/Hero";
import Layout from "../../components/Layout";
import NewProduct from "../../components/NewProduct";
import PopularProducts from "../../components/PopularProducts";
import ProductCategory from "../../components/ProductCategory";
import Footer from "../../components/Footer";

export default function HomePage(props) {
  return (
    <Layout>
      <Hero />
      <ProductCategory />
      <NewProduct />
      <PopularProducts />
      <Footer />
    </Layout>
  );
}
