import { useQuery, useMutation, gql } from "@apollo/client";
import { listClients } from "../graphql/queries";
import { createClient, deleteClient } from "../graphql/mutations";
import ClientPage from "../pages/client-page";

const GET_CLIENTS = gql(listClients);
const ADD_CLIENT = gql(createClient);
const REMOVE_CLIENT = gql(deleteClient);

export default function ClientPageContainer({ children }) {
  const { loading, error, data } = useQuery(GET_CLIENTS, {
    fetchPolicy: "cache-and-network",
  });
  const [addClient, { data: addClientData }] = useMutation(ADD_CLIENT);
  const [removeClient, { data: removeClientData }] = useMutation(REMOVE_CLIENT);

  if (error) return <p>Error :(</p>;
  console.log(data);
  console.log(addClientData);
  console.log(removeClientData);
  // console.log(addClientError);

  return (
    <ClientPage
      clientsData={loading ? [] : data.listClients.items}
      addClient={addClient}
      removeClient={removeClient}
    />
  );
}
