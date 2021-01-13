import React from "react";
import Header from "../common/Header";
import PageBody from "../common/PageBody";
import bird from "../../../public/images/bird.jpg";

function Homepage() {
  return (
    <div className="App">
      <Header />
      <PageBody>
        <br />
        <h1>Hi my name is Noah!</h1>
        <hr />
        <h3> Welcome to my webpage! </h3>
        <img class="profile" src={bird} width="150" alt="Avatar" />
        <p>
          Check out a game I made using Unity!
          <a href={"https://play.unity.com/mg/other/snowman-racers-1"}>
            {" "}
            This is my game!
          </a>
        </p>
      </PageBody>
      <sendEmail />
    </div>
  );
}

export default Homepage;
