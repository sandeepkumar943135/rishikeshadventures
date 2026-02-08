import { useState } from "react";
import "../assets/css/header-banner.css";

const Hero = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    console.log(form); // later send to API
  };

  return (
    <section className="hero-banner1">
      <div className="overlay">
        <div className="container">
          <div className="hero-content">
            <h1>Unleash Your Thrill-Seeking Spirit</h1>
            <h3>Start Your Adventure Trip With Rishikesh Adventures</h3>
            <p>Camping • Rafting • Adventure • Sports</p>
 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;