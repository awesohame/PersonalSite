import './index.css';
import projects from './projects';

function Projectlist() {
    return (
        <div className="projectlist">
            {projects.map((project) => (
                <div className="projectcontainer" key={project.id}>
                    <h2 className="titles">{project.title}</h2>
                    <p className="description">{project.desc}</p>
                    <p className="softwares">Software Used:</p>
                    {project.used.map((software) => (
                        <ul className="softwares">
                            <li className="software">{software}</li>
                        </ul>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Projectlist;