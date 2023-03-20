import React from "react";
import "./styles.css";
import Home from "./screens/Home";
import Merchandise from "./screens/Merchandise";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./screens/About";
import Blog from "./screens/Blog";
import BlogPost from "./screens/Blog/Post";
import Contact from "./screens/Contact";
import Wrapper from "./components/Wrapper";
import Default from "./components/Default";

function App() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<Wrapper/>}>
          <Route element={<Home />} index />
          <Route path="about" element={<About />} />
          <Route path="merchandise" element={<Merchandise />} />
          <Route path="blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost/>}/>
          <Route path="contact-us" element={<Contact />} />
          <Route path="*" element={<Default/>}/>
        </Route>
        </Routes>
    </Router>
  );
}

export default App;
