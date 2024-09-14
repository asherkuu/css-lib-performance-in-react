import { create } from "zustand";

type CardConuter = {
  runCount: number;
  max: number;
  numCards: number;
  statistics: Record<
    "css" | "component",
    { [key: string]: { name: string; runCount: number; duration: number[] } }
  >;
  perfHistory: {
    [key: number]: { id: string; name: string; baseDuration: number }[];
  };
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
  setStatistics: (
    type: "css" | "component",
    {
      id,
      name,
      runCount,
      baseDuration,
    }: {
      id: string;
      name: string;
      runCount: number;
      baseDuration: number;
    }
  ) => void;
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
  resetRunCount: () => void;
};

const useCardStore = create<CardConuter>()((set, get) => ({
  runCount: 0,
  max: 1,
  numCards: 100,
  statistics: { css: {}, component: {} },
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
  setStatistics: (
    type: "css" | "component",
    {
      id,
      name,
      runCount,
      baseDuration,
    }: {
      id: string;
      name: string;
      runCount: number;
      baseDuration: number;
    }
  ) => {
    const newStatistics = { ...get().statistics };

    if (!newStatistics[type][id]) {
      newStatistics[type][id] = { name, runCount, duration: [] };
    }
    newStatistics[type][id].duration.push(baseDuration);

    set(() => ({ statistics: newStatistics }));
  },
  setPerfHistory: ({
    id,
    name,
    baseDuration,
  }: {
    id: string;
    name: string;
    baseDuration: number;
  }) => {
    const runCount = get().runCount;
    const prevPerfHistory = get().perfHistory;
    const newPerfHistory: {
      [key: number]: { id: string; name: string; baseDuration: number }[];
    } = { ...prevPerfHistory };
    // const newPerfHistory = [...prevPerfHistory];

    if (!newPerfHistory[runCount]) {
      newPerfHistory[runCount] = [];
    }

    newPerfHistory?.[runCount]?.push({ id, name, baseDuration });

    set(() => ({ perfHistory: newPerfHistory }));
  },
  resetPerfHistory: () => set(() => ({ perfHistory: [] })),
  resetRunCount: () => set(() => ({ runCount: 0 })),
}));

export default useCardStore;
