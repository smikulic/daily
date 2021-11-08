import { useQuery, gql } from "@apollo/client";
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

export default function ClientPageContainer({ children, user }) {
  const { loading, error, data } = useQuery(GET_CLIENTS, {
    fetchPolicy: "cache-and-network",
    // variables: { filter: { userContext: { eq: user.username } } },
  });

  // const [addClient, { loading: addClientLoading }] = useMutation(ADD_CLIENT, {
  //   refetchQueries: [{ query: GET_CLIENTS }],
  // });
  // const [removeClient, { loading: removeClientLoading }] = useMutation(
  //   REMOVE_CLIENT,
  //   {
  //     refetchQueries: [{ query: GET_CLIENTS }],
  //   }
  // );
  // const loadingState = loading || addClientLoading || removeClientLoading;

  if (error) return <p>Error :(</p>;
  console.log(data, loading, error);

  return (
    <ClientPage
      clientsData={loading ? [] : data.clientsWithTotalHours}
      addClient={() => console.log("add client")}
      removeClient={() => console.log("remove client")}
    />
  );
}
