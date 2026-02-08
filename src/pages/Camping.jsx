import Navbar from "../components/Navbar";
import HeaderBanner from "../components/header-banner.jsx";
import PackageCard from "../components/PackageCard";

import { homeCampData } from "../services/api.js";
import Footer from "../components/Footer.jsx";

function Camping() {
  return (
    <>
      <Navbar />
      <HeaderBanner/>

      <div className="container my-5">
        <h3 className="mb-4">Popular Packages</h3>

        <div className="row">
          {homeCampData.map((item) => (
            <PackageCard key={item.id} item={item} />
          ))}
        </div>
      </div>
      <Footer />

    </>
  );
}

export default Camping;