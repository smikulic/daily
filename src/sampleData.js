export const projectData = [
  {
    id: "1pro",
    name: "Backoffice",
    rate: 60,
    currency: "EUR",
    client: "solarisBank",
    themeColor: "#b32323",
  },
  {
    id: "2pro",
    name: "side project",
    rate: 0,
    currency: "",
    client: "Code Well Studio",
    themeColor: "#059481",
  },
  {
    id: "3pro",
    name: "PS5 Interface",
    rate: 90,
    currency: "USD",
    client: "Sony",
    themeColor: "#0a73bf",
  },
  {
    id: "4pro",
    name: "Daily app",
    rate: 0,
    currency: "",
    client: "Code Well Studio",
    themeColor: "#059481",
  },
];

export const activityData = [
  {
    id: "1act",
    time: "Fri, 6 Nov",
    events: [
      {
        id: "1evt",
        description: "Amount and balance formatter fixes",
        hours: 7.5,
        project: projectData[0],
      },
      {
        id: "2evt",
        description: "Initialise app",
        hours: 2.5,
        project: projectData[1],
      },
    ],
  },
  {
    id: "2act",
    time: "Thu, 5 Nov",
    events: [
      {
        id: "3evt",
        description: "Retrospective meeting and pairing",
        hours: 8,
        project: projectData[2],
      },
    ],
  },
  {
    id: "3act",
    time: "Wed, 4 Nov",
    events: [
      {
        id: "4evt",
        description: "Pairing session",
        hours: 8,
        project: projectData[2],
      },
    ],
  },
  {
    id: "4act",
    time: "Mon, 2 Nov",
    events: [
      {
        id: "5evt",
        description: "Pairing session",
        hours: 4,
        project: projectData[0],
      },
      {
        id: "5evt",
        description: "Quick sync with PO",
        hours: 1,
        project: projectData[2],
      },
      {
        id: "6evt",
        description: "Add routing",
        hours: 2,
        project: projectData[3],
      },
      {
        id: "7evt",
        description: "AWS testing configuration",
        hours: 2,
        project: projectData[1],
      },
    ],
  },
  {
    id: "5act",
    time: "Fri, 30 Oct",
    events: [
      {
        id: "8evt",
        description: "UX discussion and design samples",
        hours: 8,
        project: projectData[2],
      },
    ],
  },
  {
    id: "6act",
    time: "Thu, 29 Oct",
    events: [
      {
        id: "9evt",
        description: "Junior dev onboarding, code reviews",
        hours: 8,
        project: projectData[2],
      },
    ],
  },
  {
    id: "7act",
    time: "Wed, 28 Oct",
    events: [
      {
        id: "10evt",
        description: "Sync with product about A/B testing",
        hours: 7,
        project: projectData[0],
      },
      {
        id: "11evt",
        description: "Research project ideas",
        hours: 2,
        project: projectData[1],
      },
    ],
  },
  {
    id: "8act",
    time: "Tue, 27 Oct",
    events: [
      {
        id: "12evt",
        description: "Implement A/B testing",
        hours: 7,
        project: projectData[0],
      },
    ],
  },
  {
    id: "9act",
    time: "Mon, 26 Oct",
    events: [
      {
        id: "13evt",
        description: "PS5 product page update",
        hours: 4,
        project: projectData[2],
      },
    ],
  },
  {
    id: "10act",
    time: "Fri, 23 Oct",
    events: [
      {
        id: "14evt",
        description: "PS5 interface update",
        hours: 8,
        project: projectData[2],
      },
    ],
  },
  {
    id: "11act",
    time: "Thu, 22 Oct",
    events: [
      {
        id: "15evt",
        description: "JS graphql learning",
        hours: 8,
        project: projectData[1],
      },
    ],
  },
  {
    id: "12act",
    time: "Wed, 21 Oct",
    events: [
      {
        id: "16evt",
        description: "Onboarding session",
        hours: 8,
        project: projectData[0],
      },
    ],
  },
];
