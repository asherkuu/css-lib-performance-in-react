import React, { Profiler, Suspense } from "react";
import useCardStore from "../../stores/useCardStore";
import CodeTooltip from "./CodeTooltip";

interface TestCaseProps {
  id: string;
  name: string;
  code?: string;
  Component: () => JSX.Element;
}

function TestCase({
  id,
  name,
  code = "```const b = null; ```",
  Component,
}: TestCaseProps) {
  const { max, setMax, setPerfHistory } = useCardStore();
  const [perf, setPerf] = React.useState<number | null>(null);
  const [openTooltip, setOpenTooltip] = React.useState(false);

  const onRender = React.useCallback(
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
        setPerfHistory({ id, name, baseDuration: actualDuration });
      }
      // if (phase === "mount") {
      //   if (baseDuration > max) {
      //     setMax(baseDuration);
      //   }
      //   setPerf(baseDuration);
      //   setPerfHistory({ id, name, baseDuration });
      // }
    },
    []
  );

  return (
    // @ts-ignore
    <Profiler id={name} onRender={onRender}>
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
        {/* <div style={{ visibility: "hidden" }}> */}
        <Component />
        {/* </div> */}
      </div>
    </Profiler>
  );
}

export default TestCase;
