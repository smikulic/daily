import { useQuery, gql } from "@apollo/client";
import ClientPage from "../pages/client-page";

const CLIENTS = gql`
  query GetClients {
    clientsWithTotalHours {
      id
      name
      rate
      currency
      themeColor
      totalHours
      totalBilled
    }
  }
`;

export default function ClientPageContainer({ children }) {
  const { loading, error, data } = useQuery(CLIENTS, {
    fetchPolicy: "cache-and-network",
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data);

  return <ClientPage clients={data.clientsWithTotalHours} />;
}
