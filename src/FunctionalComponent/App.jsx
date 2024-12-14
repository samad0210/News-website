import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";

export default function App() {
  let [language,setLanguage] = useState("hi")
  let [search,setSearch] = useState("")

   function changelanguage(input){
    setLanguage(input)
  }

   function changeSearch(input){
    setSearch(input)
  }
 
  
    return (
      <>
        <BrowserRouter>
          <Navbar changelanguage={changelanguage} changeSearch={changeSearch} />

          <Routes>
            <Route path="" element={<Home search={search} language={language} q="ALL" />} />
            <Route path="/ALL" element={<Home search={search} language={language} q="ALL" />} />
            <Route path="/Politics" element={<Home search={search} language={language} q="Politics" />} />
            <Route path="/Crime" element={<Home search={search} language={language} q="Crime" />} />
            <Route path="/Science" element={<Home search={search} language={language} q="Science" />} />
            <Route path="/Business" element={<Home search={search} language={language} q="Business" />} />
            <Route path="/Entertainment" element={<Home search={search} language={language} q="Entertainment" />} />
            <Route path="/Technology" element={<Home search={search} language={language} q="Technology" />} />
            <Route path="/Sports" element={<Home search={search} language={language} q="Sports" />} />
            <Route path="/Cricket" element={<Home search={search} language={language} q="Cricket" />} />
            <Route path="/IPL" element={<Home search={search} language={language} q="IPL" />} />
            <Route path="/Economics" element={<Home search={search} language={language} q="Economics" />} />
            <Route path="/International" element={<Home search={search} language={language} q="International" />} />
            <Route path="/India" element={<Home search={search} language={language} q="India" />} />
            <Route path="/Jokes" element={< Home search={search} language={language} q="Jokes" />} />
            <Route path="/*" element={<Home search={search} language={language} q="ALL" />} />

            
          </Routes>

          <Footer />
        </BrowserRouter>
      </>
    );
  
}
