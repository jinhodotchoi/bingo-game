export type GroupId = 1 | 2 | 3 | 4 | 5 | 6 | 7;

type GroupInfo = {
  id: GroupId;
  color: string;
};

export const groups: GroupInfo[] = [
  {
    id: 1,
    color: "red.200",
  },
  {
    id: 2,
    color: "orange.200",
  },
  {
    id: 3,
    color: "green.200",
  },
  {
    id: 4,
    color: "teal.200",
  },
  {
    id: 5,
    color: "blue.200",
  },
  {
    id: 6,
    color: "purple.200",
  },
  {
    id: 7,
    color: "pink.200",
  },
];
