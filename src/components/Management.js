import React from "react";
import "../assets/styles/management.css";
import rol1 from "../assets/images/rol1.jpg"
import rol2 from "../assets/images/rol2.jpg"
import rol3 from "../assets/images/rol3.jpg"

const team = [
  {
    name: "Frank Aladeojebi",
    title: "Chief Creative Officer",
    photo: rol2,
  },
  {
    name: "Michael Olukayode Eni-Omosule",
    title: "Managing Director",
    photo: rol3,
  },
  {
    name: "Gloria Omosule",
    title: "Chief Financial Officer",
    photo: rol1,
  }
  
];

const Management = () => {
  return (
    <section className="management" id="management">
      <div className="management-header">
        <h2>Our Management</h2>
        <p>Meet the leadership team guiding Ennys with integrity and vision.</p>
      </div>

      <div className="management-grid">
        {team.map((m) => (
          <article className="mgr-card" key={m.name} tabIndex={0} aria-label={`${m.name}, ${m.title}`}>
            <img className="mgr-photo" src={m.photo} alt={`${m.name} — ${m.title}`} />
            <div className="mgr-info">
              <h3 className="mgr-name">{m.name}</h3>
              <p className="mgr-title">{m.title}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Management;
