"use client";

import TestSuite from "@/components/test/TestSuite";
import useCardStore from "@/store/useCardStore";
import React from "react";

function Home() {
  const { runCount, setRunCount } = useCardStore();

  const [loading, setLoading] = React.useState(false);

  const onClickRun = React.useCallback(() => {
    if (loading || runCount === -1) {
      return;
    }

    const nextRunCount = runCount + 1;
    setRunCount(-1);
    setTimeout(() => {
      setRunCount(nextRunCount);
      setLoading(false);
    }, 100);
  }, [loading, runCount, setRunCount]);

  return (
    <div>
      <div className="flex justify-center mb-12">
        {runCount === -1 ? (
          <div className="btn-sm bg-violet-400 text-gray-200 shadow w-[116px]">
            loading...
          </div>
        ) : (
          <button
            type="button"
            className="btn-sm bg-violet-600 text-gray-200 shadow hover:bg-violet-900  w-[116px]"
            onClick={onClickRun}
            disabled={runCount === -1 || loading}
          >
            {runCount > 0 ? "Run Again" : "Run Test Suite"}
          </button>
        )}

        {/* <Statistics /> */}
      </div>

      {runCount > 0 && <TestSuite key={runCount} />}
    </div>
  );
}

export default Home;
