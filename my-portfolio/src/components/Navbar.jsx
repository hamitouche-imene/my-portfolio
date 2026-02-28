export default function Navbar() {

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <nav className="navbar">
      <h2 onClick={scrollTop} className="logo">Imene</h2>

      <div className="nav-links">
        <a href="#projects">Work</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>

      <a href="#contact" className="contact-btn">Contact Me</a>
    </nav>
  )
}