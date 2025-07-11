import React from "react";
import HeroSection from "./components/HeroSection";
import ProductCategories from './components/ProductCategories';
import QualitySection from './components/QualitySection';
import CovidAwareness from './components/CovidAwareness';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Portfolio from './components/Portfolio';

const App = () => {
  return (
    <>
      <HeroSection />
      <div id="about"><AboutUs /></div>
      <div id="portfolio"><Portfolio /></div>
      <QualitySection />
      <ProductCategories />
      <CovidAwareness />
      <div id="team"></div>
      <div id="locations"></div>
      <div id="contact"><Footer /></div>
    </>
  );
};

export default App;
