"use client";
import './marquee.css';

const Marquee = () => {
  const content = [...Array(10)].map((_, i) => (
    <span key={i} className="marquee-text">OPEN TO WORK • DISPONIBLE </span>
  ));

  return (
    <div className="marquee-container">
      <div className="marquee-wrapper">
        <div className="marquee-content">
          {content}
        </div>
        <div className="marquee-content">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Marquee; 