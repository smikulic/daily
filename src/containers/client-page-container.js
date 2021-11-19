import { useQuery, useMutation, gql } from "@apollo/client";
import ClientPage from "../pages/client-page";

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
const CREATE_CLIENT = gql`
  mutation CreateClient($name: String!, $currency: String!, $rate: String) {
    clientCreate(name: $name, currency: $currency, rate: $rate) {
      id
      name
      rate
      currency
      userId
    }
  }
`;

const DELETE_CLIENT = gql`
  mutation DeleteClient($id: ID!) {
    clientRemove(id: $id) {
      id
    }
  }
`;

export default function ClientPageContainer({ children, user }) {
  const { loading, error, data } = useQuery(GET_CLIENTS, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "network-only",
    // fetchPolicy: "cache-and-network",
    // variables: { filter: { userContext: { eq: user.username } } },
  });

  const [createClient] = useMutation(CREATE_CLIENT, {
    refetchQueries: [{ query: GET_CLIENTS }],
  });
  const [removeClient] = useMutation(DELETE_CLIENT, {
    refetchQueries: [{ query: GET_CLIENTS }],
  });

  if (error) return <p>Error :(</p>;

  return (
    <ClientPage
      clientsData={data?.clientsWithTotalHours}
      loading={loading}
      addClient={createClient}
      removeClient={removeClient}
    />
  );
}
