import React from "react";
import CodeMarkdown from "./CodeMarkdown";
import clsx from "clsx";

function CodeTooltip({ open, code }: { open: boolean; code: string }) {
  return (
    <div
      id="tooltip-light"
      role="tooltip"
      className={clsx(
        `absolute z-10 inline-block text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm tooltip left-0 bottom-[42px] max-w-[400px] ${
          open ? "opacity-100" : "opacity-0 invisible"
        }`
      )}
    >
      <CodeMarkdown content={code} />
    </div>
  );
}

export default CodeTooltip;
