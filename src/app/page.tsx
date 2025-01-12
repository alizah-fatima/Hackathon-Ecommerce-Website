"use client"

import Hero from "@/components/hero";
import Products from "@/components/products";
import Offer from "@/components/offer";
import Features from "@/components/features";
import TrendingProducts from "@/components/TrendingProducts";
import DiscountItem from "@/components/DiscountItem";
import Categories from "@/components/categories";
import NewsLater from "@/components/NewsLater";
import Blog from "@/components/blog";
import Slider from "react-slick";
import LatestProduct from "@/components/LatestProduct";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Products/>
      <Slider/>
      <LatestProduct/>
      <Offer/>
      <Features/>
      <TrendingProducts/>
      <DiscountItem/>
      <Categories/>
      <NewsLater/>
      <Blog/>
    </div>
  );
}
