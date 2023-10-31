import './index.css';

function Navbar() {
  return (
    <div className="header">
      <nav className="navbar">
        {/* <a href="#" className="pfpcontainer"><img src="/images/pfp.png" alt="SA" className="navimg pfp"></a>  */}
        <a href="https://instagram.com/awesohame" className="navtext" id="initials">SA</a>
        <ul id="navlist">
          <li className="navicon"><a href="https://google.com" className="navElementR navtext">Resume</a></li>
          <li className="navicon"><a href="https://github.com/awesohame" target="_blank" rel="noreferrer" className="navElement">
            {/* <img src="images/github.png" alt="github" className="navimg"> */}
            <i className="fa-brands fa-github"></i></a>
          </li>
          <li className="navicon"><a href="https://www.linkedin.com/in/sohamaversekar/" target="_blank" rel="noreferrer"
            className="navElement">
            <i className="fa-brands fa-linkedin"></i>
            {/* <img src="images/linkedin.png" alt="linkedin" className="navimg">  */}
          </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
