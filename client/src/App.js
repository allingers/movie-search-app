import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import { Container } from "react-bootstrap";
import SearchBar from "./components/Serach/SearchBar";
import CategoryCards from "./components/CategoryCards/CategoryCards";
import MovieGrid from "./components/MovieGrid/MovieGrid";
// import HeroCarousel from "./components/HeroCarousel/HeroCarousel";

const App = () => {
  return (
    <div>
      <Header />
      <Container fluid="xl">
        <SearchBar />

        <CategoryCards />
        <MovieGrid />
      </Container>
      {/* <HeroCarousel /> */}
      {/* Här kan du lägga till resten av din applikation */}
    </div>
  );
};

export default App;
