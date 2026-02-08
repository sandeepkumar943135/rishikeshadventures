import { useState } from "react";
import "../assets/css/hero.css";

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
    <section className="hero-banner">
      <div className="overlay">
        <div className="container">
          <div className="hero-content">
            <h1>Unleash Your Thrill-Seeking Spirit</h1>
            <h3>Start Your Adventure Trip With Rishikesh Adventures</h3>
            <p>Camping • Rafting • Adventure • Sports</p>

            {/* Glass Enquiry Box */}
            <div className="callback-box">
              <h5>Request For Callback (It's Free)</h5>

              <form onSubmit={submit}>
                <input
                  name="name"
                  placeholder="Full Name"
                  onChange={handleChange}
                  required
                />
                <input
                  name="phone"
                  placeholder="Contact No."
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email ID"
                  onChange={handleChange}
                  required
                />
                <input
                  type="date"
                  name="date"
                  onChange={handleChange}
                  required
                />

                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;