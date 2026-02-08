import "../assets/css/footer.css";

const Footer = () => {
  return (
    <>
      <footer className="main-footer">
        <div className="container footer-grid">
          {/* About */}
          <div>
            <h4>Rishikesh Adventures</h4>
            <p>
              Experience the thrill of rafting, camping, trekking and many more
              adventures in the heart of Rishikesh.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5>Quick Links</h5>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Packages</a></li>
              <li><a href="#">Activities</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Popular Packages */}
          <div>
            <h5>Popular Packages</h5>
            <ul>
              <li>Riverside Camping</li>
              <li>River Rafting</li>
              <li>Bungee Jumping</li>
              <li>Group Tours</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5>Contact</h5>
            <p>📍 Rishikesh, Uttarakhand</p>
            <p>📞 +91 98765 43210</p>
            <p>✉ info@rishikeshadventures.com</p>

            <div className="social">
              <span>🌐</span>
              <span>📘</span>
              <span>📸</span>
              <span>▶</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 Rishikesh Adventures. All rights reserved.
        </div>
      </footer>

      {/* Floating Buttons */}
      <a href="tel:+919876543210" className="float-call">
        📞
      </a>

      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noreferrer"
        className="float-whatsapp"
      >
        💬
      </a>
    </>
  );
};

export default Footer;