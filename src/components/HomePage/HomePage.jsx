import React from "react";
import "./HomePage.css";
import main from "../../assets/images/main.png";
import delivery from "../../assets/images/Delivery.png";
import fastdelivery from "../../assets/images/fastdelivery.png";
import tracking from "../../assets/images/tracking.png";
import trusted from "../../assets/images/trusted.png";
import secure from "../../assets/images/secure.png";
import view from "../../assets/images/view.png";
import burger from "../../assets/images/burger.png";
import pizza from "../../assets/images/pizza.png";
import biryani from "../../assets/images/biryani.png";
import delights from "../../assets/images/delights.png";
import bowl from "../../assets/images/bowl.png";
import sushi from "../../assets/images/sushi.png";
import delhi from "../../assets/images/delhi.png";
import curry from "../../assets/images/curry.png";
import scooter from "../../assets/images/scooter.png";

const HomePage = () => {
  const cardData1 = [
    {
      img: fastdelivery,
      title: "Lightning Fast Delivery",
      desc: "Get your food delivered in 30 minutes or less with our optimized logistics network.",
    },
    {
      img: tracking,
      title: "Real-Time Tracking",
      desc: "Track your order every step of the way with live GPS updates.",
    },
    {
      img: trusted,
      title: "Trusted Restaurants",
      desc: "Curated selection of 10,000+ verified restaurants with genuine reviews.",
    },
    {
      img: secure,
      title: "Secure Payments",
      desc: "Multiple payment options with bank-grade security for peace of mind.",
    },
  ];

  const cardData2 = [
    {
      img: burger,
      title: "The Burger Joint",
      desc: "American",
      timer: "25-30 min",
    },
    {
      img: pizza,
      title: "Napoli Express",
      desc: "Italian",
      timer: "30-35 min",
    },
    {
      img: biryani,
      title: "Royal Biryani House",
      desc: "Indian",
      timer: "35-40 min",
    },
    {
      img: delights,
      title: "Sweet Delights",
      desc: "Desserts",
      timer: "20-25 min",
    },
    {
      img: bowl,
      title: "Fresh Bowl Co.",
      desc: "Healthy",
      timer: "25-30 min",
    },
    {
      img: curry,
      title: "Curry Palace",
      desc: "Indian",
      timer: "30-35 min",
    },
    {
      img: sushi,
      title: "Sakura Sushi",
      desc: "Japanese",
      timer: "35-40 min",
    },
    {
      img: delhi,
      title: "Delhi Darbar",
      desc: "North Indian",
      timer: "25-30 min",
    },
  ];

  return (
    <section className="main">
      <div className="homepage">
        <div className="text">
          <div className="badge">
            <p> • Now delivering in 50+ cities</p>
          </div>
          <h2>
            Discover food you love. <span> Delivered fast.</span>
          </h2>
          <p>
            From local favorites to global cuisines — discover restaurants,
            order with ease, and enjoy lightning-fast delivery powered by smart
            logistics.
          </p>
          <div className="buttons">
            <button>Order Food</button>
            <button>Partner With Us</button>
          </div>
          <div className="stats">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <p>50k+ Happy Customers</p>
          </div>
        </div>
        <div className="background">
          <img src={main} alt="" />
          <div className="secondary">
            <img src={delivery} alt="" />
            <div>
              <h3>Order on the way!</h3>
              <p>Arriving in 12 min</p>
            </div>
          </div>
        </div>
      </div>
      <div className="whyfoodfleet">
        <h2>
          Why Choose <span>FoodFleet</span>
        </h2>
        <p>
          We combine food discovery with smart logistics to deliver the best
          experience
        </p>
        <div className="cards">
          {cardData1.map((card, idx) => (
            <div className="card" key={idx}>
              <img src={card.img} alt={card.title} />
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="discover">
        <h3>
          Discover Amazing <span>Restaurants</span>
        </h3>
        <div>
          <div className="explore">
            <p>
              Explore our curated collection of top-rated restaurants near you.
            </p>
            <div className="view-collections">
              <button>
                View All Restaurants <img src={view} alt="" />
              </button>
            </div>
          </div>

          <div className="card-container">
            <div className="cards">
              {cardData2.map((card, idx) => (
                <div className="card" key={idx}>
                  <img src={card.img} alt={card.title} />
                  <div className="text">
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                    <div className="timer-container">
                      <p>{card.timer}</p>
                      <button>Order</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="smartlogistics">
        <div className="text">
          <div className="badge">
            <p>Smart Logistics</p>
          </div>
          <h2>
            Powered by Intelligent <span> Delivery Network</span>
          </h2>
          <div className="paragraph">
            <p>
              Our AI-powered logistics system ensures your food arrives fresh
              and hot.
            </p>
            <p>
              With real-time route optimization and a network of dedicated
              riders, we guarantee the fastest delivery times in the industry.
            </p>
          </div>
          <div className="divs">
            <div className="mints">
              <h3>30 min</h3>
              <p>Avg. Delivery Time</p>
            </div>
            <div className="mints">
              <h3>25K+</h3>
              <p>Active Riders</p>
            </div>
          </div>
        </div>
        <div className="background">
          <img src={scooter} alt="" />
        </div>
      </div>
      <div className="statistics">
        <div>
          <h2>10M+</h2>
          <p>Orders Delivered</p>
        </div>
        <div>
          <h2>50+</h2>
          <p>Cities Covered</p>
        </div>
        <div>
          <h2>15k+</h2>
          <p>Restaurant Partners</p>
        </div>
        <div>
          <h2>99.2%</h2>
          <p>Delivery Success</p>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
