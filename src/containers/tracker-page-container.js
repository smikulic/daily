import { useQuery, gql } from "@apollo/client";
import { listActivities } from "../graphql/queries";
import TrackerPage from "../pages/tracker-page";

const GET_ACTIVITIES = gql(listActivities);

export default function TrackerPageContainer({ children }) {
  const { loading, error, data } = useQuery(GET_ACTIVITIES, {
    fetchPolicy: "cache-and-network",
  });
  if (error) return <p>Error :(</p>;
  console.log(data);

  return <TrackerPage activitiesData={loading ? [] : data.listActivities.items} />;
}
