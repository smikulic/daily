/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateClient = /* GraphQL */ `
  subscription OnCreateClient($owner: String!) {
    onCreateClient(owner: $owner) {
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
export const onUpdateClient = /* GraphQL */ `
  subscription OnUpdateClient($owner: String!) {
    onUpdateClient(owner: $owner) {
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
export const onDeleteClient = /* GraphQL */ `
  subscription OnDeleteClient($owner: String!) {
    onDeleteClient(owner: $owner) {
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
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent($owner: String!) {
    onCreateEvent(owner: $owner) {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent($owner: String!) {
    onUpdateEvent(owner: $owner) {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent($owner: String!) {
    onDeleteEvent(owner: $owner) {
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
export const onCreateActivity = /* GraphQL */ `
  subscription OnCreateActivity($owner: String!) {
    onCreateActivity(owner: $owner) {
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
export const onUpdateActivity = /* GraphQL */ `
  subscription OnUpdateActivity($owner: String!) {
    onUpdateActivity(owner: $owner) {
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
export const onDeleteActivity = /* GraphQL */ `
  subscription OnDeleteActivity($owner: String!) {
    onDeleteActivity(owner: $owner) {
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
