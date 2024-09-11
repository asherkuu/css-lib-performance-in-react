import { create } from "zustand";

type CardConuter = {
  runCount: number;
  max: number;
  numCards: number;
  perfHistory: {
    id: string;
    name: string;
    baseDuration: number;
  }[];
  bgColors: [
    "#F5004F",
    "#FFAF00",
    "#F9E400",
    "#88D66C",
    "#3572EF",
    "#7C00FE",
    "#F0A8D0"
  ];
  setRunCount: (runCount: number) => void;
  setMax: (max: number) => void;
  setNumCards: (numCards: number) => void;
  setPerfHistory: ({
    id,
    name,
    baseDuration,
  }: {
    id: string;
    name: string;
    baseDuration: number;
  }) => void;
  resetPerfHistory: () => void;
};

const useCardStore = create<CardConuter>()((set, get) => ({
  runCount: 0,
  max: 1,
  numCards: 200,
  perfHistory: [],
  bgColors: [
    "#F5004F",
    "#FFAF00",
    "#F9E400",
    "#88D66C",
    "#3572EF",
    "#7C00FE",
    "#F0A8D0",
  ],
  setRunCount: (runCount: number) => set(() => ({ runCount })),
  setMax: (max: number) => set(() => ({ max })),
  setNumCards: (numCards: number) => set(() => ({ numCards })),
  setPerfHistory: ({
    id,
    name,
    baseDuration,
  }: {
    id: string;
    name: string;
    baseDuration: number;
  }) => {
    const prevPerfHistory = get().perfHistory;
    const newPerfHistory = [...prevPerfHistory];

    newPerfHistory.push({ id, name, baseDuration });

    console.log(newPerfHistory);
    set(() => ({ perfHistory: newPerfHistory }));
  },
  resetPerfHistory: () => set(() => ({ perfHistory: [] })),
}));

export default useCardStore;
