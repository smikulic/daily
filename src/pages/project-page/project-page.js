function ProjectPage({ projects }) {
  return (
    <>
      projects page
      {projects.length &&
        projects.map((project) => {
          return <div key={project.id}>{project.name}, {project.rate}, {project.currency}, {project.totalHours}</div>;
        })}
    </>
  );
}

export default ProjectPage;
