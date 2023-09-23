import React from 'react';

function AboutUs() {
  return (
    <section className="about-section">
       <h3>About the Club</h3>
        <p className="about-text">
          Lorem ipsum dolor sit amet, quis in duis, iaculis id felis.
          Consectetuer vestibulum, nunc urna lectus, erat ligula.
        </p>
      <div className="video">
        <iframe
          className="video-iframe"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/PKYqRm1TRQw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <hr />
    </section>
  );
}

export default AboutUs;
