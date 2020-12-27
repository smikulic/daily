import { useQuery, gql } from "@apollo/client";
import ProjectPage from "../pages/project-page";

const PROJECTS = gql`
  query GetProjects {
    projectsWithTotalHours {
      id
      name
      rate
      currency
      themeColor
      totalHours
    }
  }
`;

export default function ProjectPageContainer({ children }) {
  const { loading, error, data } = useQuery(PROJECTS, {
    fetchPolicy: "cache-and-network",
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data);

  return <ProjectPage projects={data.projectsWithTotalHours} />;
}
