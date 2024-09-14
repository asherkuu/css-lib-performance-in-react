import * as markdownCodes from "@/code-markdowns/codes";
import {
  VanillaCss,
  VanillaModule,
  Scss,
  ScssModule,
} from "@/components/vanilla";
import { TailwindClasses } from "@/components/tailwind";
import {
  EmotionCss,
  EmotionStyled,
  EmotionStyledFunction,
} from "@/components/emotion";
import { StyledComponents } from "@/components/styled-components";
import {
  VanillaExtractStyle,
  VanillaExtractDynamic,
  VanillaExtractRecipes,
} from "@/components/vanilla-extract";
import TestCase from "@/components/test/TestCase";

function TestSuite() {
  return (
    <div className="flex flex-col max-w-screen-xl text-left gap-8">
      {/* vanilla css & scss */}
      <div className="flex flex-col">
        <p className="font-bold text-lg">Vanilla css & Scss</p>

        <div className="flex gap-6 w-full">
          {/* vanilla css */}
          <TestCase
            type="css"
            id="vanilla-css"
            name="CSS"
            Component={VanillaCss}
            code={markdownCodes.vanillaCssMd}
          />

          {/* vanilla css module */}
          <TestCase
            type="css"
            id="vanilla-css-module"
            name="CSS module"
            Component={VanillaModule}
            code={markdownCodes.vanillaCssModuleMd}
          />

          {/* scss module */}
          <TestCase
            type="css"
            id="scss"
            name="Scss"
            Component={Scss}
            code={markdownCodes.scssMd}
          />
          <TestCase
            type="css"
            id="scss-module"
            name="Scss module"
            Component={ScssModule}
            code={markdownCodes.scssModuleMd}
          />
        </div>
      </div>

      {/* Styled-components */}
      <div className="flex flex-col">
        <p className="font-bold text-lg">Styled components</p>

        <div className="flex gap-6 w-full">
          <TestCase
            type="css"
            id="styled-components"
            name="Styled"
            Component={StyledComponents}
            code={markdownCodes.styledMd}
          />
        </div>
      </div>

      {/* Emotion */}
      <div className="flex flex-col">
        <p className="font-bold text-lg">Emotion</p>

        <div className="flex gap-6 w-full">
          <TestCase
            type="css"
            id="emotion-css"
            name="Emotion css"
            Component={EmotionCss}
            code={markdownCodes.emotionMd}
          />
          <TestCase
            type="css"
            id="emotion-styled"
            name="Emotion styled"
            Component={EmotionStyled}
            code={markdownCodes.emotionStyledMd}
          />
          <TestCase
            type="css"
            id="emotion-styled-function"
            name="Emotion styled function"
            Component={EmotionStyledFunction}
            code={markdownCodes.emotionStyledFunctionMd}
          />
        </div>
      </div>

      {/* Tailwindcss */}
      <div className="flex flex-col">
        <p className="font-bold text-lg">Tailwind css</p>

        <div className="flex gap-6 w-full">
          <TestCase
            type="css"
            id="tailwindcss"
            name="Tailwindcss"
            Component={TailwindClasses}
            code={markdownCodes.tailwindMd}
          />
        </div>
      </div>

      {/* Vanilla extract css */}
      <div className="flex flex-col">
        <p className="font-bold text-lg">Vanilla Extract</p>

        <div className="flex gap-6 w-full">
          <TestCase
            type="css"
            id="vanilla"
            name="Style"
            Component={VanillaExtractStyle}
            code={markdownCodes.vanillaExtractMd}
          />
          <TestCase
            type="css"
            id="vanilla-dynamic"
            name="Dynamic"
            Component={VanillaExtractDynamic}
            code={markdownCodes.vanillaExtractDynamicMd}
          />
          <TestCase
            type="css"
            id="vanilla-recipes"
            name="Recipes"
            Component={VanillaExtractRecipes}
            code={markdownCodes.vanillaExtractRecipesMd}
          />
        </div>
      </div>
    </div>
  );
}

export default TestSuite;
