"use client";

import React, { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import useCardStore from "@/store/useCardStore";
import clsx from "clsx";
const StatisticsModal = dynamic(
  () => import("@/components/statistic/StatisticsModal"),
  {
    ssr: false,
  }
);

function Statistics({ type }: { type: "css" | "component" }) {
  const { statistics } = useCardStore();
  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen((prev) => !prev);
  };

  const disabled = Object.keys(statistics[type]).length === 0;

  return (
    <>
      <button
        type="button"
        className={clsx(
          `py-2 px-4 text-sm font-medium text-gray-900 outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 ${
            disabled
              ? "cursor-not-allowed bg-gray-200 text-gray-500 hover:bg-gray-200 hover:text-gray-500"
              : ""
          }`
        )}
        disabled={disabled}
        onClick={handleModal}
      >
        Statistic
      </button>

      <StatisticsModal type={type} open={open} onClose={handleModal} />
    </>
  );
}

export default Statistics;
