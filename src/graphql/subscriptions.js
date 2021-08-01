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
      createdAt
      updatedAt
      owner
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
      createdAt
      updatedAt
      owner
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
      createdAt
      updatedAt
      owner
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
        owner
      }
      createdAt
      updatedAt
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
        owner
      }
      createdAt
      updatedAt
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
        owner
      }
      createdAt
      updatedAt
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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
      owner
    }
  }
`;
