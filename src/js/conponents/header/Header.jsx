import React from "react";
import "./style.css";

function Header() {                 // 상위 헤더부분
  return (
    <div className="container"> 
      <div onclick="localhost:3000">My Todo List</div>       
      <div>React</div>
    </div>
  );
}
export default Header;
