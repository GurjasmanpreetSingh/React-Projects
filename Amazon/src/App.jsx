import React from "react";

const App = () => {
  return (
    <div style={{ backgroundColor: "#b08968" }}>
      <nav style={{ display: "flex", backgroundColor: "#4b2e1f", padding: 10 }}>
        <img
          src="https://png.pngtree.com/png-clipart/20240909/original/pngtree-minimalist-coffee-cup-logo-style-png-image_15968897.png"
          alt="Transformer"
          style={{ height: 100, width: 100 }}
        />
        <h2
          style={{
            fontSize: 35,
            fontFamily: "sans-serif",
            fontStyle: "italic",
            color: "#ffffff",
          }}
        >
          Divine Drips
        </h2>

        <div
          style={{
            display: "flex",
            marginLeft: "auto",
            alignItems: "center",
            gap: 35,
          }}
        >
          <a
            href="#head"
            style={{
              fontSize: 22,
              color: "white",
              textDecoration: "none",
              fontStyle: "italic",
              fontWeight: "bolder",
            }}
          >
            Home
          </a>
          <a
            href="#about"
            style={{
              fontSize: 22,
              color: "white",
              textDecoration: "none",
              fontStyle: "italic",
              fontWeight: "bolder",
            }}
          >
            About
          </a>
          <a
            href="#contact"
            style={{
              fontSize: 22,
              color: "white",
              textDecoration: "none",
              fontStyle: "italic",
              fontWeight: "bolder",
            }}
          >
            Contact
          </a>
          <a
            href="#"
            style={{
              fontSize: 22,
              color: "white",
              textDecoration: "none",
              fontStyle: "italic",
              fontWeight: "bolder",
            }}
          >
            Services
          </a>
        </div>
      </nav>
      {/* Hero Section */}
      <div id="head"
        style={{ backgroundColor: "#b08968", textAlign: "center", height: 550 }}
      >
        <h1 style={{ fontSize: 40, color: "#63311d" }}>
          Welcome to Divine Drips
        </h1>
        <p style={{ fontSize: 22, color: "#000000", padding: 2, fontWeight : "bold" }}>
          {" "}
          Discover the perfect blend of taste, aroma, and happiness. Enjoy every
          sip of our freshly brewed coffee!
        </p>
        <img
          style={{ height: 300, borderRadius: "15", borderRadius: "15px" }}
          src="https://tse1.mm.bing.net/th/id/OIP.q2KvdHR1q3fxGRGoQHuAxQHaE8?r=0&pid=Api&h=220&P=0"
          alt=""
        />
        <br />
        <br />
        <button
          style={{
            fontSize: 20,
            color: "#ede4e4",
            padding: 12,
            borderRadius: "10px",
            backgroundColor: "#5c3324",
            fontWeight: "bold",
            borderColor: "white",
          }}
        >
          Get Started
        </button>
      </div>
      <div>
        {/* About Section */}
        <div id="about"
          style={{
            backgroundColor: "#fffaf3",
            padding: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            gap: "30px",
          }}
        >
          {/* About Image */}
          <img
            src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=600"
            alt="Inside Divine Drips coffee shop"
            style={{
              width: "350px",
              height: "280px",
              objectFit: "cover",
              borderRadius: "15px",
            }}
          />

          {/* About Content */}
          <div
            style={{
              maxWidth: "500px",
            }}
          >
            <h2
              style={{
                fontSize: "32px",
                color: "#4b2e1f",
                marginBottom: "15px",
              }}
            >
              About Divine Drips
            </h2>

            <p
              style={{
                fontSize: "18px",
                color: "#5c4033",
                lineHeight: "1.7",
              }}
            >
              At Divine Drips, we believe every cup of coffee tells a story. We
              serve freshly brewed coffee made with quality ingredients and
              passion. Our cozy atmosphere makes every visit special, whether
              you are meeting friends or relaxing alone.
            </p>

            <button
              style={{
                backgroundColor: "#6f4e37",
                color: "white",
                padding: "12px 25px",
                fontSize: "16px",
                border: "none",
                borderRadius: "8px",
                marginTop: "10px",
              }}
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Footer Section */}
        <footer id="contact"
          style={{
            backgroundColor: "#4b2e1f",
            color: "white",
            textAlign: "center",
            padding: "10px",
            margin: 0,
          }}
        >
          <h2>Divine Drips</h2>

          <p>Contact: divinedrips@gmail.com</p>

          <p>Follow us: Instagram | Facebook | Twitter</p>

          <p>© 2026 Divine Drips. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
