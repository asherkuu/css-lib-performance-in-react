import useCardStore from "@/store/useCardStore";
import clsx from "clsx";
import { MouseEvent, useMemo } from "react";
import { createPortal } from "react-dom";

const statisticEl = document.getElementById("statistic")!;

function StatisticsModal({
  type,
  open,
  onClose,
}: {
  type: "css" | "component";
  open: boolean;
  onClose: () => void;
}) {
  const { statistics } = useCardStore();

  const statisticHistory = useMemo(() => {
    console.log(statistics?.[type]);
    const currentStatistics = statistics?.[type];
    return (
      Object.keys(currentStatistics)?.reduce(
        (
          acc: {
            id: string;
            name: string;
            runCount: number;
            duration: number[];
          }[],
          value
        ) => {
          const { name, runCount, duration } = currentStatistics[value];
          acc.push({ id: value, name, duration, runCount });
          return acc;
        },
        []
      ) || []
    );
  }, [type, statistics]);

  return (
    open &&
    createPortal(
      <div
        id="modal"
        className="absolute w-dvw h-dvh top-0 left-0 z-[1000]"
        onClick={(event: MouseEvent<HTMLDivElement>) => {
          event.stopPropagation();
          const target = (event.target as any).id;
          (target === "modal" || target === "backdrop") && onClose();
        }}
      >
        <div id="backdrop" className="w-full h-full backdrop-blur-lg" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-[960px] min-h-[200px] max-h-[800px] rounded-lg bg-gray-50 overflow-x-auto p-8 border">
            <div className="flex text-left">
              {statisticHistory.map((statistic, index) => {
                const isFirstOfType = index === 0;
                const { id, name, runCount, duration } = statistic;
                console.log(runCount);

                return (
                  <div key={id} className="flex flex-col last-of-type:pr-8">
                    {/* thead */}
                    <div
                      className={clsx(
                        `flex h-12 border-b border-gray-200 break-words ${
                          isFirstOfType ? "min-w-[180px]" : "min-w-[120px]"
                        }`
                      )}
                    >
                      {isFirstOfType && <span className="w-12 mr-4" />}
                      <p className="text-sm">{name}</p>
                    </div>

                    {/* tbody */}
                    <div className="flex flex-col">
                      {duration?.map((duration, index) => (
                        <div
                          key={String(index)}
                          className="flex items-end mt-2"
                        >
                          {isFirstOfType && (
                            <span className="w-12 mr-4 text-center text-gray-500 text-sm">
                              n{index + 1}
                            </span>
                          )}
                          <p className="">{duration}</p>
                          <span className="text-sm ml-[1px]">ms</span>
                        </div>
                      ))}
                    </div>

                    {/* sum */}
                    <div className="flex mt-2 border-t border-gray-200 pt-2">
                      {isFirstOfType && (
                        <span className="w-12 mr-4 text-center text-gray-500 text-sm">
                          sum
                        </span>
                      )}
                      <span>
                        {(
                          duration.reduce((acc, item) => (acc += item), 0) /
                          duration.length
                        ).toFixed(0)}
                        <span className="text-sm ml-[1px]">ms</span>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>,
      statisticEl
    )
  );
}

export default StatisticsModal;
