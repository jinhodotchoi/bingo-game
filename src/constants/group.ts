export type GroupId = 1 | 2 | 3 | 4 | 5 | 6 | 7;

type GroupInfo = {
  id: GroupId;
  color: string;
};

export const groups: GroupInfo[] = [
  {
    id: 1,
    color: "red.300",
  },
  {
    id: 2,
    color: "orange.300",
  },
  {
    id: 3,
    color: "green.300",
  },
  {
    id: 4,
    color: "teal.300",
  },
  {
    id: 5,
    color: "blue.300",
  },
  {
    id: 6,
    color: "purple.300",
  },
  {
    id: 7,
    color: "pink.300",
  },
];
