import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";
function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          description="Spces that more than hust a place to sleep"
          title="Unique Stays"
          price=""
        />
        <Card
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          description="Unique activities we can do together,led by the world of host"
          title="Online Experiences"
          price=""
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          description="Comfortable private spaces with the rooms for friends and family"
          title="Entire homes"
          price=""
        />
      </div>
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          description="Spces that more than hust a place to sleep"
          title="Unique Stays"
          price="130$/Night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          description="Unique activities we can do together,led by the world of host"
          title="Online Experiences"
          price="$400$/Night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          description="Comfortable private spaces with the rooms for friends and family"
          title="Entire homes"
          price="300$/Night"
        />
      </div>
    </div>
  );
}
export default Home;
