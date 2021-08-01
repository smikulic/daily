/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getClient = /* GraphQL */ `
  query GetClient($id: ID!) {
    getClient(id: $id) {
      id
      name
      rate
      currency
      themeColor
      totalHours
      totalBilled
      events {
        items {
          id
          clientID
          description
          hours
          date
          createdAt
          updatedAt
        }
        nextToken
      }
      activities {
        items {
          id
          clientID
          description
          hours
          date
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listClients = /* GraphQL */ `
  query ListClients(
    $filter: ModelClientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        rate
        currency
        themeColor
        totalHours
        totalBilled
        events {
          nextToken
        }
        activities {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
      clientID
      description
      hours
      date
      client {
        id
        name
        rate
        currency
        themeColor
        totalHours
        totalBilled
        events {
          nextToken
        }
        activities {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        clientID
        description
        hours
        date
        client {
          id
          name
          rate
          currency
          themeColor
          totalHours
          totalBilled
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getActivity = /* GraphQL */ `
  query GetActivity($id: ID!) {
    getActivity(id: $id) {
      id
      clientID
      key
      date
      events {
        items {
          id
          clientID
          description
          hours
          date
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listActivities = /* GraphQL */ `
  query ListActivities(
    $filter: ModelActivityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActivities(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        clientID
        key
        date
        events {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
