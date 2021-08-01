/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateClient = /* GraphQL */ `
  subscription OnCreateClient {
    onCreateClient {
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
export const onUpdateClient = /* GraphQL */ `
  subscription OnUpdateClient {
    onUpdateClient {
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
export const onDeleteClient = /* GraphQL */ `
  subscription OnDeleteClient {
    onDeleteClient {
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
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent {
    onCreateEvent {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent {
    onUpdateEvent {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent {
    onDeleteEvent {
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
export const onCreateActivity = /* GraphQL */ `
  subscription OnCreateActivity {
    onCreateActivity {
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
export const onUpdateActivity = /* GraphQL */ `
  subscription OnUpdateActivity {
    onUpdateActivity {
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
export const onDeleteActivity = /* GraphQL */ `
  subscription OnDeleteActivity {
    onDeleteActivity {
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
