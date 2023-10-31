import './index.css';
const pfp = require("./images/borderpfp1.png");

function Home() {
    return (
        <div className="body">
            <div className="bodymain">
                <div className="mainbody">
                    <span className="bodytext">I create <span className="rainbow">playful</span> experiences</span>
                    <img src={pfp} alt="pfp" className="pfp" />
                </div>
            </div>
            <div className="bodyname">
                <p className="bodynametext">Soham Aversekar | Software Developer</p>
                <div className="projecttitle">
                    <a href="#projects" className="scroll"><p className="project">Projects</p></a>
                </div>
                <div className="projectimg">
                    <a className="scroll" href="#projects"><i className="fa-solid fa-chevron-down"></i></a>
                    {/* <img className="arrowimg" src="images/downarrow.png" alt="DownArrow"> </img> */}
                </div>
            </div>
        </div>
    );
}

export default Home;