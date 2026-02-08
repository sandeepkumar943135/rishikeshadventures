import React from "react";
import { useParams } from "react-router-dom";
// import "../assets/css/packageDetails.css";

const PackageDetails = () => {
  const { id, slug } = useParams();

  return (
    <div className="container py-5">
      <h1 className="mb-3 text-capitalize">
        {slug.replace(/-/g, " ")}
      </h1>

      <p className="text-muted">Package ID: {id}</p>

      <img
        src="https://via.placeholder.com/900x400"
        alt={slug}
        className="img-fluid rounded mb-4"
      />

      <h4>About This Package</h4>
      <p>
        Enjoy an unforgettable adventure in Rishikesh with premium
        camping, meals, activities and scenic views.
      </p>

      <h5>Highlights</h5>
      <ul>
        <li>✔ Riverside camping</li>
        <li>✔ Bonfire & music</li>
        <li>✔ Adventure activities</li>
        <li>✔ Safe & secure stay</li>
      </ul>

      <button className="btn btn-dark rounded-pill mt-3">
        Book Now
      </button>
    </div>
  );
};

export default PackageDetails;