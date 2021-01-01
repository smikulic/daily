import { useQuery, gql } from "@apollo/client";
import ClientPage from "../pages/client-page";
import LoadSpinner from "../components/load-spinner";

const GET_CLIENTS = gql`
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
  const { loading, error, data } = useQuery(GET_CLIENTS, {
    fetchPolicy: "cache-and-network",
  });

  if (error) return <p>Error :(</p>;
  console.log(data);

  return <ClientPage clientsData={loading ? [] : data.clientsWithTotalHours} />;
}
