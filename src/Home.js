import './index.css';

function Home() {
    return (
        <div className="body">
            <div className="bodymain">
                <div className="mainbody">
                    <span className="bodytext">I create <span className="rainbow">playful</span> experiences</span>
                    <img src="./images/borderpfp1.png" alt="pfp" class="pfp"></img>
                </div>
            </div>
            <div className="bodyname">
                <p className="bodynametext">Soham Aversekar | Software Developer</p>
                <div className="projecttitle">
                    <p className="project">Projects</p>
                </div>
                <div className="projectimg">
                    <i className="fa-solid fa-chevron-down"></i>
                    {/* <img className="arrowimg" src="images/downarrow.png" alt="DownArrow"> </img> */}
                </div>
            </div>
        </div>
    );
}

export default Home;