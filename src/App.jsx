import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Features from "@/pages/Features";
import Rules from "@/pages/Rules";
import Store from "@/pages/Store";
import Apply from "@/pages/Apply";
import Contact from "@/pages/Contact";
import CustomCursor from "@/components/ui/CustomCursor";

function App() {
  return (
    <Router>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="features" element={<Features />} />
          <Route path="rules" element={<Rules />} />
          <Route path="store" element={<Store />} />
          <Route path="apply" element={<Apply />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

