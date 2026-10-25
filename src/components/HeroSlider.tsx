import { useState, useEffect } from "react";
import "./HeroSlider.css";

import sliderOne from "../assets/sliderone.png";
import sliderTwo from "../assets/slidertwo.png";
import sliderThree from "../assets/sliderthree.png";
import sliderFour from "../assets/sliderfour.png";

const slides = [
  {
    image: sliderOne,
    label: "WELCOME TO JSHOP",
    title: "Little Finds, Big Happiness.",
    description: "Discover everyday essentials made for your lifestyle.",
    button: "Explore Products",
  },
  {
    image: sliderTwo,
    label: "YOUR EVERYDAY FAVORITES",
    title: "Find Something Lovely.",
    description: "Browse stylish accessories and useful daily essentials.",
    button: "Shop Now",
  },
  {
    image: sliderThree,
    label: "UPGRADE YOUR EVERYDAY",
    title: "Style Meets Simplicity.",
    description: "Discover tech, fashion, beauty, and more in one place.",
    button: "Discover More",
  },
  {
    image: sliderFour,
    label: "A LITTLE SOMETHING FOR YOU",
    title: "Your Next Favorite Awaits.",
    description: "Explore our collection and find your next favorite item.",
    button: "Start Exploring",
  },
];

interface HeroSliderProps {
  onShopNow: () => void;
}

function HeroSlider({ onShopNow }: HeroSliderProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = slides[activeSlide];

  const previousSlide = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };
useEffect(() => {
  const timer = setInterval(() => {
    setActiveSlide((current) => (current + 1) % slides.length);
  }, 3000);

  return () => clearInterval(timer);
}, []);
  return (
    <section
      className="hero-slider"
      style={{ backgroundImage: `url(${slide.image})` }}
    >
      <div className="hero-shade" />

      <button
        className="hero-arrow hero-prev"
        onClick={previousSlide}
        aria-label="Previous slide"
      >
        ‹
      </button>

      <div className="hero-content" key={activeSlide}>
        <span>{slide.label}</span>
        <h1>{slide.title}</h1>
        <p>{slide.description}</p>
        <button onClick={onShopNow}>{slide.button}</button>
      </div>

      <button
        className="hero-arrow hero-next"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        ›
      </button>

      <div className="hero-dots">
        {slides.map((item, index) => (
          <button
            key={item.label}
            className={activeSlide === index ? "active" : ""}
            onClick={() => setActiveSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSlider;
