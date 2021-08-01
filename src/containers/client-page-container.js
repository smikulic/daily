import { useQuery, gql } from "@apollo/client";
import { listClients } from "../graphql/queries";
import ClientPage from "../pages/client-page";

const GET_CLIENTS = gql(listClients);

export default function ClientPageContainer({ children }) {
  const { loading, error, data } = useQuery(GET_CLIENTS, {
    fetchPolicy: "cache-and-network",
  });

  if (error) return <p>Error :(</p>;
  console.log(data);

  return <ClientPage clientsData={loading ? [] : data.listClients.items} />;
}
