import './index.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footercontent">
                <h2 className="footertext">Connect with me</h2>
            </div>
            <div className="footercontent">
                <a href="https://instagram.com/awesohame" target="_blank" rel="noreferrer" className="footericon">
                    <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://github.com/awesohame" target="_blank" rel="noreferrer" className="footericon">
                    <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://linkedin.com/in/sohamaversekar" target="_blank" rel="noreferrer" className="footericon">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://www.hackerrank.com/profile/awesohame" target="_blank" rel="noreferrer" className="footericon">
                    <i className="fa-brands fa-hackerrank"></i>
                </a>
                <a href="mailto:sohamaversekar777@gmail.com" target="_blank" rel="noreferrer" className="footericon">
                    <i className="fa-regular fa-envelope"></i>
                </a>
            </div>
        </div>
    );
}

export default Footer;
