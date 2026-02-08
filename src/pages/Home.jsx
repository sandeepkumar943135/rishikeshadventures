import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PackageCard from "../components/PackageCard";

import { homeCampData } from "../services/api.js";
import Footer from "../components/Footer.jsx";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />

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

export default Home;