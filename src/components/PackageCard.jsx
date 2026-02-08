import React, { useState } from "react";
import "../assets/css/cards.css";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  const navigate = useNavigate();   // ✅ inside
  const [showModal, setShowModal] = useState(false);  // ✅ inside
  const createSlug = (text) =>
  text.toLowerCase().replace(/\s+/g, "-");

  const {
    title,
    location,
    price,
    image,
    rating = 0,
    amenities = [],
    duration,
  } = item;

  const totalStars = 5;

  const renderStars = () =>
    [...Array(totalStars)].map((_, i) => {
      const starNumber = i + 1;
      let percent = 0;

      if (rating >= starNumber) percent = 100;
      else if (rating >= starNumber - 0.5) percent = 50;

      return (
        <span key={i} className="star-wrap">
          <span className="star-bg">★</span>
          <span className="star-fill" style={{ width: `${percent}%` }}>
            ★
          </span>
        </span>
      );
    });

  return (
    <>
      <div className="col-12 col-sm-6 col-lg-4 mb-4 d-flex">
        <div className="travel-card shadow">
          <div className="image-wrapper">
            <img src={image} alt={title} />
            <span className="price">₹{price}/Person</span>
          </div>

          <div className="travel-content">
            <h5 className="title">{title}</h5>

            <p className="location">📍 {location}</p>

            {duration && <p className="duration">🕒 {duration}</p>}

            <div className="rating">{renderStars()}</div>

            {/* Amenities */}
            <div className="amenities">
              {amenities.map((a, i) => (
                <span key={i} className="badge">
                  {a}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="button-group">
              <button
                className="btn btn-outline-dark rounded-pill"
                onClick={() =>
                  navigate(
                    `/package/${item.id}/${createSlug(
                      `${item.title}-${item.location}`
                    )}`
                  )
                }
              >
                More Details
              </button>

              <button
                className="btn btn-warning rounded-pill"
                onClick={() => setShowModal(true)}
              >
                Enquiry
              </button>

              <button className="btn btn-dark rounded-pill">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Modal INSIDE return */}
      {showModal && (
        <div className="enquiry-modal">
          <div className="modal-box">
            <h4>Enquiry for {title}</h4>
            <p>📍 {location}</p>

            <form>
              <input placeholder="Your Name" required />
              <input placeholder="Phone" required />
              <input placeholder="Email" />
              <textarea placeholder="Message" />

              <div className="modal-buttons">
                <button type="submit" className="btn btn-dark">
                  Send
                </button>

                <button
                  type="button"
                  className="btn btn-light"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;