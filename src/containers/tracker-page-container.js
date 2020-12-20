import { useQuery, gql } from '@apollo/client';
import TrackerPage from "../pages/tracker-page";

const USERS = gql`
  query GetUsers {
    users {
      email
    }
  }
`;

export default function TrackerPageContainer({ children }) {
  const { loading, error, data } = useQuery(USERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data)

  return <TrackerPage />;
}
