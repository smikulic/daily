export const activityData = [
  {
    id: "1act",
    time: "Fri, 6 Nov",
    totalHours: 10,
    events: [
      {
        id: "1evt",
        description: "Amount and balance formatter fixes",
        hours: 7.5,
        project: {
          id: "1pro",
          name: "Backoffice",
          rate: 60,
          currency: "EUR",
          client: "solarisBank",
        },
      },
      {
        id: "2evt",
        description: "Initialise app",
        hours: 2.5,
        project: {
          id: "2pro",
          name: "side project",
          rate: 20,
          currency: "EUR",
          client: "Code Well Studio",
        },
      },
    ],
  },
  {
    id: "2act",
    time: "Thu, 5 Nov",
    totalHours: 8,
    events: [
      {
        id: "3evt",
        description: "Retrospective meeting and pairing",
        hours: 8,
        project: {
          id: "3pro",
          name: "PS5 Interface",
          rate: 90,
          currency: "USD",
          client: "Sony",
        },
      },
    ],
  },
];
