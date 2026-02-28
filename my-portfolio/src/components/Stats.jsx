import { useEffect, useRef, useState } from "react";

function Counter({ end, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          let start = 0;
          const increment = end / (duration / 16);

          const updateCounter = () => {
            start += increment;
            if (start < end) {
              setCount(Math.ceil(start));
              requestAnimationFrame(updateCounter);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(updateCounter);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

  }, [end, duration]);

  return <h3 ref={ref}>{count}+</h3>;
}

export default function Stats() {
  return (
    <section className="stats">
      <div className="stat-card">
        <Counter end={2} />
        <p>Years of Experience</p>
      </div>

      <div className="stat-card">
        <Counter end={15} />
        <p>Projects Completed</p>
      </div>

      <div className="stat-card">
        <Counter end={10} />
        <p>Satisfied Clients</p>
      </div>
    </section>
  );
}