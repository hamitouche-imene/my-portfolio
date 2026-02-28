import { useEffect } from "react";

export default function Timeline() {

  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.3 });

    items.forEach(item => observer.observe(item));
  }, []);

  return (
    <section className="timeline-section">
      <h2 className="section-title">My Journey</h2>

      <div className="timeline">
        <div className="timeline-item left">
          <div className="timeline-content">
            <span className="year">2023</span>
            <h3>Started Development</h3>
            <p>Learned frontend fundamentals.</p>
          </div>
        </div>

        <div className="timeline-item right">
          <div className="timeline-content">
            <span className="year">2024</span>
            <h3>Built Real Projects</h3>
            <p>Created a website for it department for university of algiers 1</p>
          </div>
        </div>
        <div className="timeline-item left">
          <div className="timeline-content">
            <span className="year">2025</span>
            <h3>License Graduation</h3>
            <p>Completed my License in Information Systems and Software Engineering.</p>
          </div>
        </div>

        <div className="timeline-item right">
          <div className="timeline-content">
            <span className="year">2025</span>
            <h3>Final Year Project</h3>
            <p>Developed my graduation project, an innovative system for my degree completion.</p>
          </div>
        </div>

       <div className="timeline-item left">
          <div className="timeline-content">
            <span className="year">2026</span>
            <h3>Master’s Degree</h3>
            <p>Currently pursuing a Master’s degree in Artificial Intelligence.</p>
          </div>
        </div>
      </div>
    </section>
  )
}