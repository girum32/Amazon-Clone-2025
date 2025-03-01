import React, { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import { Carousel } from "react-responsive-carousel";
import CarouselEffect from "./components/Carousel/Carousel";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/>
      <CarouselEffect/>
    </> 
  );
}

export default App;
