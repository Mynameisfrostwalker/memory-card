import React from "react";
import "./css/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

/**
 * @module App
 */

/**
 * App component
 * @return {JSX}
 */
const App = () => (
  <div>
    <Header />
    <Main />
    <Footer />
  </div>
);

export default App;
