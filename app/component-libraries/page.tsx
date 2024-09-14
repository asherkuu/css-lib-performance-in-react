"use client";

import Statistics from "@/components/statistic/Statistics";
import ComponentTestSuite from "@/components/test/ComponentTestSuite";
import useCardStore from "@/store/useCardStore";
import React from "react";

const type = "component";

function ComponentLibraries() {
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
      <div className="flex justify-center mb-12 relative gap-2">
        {runCount === -1 ? (
          <div className="btn-sm bg-violet-400 text-gray-200 shadow w-[116px]">
            loading...
          </div>
        ) : (
          <button
            type="button"
            className="py-2 px-4 text-sm font-medium text-gray-50 focus:outline-none bg-purple-600 rounded-lg border border-gray-200 hover:bg-purple-500 focus:z-10 focus:ring-4 focus:ring-gray-100"
            onClick={onClickRun}
            disabled={runCount === -1 || loading}
          >
            {runCount > 0 ? "Run Again" : "Run Test Suite"}
          </button>
        )}

        <Statistics type={type} />
      </div>

      {runCount > 0 && <ComponentTestSuite key={runCount} />}
    </div>
  );
}

export default ComponentLibraries;
