import { useQuery, useMutation, gql } from "@apollo/client";
import { listClients } from "../graphql/queries";
import { createClient, deleteClient } from "../graphql/mutations";
import ClientPage from "../pages/client-page";

const GET_CLIENTS = gql(listClients);
const ADD_CLIENT = gql(createClient);
const REMOVE_CLIENT = gql(deleteClient);

export default function ClientPageContainer({ children, user }) {
  const { loading, error, data } = useQuery(GET_CLIENTS, {
    fetchPolicy: "cache-and-network",
    variables: { filter: { userContext: { eq: user.username } } },
  });
  const [addClient, { loading: addClientLoading }] = useMutation(ADD_CLIENT, {
    refetchQueries: [{ query: GET_CLIENTS }],
  });
  const [removeClient, { loading: removeClientLoading }] = useMutation(
    REMOVE_CLIENT,
    {
      refetchQueries: [{ query: GET_CLIENTS }],
    }
  );

  const loadingState = loading || addClientLoading || removeClientLoading;

  if (error) return <p>Error :(</p>;
  console.log(data, loadingState, error);

  return (
    <ClientPage
      clientsData={loadingState ? [] : data.listClients.items}
      addClient={addClient}
      removeClient={removeClient}
    />
  );
}
