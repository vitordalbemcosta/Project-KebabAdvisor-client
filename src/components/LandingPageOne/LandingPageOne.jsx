import React from "react";
import "../../App.css"
import BackgroundHomeImage from "../../assets/images/bg-homepg.jpg"

function LandingPageOne() {
  return (
    <section className="section-1">
      <div className="hero-section" style={{backgroundImage: `url(${BackgroundHomeImage})`}}>
        <h1 id="title-1">Built by Portugal's Kebab Enthusiasts</h1>
      </div>
      <img src="" alt="" />
      <article id="article-1">
      </article>
    </section>
  );
}

export default LandingPageOne;
