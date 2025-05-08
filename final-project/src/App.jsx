import React from "react";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import MenuSection from "./components/MenuSection";
import ContentSection from "./components/ContentSection";

export default function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <SideBar />
        <MenuSection/>
        <ContentSection/>
      </div>
    </div>
  );
}
