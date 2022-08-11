import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProductsBySlug } from "../../actions";
import Layout from "../../components/Layout";
import { useParams } from "react-router-dom";

const ProductListPage = (props) => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  useEffect(() => {
    console.log(slug);
    dispatch(getProductsBySlug(slug));
  }, []);
  return <Layout>Product List Page</Layout>;
};

export default ProductListPage;
