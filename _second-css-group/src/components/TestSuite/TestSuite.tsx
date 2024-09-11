import TestCase from "@repo/ui/TestCase";
import { VanillaExtractStyle } from "../vanilla-extract";

function TestSuite(): JSX.Element {
  return (
    <div className="flex flex-col max-w-screen-xl text-left gap-8">
      {/* Vanilla extract css */}
      <div className="flex flex-col">
        <p className="font-bold text-lg">Vanilla Extract</p>

        <div className="flex gap-6 w-full">
          <TestCase id="vanilla" name="Style" Component={VanillaExtractStyle} />
        </div>
      </div>
    </div>
  );
}

export default TestSuite;
