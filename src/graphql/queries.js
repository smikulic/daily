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
      createdAt
      updatedAt
      owner
      events {
        items {
          id
          clientID
          description
          hours
          date
          createdAt
          updatedAt
          owner
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
          owner
        }
        nextToken
      }
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
        createdAt
        updatedAt
        owner
        events {
          nextToken
        }
        activities {
          nextToken
        }
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
      createdAt
      updatedAt
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
        owner
        events {
          nextToken
        }
        activities {
          nextToken
        }
      }
      owner
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
        createdAt
        updatedAt
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
          owner
        }
        owner
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
      createdAt
      updatedAt
      events {
        items {
          id
          clientID
          description
          hours
          date
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      owner
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
        createdAt
        updatedAt
        events {
          nextToken
        }
        owner
      }
      nextToken
    }
  }
`;
