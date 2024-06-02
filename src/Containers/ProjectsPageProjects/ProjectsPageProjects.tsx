import classes from "./ProjectsPageProjects.module.css";

const ProjectsPageProjects = () => {
  const projects = [
    "Project Rural Child Education",
    "Go Hygiene",
    "Reach to Teach",
    "Edutech",
    "Educating a Child",
    "Young Pillars",
    "Be More",
    "Slum Stars",
    "Healthy Livimg",
    "Health is Wealth",
  ];

  return (
    <div className={classes.container}>
      {projects.map((data, i) => {
        return (
          <div
            key={i}
            style={{ background: `url(/Assets/project${i + 1}.svg)` }}
          >
            {data}
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsPageProjects;
