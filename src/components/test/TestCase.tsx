import { Profiler, Suspense, useCallback, useState } from "react";
import useCardStore from "@/store/useCardStore";
import CodeTooltip from "@/components/test/CodeTooltip";

interface TestCaseProps {
  type: "css" | "component";
  id: string;
  name: string;
  code?: string;
  Component: () => JSX.Element;
}

function TestCase({
  type,
  id,
  name,
  code = "```const foo = 'bar'; ```",
  Component,
}: TestCaseProps) {
  const { runCount, max, setMax, setStatistics } = useCardStore();

  const [perf, setPerf] = useState<number | null>(null);
  const [openTooltip, setOpenTooltip] = useState(false);

  const onRender = useCallback(
    (
      _id: any, // the "id" prop of the Profiler tree that has just committed
      phase: string, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
      actualDuration: number, // time spent rendering the committed update
      _baseDuration: number, // estimated time to render the entire subtree without memoization
      _startTime: any, // when React began rendering this update
      _commitTime: any, // when React committed this update
      _interactions: any // the Set of interactions belonging to this update
    ) => {
      if (phase === "mount") {
        if (actualDuration > max) {
          setMax(actualDuration);
        }
        setPerf(actualDuration);
        setStatistics(type, {
          id,
          name,
          runCount,
          baseDuration: actualDuration,
        });
      }
    },
    []
  );

  return (
    // @ts-ignore
    <Profiler id={name} onRender={onRender}>
      {/* Hero */}
      <div
        className="flex flex-col relative"
        aria-label="profiler"
        onMouseEnter={() => {
          setOpenTooltip(true);
        }}
        onMouseLeave={() => {
          setOpenTooltip(false);
        }}
      >
        <div className="flex flex-col text-left relative">
          <span className="text-sm font-bold">{name}</span>

          <Suspense fallback={null}>
            <CodeTooltip open={openTooltip} code={code} />
          </Suspense>

          <span className="text-sm">
            Duration:{" "}
            <strong>{perf ? `${Math.round(perf * 100) / 100}ms` : ""}</strong>
          </span>
        </div>

        <Component />
      </div>
    </Profiler>
  );
}

export default TestCase;
