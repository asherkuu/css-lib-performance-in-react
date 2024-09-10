import "./App.css";

import React from "react";
import useCardStore from "./stores/useCardStore";
import TestSuite from "./components/Test/TestSuite";
import Statistics from "./components/Statistics";

function App() {
  const { numCards: NUM_CARDS, runCount, setRunCount } = useCardStore();

  const [loading, setLoading] = React.useState(false);

  const onClickRun = React.useCallback(() => {
    if (loading || runCount === -1) {
      return;
    }

    let nextRunCount = runCount + 1;
    setRunCount(-1);
    setTimeout(() => {
      setRunCount(nextRunCount);
      setLoading(false);
    }, 100);
  }, [loading, runCount, setRunCount]);

  return (
    <div className="flex flex-col text-center items-center gap-8 mt-12 pb-11">
      <h1 className="text-2xl font-bold">CSS Performance</h1>

      <p>
        Renders a list of {NUM_CARDS} cards using various styling strategies,
        <br />
        and uses React's <strong>&lt;Profiler&gt;</strong> component to measure
        render time.
      </p>

      <div className="flex gap-2 items-center">
        {runCount === -1 ? (
          <div className="px-4 py-2 text-sm font-medium text-center text-white bg-gray-400 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 max-w-32">
            loading...
          </div>
        ) : (
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 max-w-32"
            onClick={onClickRun}
            disabled={runCount === -1 || loading}
          >
            {runCount > 0 ? "Run Again" : "Run Test Suite"}
          </button>
        )}

        <Statistics />
      </div>

      {runCount > 0 && <TestSuite key={runCount} />}
    </div>
  );
}

export default App;
