/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createClient = /* GraphQL */ `
  mutation CreateClient(
    $input: CreateClientInput!
    $condition: ModelClientConditionInput
  ) {
    createClient(input: $input, condition: $condition) {
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
          userContext
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
          userContext
          createdAt
          updatedAt
        }
        nextToken
      }
      userContext
      createdAt
      updatedAt
    }
  }
`;
export const updateClient = /* GraphQL */ `
  mutation UpdateClient(
    $input: UpdateClientInput!
    $condition: ModelClientConditionInput
  ) {
    updateClient(input: $input, condition: $condition) {
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
          userContext
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
          userContext
          createdAt
          updatedAt
        }
        nextToken
      }
      userContext
      createdAt
      updatedAt
    }
  }
`;
export const deleteClient = /* GraphQL */ `
  mutation DeleteClient(
    $input: DeleteClientInput!
    $condition: ModelClientConditionInput
  ) {
    deleteClient(input: $input, condition: $condition) {
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
          userContext
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
          userContext
          createdAt
          updatedAt
        }
        nextToken
      }
      userContext
      createdAt
      updatedAt
    }
  }
`;
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
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
        userContext
        createdAt
        updatedAt
      }
      userContext
      createdAt
      updatedAt
    }
  }
`;
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
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
        userContext
        createdAt
        updatedAt
      }
      userContext
      createdAt
      updatedAt
    }
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
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
        userContext
        createdAt
        updatedAt
      }
      userContext
      createdAt
      updatedAt
    }
  }
`;
export const createActivity = /* GraphQL */ `
  mutation CreateActivity(
    $input: CreateActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    createActivity(input: $input, condition: $condition) {
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
          userContext
          createdAt
          updatedAt
        }
        nextToken
      }
      userContext
      createdAt
      updatedAt
    }
  }
`;
export const updateActivity = /* GraphQL */ `
  mutation UpdateActivity(
    $input: UpdateActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    updateActivity(input: $input, condition: $condition) {
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
          userContext
          createdAt
          updatedAt
        }
        nextToken
      }
      userContext
      createdAt
      updatedAt
    }
  }
`;
export const deleteActivity = /* GraphQL */ `
  mutation DeleteActivity(
    $input: DeleteActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    deleteActivity(input: $input, condition: $condition) {
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
          userContext
          createdAt
          updatedAt
        }
        nextToken
      }
      userContext
      createdAt
      updatedAt
    }
  }
`;
