import Layout from "../../Components/Layout/Layout";
import ProjectsPageProjects from "../ProjectsPageProjects/ProjectsPageProjects";
import ProjectsPageWriteUp from "../ProjectsPageWriteUp/ProjectsPageWriteUp";

const ProjectsPage = () => {
  return (
    <Layout>
      <ProjectsPageWriteUp />
      <ProjectsPageProjects />
    </Layout>
  );
};

export default ProjectsPage;
