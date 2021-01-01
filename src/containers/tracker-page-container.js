import { useQuery, gql } from "@apollo/client";
import TrackerPage from "../pages/tracker-page";

const GET_ACTIVITIES = gql`
  query GetActivities {
    activities {
      key
      date
      events {
        id
        description
        date
        hours
        clientId
        userId
        client {
          id
          name
          themeColor
          rate
          currency
        }
      }
    }
  }
`;

export default function TrackerPageContainer({ children }) {
  const { loading, error, data } = useQuery(GET_ACTIVITIES, {
    fetchPolicy: "cache-and-network",
  });
  if (error) return <p>Error :(</p>;
  console.log(data);

  return <TrackerPage activitiesData={loading ? [] : data.activities} />;
}
