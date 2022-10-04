import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./components/HomeScreen";

import "./App.css";
const App = () => {
  return (
    <div className="container">
      <Header />
      <Container>
        <HomeScreen />
      </Container>
      <Footer />
    </div>
  );
};

export default App;
