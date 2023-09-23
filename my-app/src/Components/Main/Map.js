import React from 'react';

function Map() {
  return (
    <section className="map-section">
      <div className="map">
        <iframe
          className="map-iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.6295102766953!2d145.0363796753709!3d-37.82214613451632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642326bae5aaf%3A0x75e96bbd4988f769!2sSwinburne%20University%20of%20Technology!5e0!3m2!1sen!2sau!4v1692518415979!5m2!1sen!2sau"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          title="Club Location"
        ></iframe>
        <h3>Locate Us</h3>
        <p>
          Lorem ipsum dolor sit amet, quis in duis, iaculis id felis.
          Consectetuer vestibulum, nunc urna lectus, erat ligula.
        </p>
      </div>
      <hr />
    </section>
  );
}

export default Map;