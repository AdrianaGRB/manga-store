import React, { useRef } from "react";
import About from "../../components/About/About";
import Categories from "../../components/Categories/Categories";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Popular from "../../components/popular/Popular";
import Products from "../../components/products/Products";
import { ProductsCardsContainer } from "../../components/products/ProductsStyles";
import ProductsWrap from "../../components/products/ProductsWrap";

const Home = () => {
  const mangaRef = useRef();

  const doScroll = () => {
    window.scrollTo(
      mangaRef.current.getBoundingClientRect().x,
      mangaRef.current.getBoundingClientRect().y
    );
  };

  return (
    <>
      <Navbar doScroll={doScroll} />

      <Hero />
      <About />
      <Popular />
      <Categories />
      {/* Products section */}
      <ProductsWrap>
        <Products />
      </ProductsWrap>
    </>
  );
};

export default Home;
