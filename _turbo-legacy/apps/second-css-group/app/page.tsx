"use client";

import React from "react";
import * as styles from "./page.css";

function page() {
  return <div className={styles.grid}>page</div>;
}

export default page;

// "use client";

// import React from "react";
// import UiLayout from "@repo/ui/UiLayout";
// import useCardStore from "@repo/zustand/useCardStore";
// // import Statistics from "../src/components/Statistics";
// import TestSuite from "../src/components/TestSuite/TestSuite";

// function Home() {
//   const { runCount, setRunCount } = useCardStore();

//   const [loading, setLoading] = React.useState(false);

//   const onClickRun = React.useCallback(() => {
//     if (loading || runCount === -1) {
//       return;
//     }

//     let nextRunCount = runCount + 1;
//     setRunCount(-1);
//     setTimeout(() => {
//       setRunCount(nextRunCount);
//       setLoading(false);
//     }, 100);
//   }, [loading, runCount, setRunCount]);

//   return (
//     <UiLayout pathname="/">
//       <div className="flex justify-center mb-12">
//         {runCount === -1 ? (
//           <div className="btn-sm bg-violet-400 text-gray-200 shadow w-[116px]">
//             loading...
//           </div>
//         ) : (
//           <button
//             type="button"
//             className="btn-sm bg-violet-600 text-gray-200 shadow hover:bg-violet-900  w-[116px]"
//             onClick={onClickRun}
//             disabled={runCount === -1 || loading}
//           >
//             {runCount > 0 ? "Run Again" : "Run Test Suite"}
//           </button>
//         )}

//         {/* <Statistics /> */}
//       </div>

//       {runCount > 0 && <TestSuite key={runCount} />}
//     </UiLayout>
//   );
// }

// export default Home;
