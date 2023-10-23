import './index.css';
import projects from './projects';

function Projectlist() {
    return (
        <div className="projectlist">
            {projects.map((project) => (
                <div className="projectcontainer" id="projects" key={project.id}>
                    <div className="projectimagecontainer">
                        <img src={project.image} alt={project.name} className="projectimage" />
                    </div>
                    <div className="textdetails">
                        <h2 className="titles">{project.title}</h2>
                        <p className="description">{project.desc}</p>
                        <p className="softwares">Software Used:</p>
                        {project.used.map((software) => (
                            <ul className="softwares">
                                <li className="software">{software}</li>
                            </ul>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Projectlist;