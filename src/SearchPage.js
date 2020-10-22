import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResults from "./SearchResults";
function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays . 26 agust to 30 august . 2 guest</p>
        <h1>Stays Nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More Filters</Button>
      </div>
      <SearchResults
        img="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
        location="CA California,USA"
        title="Stay at this spacies Edward House"
        description="1 guest . 1 bedroom . 1 Bed . 1.5 Shared Bathrooms . Wifi . Kitchen . Free Parking . Washing Machine"
        star={4.73}
        price="30$ / Night"
        total="300$ total"
      />
      <SearchResults
        img="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
        location="CA California,USA"
        title="Stay at this spacies Edward House"
        description="1 guest . 1 bedroom . 1 Bed . 1.5 Shared Bathrooms . Wifi . Kitchen . Free Parking . Washing Machine"
        star={4.73}
        price="30$ / Night"
        total="300$ total"
      />
      <SearchResults
        img="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
        location="CA California,USA"
        title="Stay at this spacies Edward House"
        description="1 guest . 1 bedroom . 1 Bed . 1.5 Shared Bathrooms . Wifi . Kitchen . Free Parking . Washing Machine"
        star={4.73}
        price="30$ / Night"
        total="300$ total"
      />
      <SearchResults
        img="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
        location="CA California,USA"
        title="Stay at this spacies Edward House"
        description="1 guest . 1 bedroom . 1 Bed . 1.5 Shared Bathrooms . Wifi . Kitchen . Free Parking . Washing Machine"
        star={4.73}
        price="30$ / Night"
        total="300$ total"
      />
      <SearchResults
        img="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
        location="CA California,USA"
        title="Stay at this spacies Edward House"
        description="1 guest . 1 bedroom . 1 Bed . 1.5 Shared Bathrooms . Wifi . Kitchen . Free Parking . Washing Machine"
        star={4.73}
        price="30$ / Night"
        total="300$ total"
      />
      <SearchResults
        img="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
        location="CA California,USA"
        title="Stay at this spacies Edward House"
        description="1 guest . 1 bedroom . 1 Bed . 1.5 Shared Bathrooms . Wifi . Kitchen . Free Parking . Washing Machine"
        star={4.73}
        price="30$ / Night"
        total="300$ total"
      />
    </div>
  );
}
export default SearchPage;
