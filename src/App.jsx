import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import CreatePost from "./components/CreatePost";
import PostList from "./PostList";
import "./App.css";

const App = () => {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
  
   
      <div className="app-container">
        <SideBar selectedTab={selectedTab} setSelectedTab= {setSelectedTab}></SideBar>

        <div className="content">
          <Header></Header>
          {selectedTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}
          <Footer></Footer>
        </div>
      </div>
   
 
  );
};

export default App;
