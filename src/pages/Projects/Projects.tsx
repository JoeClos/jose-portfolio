import './projects.css';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    title: 'Project 1',
    description: 'This is a description of Project 1.',
    imageUrl: 'url-to-image-1',
  },
  {
    title: 'Project 2',
    description: 'This is a description of Project 2.',
    imageUrl: 'url-to-image-2',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <img src={project.imageUrl} alt={project.title} />
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
