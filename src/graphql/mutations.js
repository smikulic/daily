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
