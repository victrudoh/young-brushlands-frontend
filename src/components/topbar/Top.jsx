import React from 'react'

const Top = () => {

    function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }

  return (
    <>
      <div className="topnav" id="myTopnav">
        <a href="#home" class="active">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a className="icon" onclick={myFunction()}>
          <i class="fa fa-bars">SA</i>
        </a>
      </div>
    </>
  );
}

export default Top