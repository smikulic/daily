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
  mutation CreateClient {
    clientCreate(name: $name, rate: $rate, currency: $currency) {
      id
      name
      rate
      currency
      userId
    }
  }
`;

export default function ClientPageContainer({ children, user }) {
  const { loading, error, data } = useQuery(GET_CLIENTS, {
    fetchPolicy: "cache-and-network",
    // variables: { filter: { userContext: { eq: user.username } } },
  });

  const [createClient, { loading: createClientLoading }] = useMutation(
    CREATE_CLIENT,
    {
      refetchQueries: [{ query: GET_CLIENTS }],
    }
  );
  // const [removeClient, { loading: removeClientLoading }] = useMutation(
  //   REMOVE_CLIENT,
  //   {
  //     refetchQueries: [{ query: GET_CLIENTS }],
  //   }
  // );
  // const loadingState = loading || addClientLoading || removeClientLoading;

  if (error) return <p>Error :(</p>;
  console.log(data, loading, createClientLoading, error);

  return (
    <ClientPage
      clientsData={loading ? [] : data.clientsWithTotalHours}
      addClient={createClient}
      // addClient={() => console.log("add client")}
      removeClient={() => console.log("remove client")}
    />
  );
}
