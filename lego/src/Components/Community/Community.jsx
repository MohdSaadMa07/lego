import React from "react";
import "./Community.css";
import community1 from "../../assets/community1.jpg";
import community2 from "../../assets/community2.jpg";
import community3 from "../../assets/community3.jpg";

const Community = () => {
  return (
    <section className="community">
      <h2>Join the LEGO Community</h2>
      <p>Connect, share, and explore amazing LEGO creations with fans worldwide.</p>

      <div className="community-grid">
        <div className="community-card">
          <img src={community1} alt="LEGO Builds" />
          <h3>Incredible LEGO Builds</h3>
          <p>Discover inspiring creations from the community.</p>
        </div>

        <div className="community-card">
          <img src={community3} alt="LEGO Events" />
          <h3>Exclusive Events</h3>
          <p>Join competitions, challenges, and meet-ups.</p>
        </div>

        <div className="community-card">
          <img src={community2} alt="LEGO Forums" />
          <h3>Engage in Discussions</h3>
          <p>Share your ideas and discuss the latest LEGO news.</p>
        </div>
      </div>

      <button className="join-btn">Join Now</button>
    </section>
  );
};

export default Community;
