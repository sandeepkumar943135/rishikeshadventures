import "../assets/css/activities.css";
import { useNavigate } from "react-router-dom"; 
import Navbar from "../components/Navbar";
import HeaderBanner from "../components/header-banner"; 
 
import Footer from "../components/Footer.jsx";

const activities = [
  {
    title: "Bungee Jump",
    image:
      "https://rishikeshadventures.com/images/bungee_jumping.jpeg",
    slug: "bungee-jumping",
  },
  {
    title: "Giant Swing",
    image:
      "https://rishikeshadventures.com/images/giant_swing.jpeg",
    slug: "giant-swing",
  },
  {
    title: "Flying Fox",
    image:
      "https://rishikeshadventures.com/images/flying_fox.jpeg",
    slug: "flying-fox",
  },
  {
    title: "River Rafting",
    image:
      "https://rishikeshadventures.com/images/river_rafting.jpeg",
    slug: "river-rafting",
  },
  {
    title: "Camping",
    image:
      "https://rishikeshadventures.com/images/rishikesh_camping.jpeg",
    slug: "camping",
  },
  {
    title: "Paragliding",
    image:
      "https://rishikeshadventures.com/images/paragliding-rishikesh-uttarakhand.jpg",
    slug: "paragliding",
  },
];

const Activities = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <HeaderBanner/>
      <section className="activities">
        <div className="container">
          <h2 className="section-title">
            Popular <span>Activities Offered</span>
          </h2>

          <div className="activity-grid">
            {activities.map((item, index) => (
              <div
                key={index}
                className="activity-card"
                onClick={() => navigate(`/activity/${item.slug}`)}
              >
                <img src={item.image} alt={item.title} />
                <div className="overlay">
                  <h3>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Activities;