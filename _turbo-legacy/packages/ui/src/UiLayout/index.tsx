"use client";

import useCardStore from "@repo/zustand/useCardStore";
import clsx from "clsx";
import { ReactNode } from "react";

function UiLayout({
  pathname,
  children,
}: {
  pathname: string;
  children: ReactNode;
}): JSX.Element {
  const { numCards: NUM_CARDS } = useCardStore();

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[64rem] mx-auto">
      {/* Hero */}
      <div className="flex flex-col items-center">
        <h1 className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl">
          CSS Performance
        </h1>

        <p className="mb-8 text-lg text-gray-700">
          Renders a list of {NUM_CARDS} cards using various styling strategies,
          <br />
          and uses React's <strong>&lt;Profiler&gt;</strong> component to
          measure render time.
        </p>
      </div>

      {/* MultiZone Tab Button */}
      <div className="flex justify-center">
        <div className="relative mb-4 inline-flex flex-wrap justify-center rounded-xl bg-white p-2 shadow-lg shadow-black/[0.03] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] max-[480px]:max-w-[180px] min-[480px]:mb-8">
          <div>
            <a
              href="/"
              className={clsx(
                `ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-blue-300 flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-lg px-3 text-sm font-medium transition-colors focus-visible:outline-none ${pathname === "/" ? "bg-gray-800 text-gray-200" : "text-gray-700"}`
              )}
            >
              <span>Styling Css libraries</span>
            </a>
          </div>
          <div>
            <a
              href="/second-css-groups"
              className={clsx(
                `ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-blue-300 flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-lg px-3 text-sm font-medium transition-colors focus-visible:outline-none ${pathname === "/second-css-groups" ? "bg-gray-800 text-gray-200" : "text-gray-700"}`
              )}
            >
              <span>Component libraries</span>
            </a>
          </div>
        </div>
      </div>

      <main>{children}</main>
    </div>
  );
}

export default UiLayout;
