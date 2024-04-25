import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://png.pngtree.com/png-clipart/20230922/original/pngtree-food-delivery-logo-template-design-sign-menu-vector-png-image_12522801.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  return (
    <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media.istockphoto.com/id/1457979959/photo/snack-junk-fast-food-on-table-in-restaurant-soup-sauce-ornament-grill-hamburger-french-fries.webp?b=1&s=170667a&w=0&k=20&c=A_MdmsSdkTspk9Mum_bDVB2ko0RKoyjB7ZXQUnSOHl0="
      />
      <h4>{props.resName}</h4>
      <h5>{props.cuisine}</h5>
      <h5>{props.rating}</h5>
      <h5>{props.eta}</h5>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search"> Search</div>
      <div className="res-container">
        <RestaurantCard resName="Alpha foods" cuisine="Burgers, Fast Food" rating="4.7 stars" eta="35 minutes"/>
        <RestaurantCard resName="KFC" cuisine="Burger fries, American" rating="4.9 stars" eta="21 minutes"/>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
