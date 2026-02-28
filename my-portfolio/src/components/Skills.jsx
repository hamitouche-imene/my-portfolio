import React from "react";

// Example skill logos, you can replace with your own image URLs
const skills = [
  { 
    name: "React", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
  },
  { 
    name: "JavaScript", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
  },
  { 
    name: "Java", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" 
  },
  { 
    name: "Python", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
  },
  { 
    name: "GitHub", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
  }
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <img src={skill.logo} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}