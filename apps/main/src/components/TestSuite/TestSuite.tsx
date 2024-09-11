import { ChakraProvider } from "@chakra-ui/react";
import { ConfigProvider } from "antd";

import TestCase from "@repo/ui/TestCase";
import { PureCss, PureCssModule, Sass } from "../pure";
import { TailwindClasses } from "../tailwind";
import { pureCssMd, pureCssModuleMd } from "../../code-markdowns/codes";
import { EmotionCss, EmotionStyled, EmotionStyledFunction } from "../emotion";
import {
  MuiBoxWithProps,
  MuiBoxWithStyledTheme,
  MuiBoxWithSX,
  MuiStyled,
  MuiStyledWithTheme,
} from "../mui";
import {
  JoyBoxWithProps,
  JoyBoxWithStyledTheme,
  JoyBoxWithSX,
  JoyStyled,
  JoyStyledWithTheme,
} from "../mui-joy";
import { ChakraBoxWithProps, ChakraBoxWithSX, ChakraFactory } from "../chakra";
import { AntdFlex } from "../antd";
import { StyledComponents } from "../styled-components";
import {
  VanillaExtractStyle,
  VanillaExtractDynamic,
  VanillaExtractRecipes,
} from "../vanilla-extract";

function TestSuite() {
  return (
    <div className="flex flex-col max-w-screen-xl text-left gap-8">
      {/* Pure css */}
      <div className="flex flex-col">
        <p className="font-bold text-lg">Vanilla css & sass</p>

        <div className="flex gap-6 w-full">
          {/* pure css */}
          <TestCase
            id="pure-css"
            name="CSS"
            Component={PureCss}
            code={pureCssMd}
          />

          {/* pure css module */}
          <TestCase
            id="pure-css-module"
            name="CSS module"
            Component={PureCssModule}
            code={pureCssModuleMd}
          />

          {/* pure css module */}
          <TestCase id="sass" name="sass" Component={Sass} />
        </div>
      </div>

      {/* Emotion */}
      <div className="flex flex-col">
        <p className="font-bold text-lg">Emotion</p>

        <div className="flex gap-6 w-full">
          <TestCase
            id="emotion-css"
            name="Emotion css"
            Component={EmotionCss}
          />
          <TestCase
            id="emotion-styled"
            name="Emotion styled"
            Component={EmotionStyled}
          />
          <TestCase
            id="emotion-styled-function"
            name="Emotion styled function"
            Component={EmotionStyledFunction}
          />
        </div>
      </div>

      {/* Mui */}
      <div className="flex flex-col">
        <p className="font-bold text-lg">Material UI</p>

        <div className="flex gap-6 w-full">
          <TestCase
            id="mui-props"
            name="Box with prop"
            Component={MuiBoxWithProps}
          />
          <TestCase id="mui-sx" name="Box sx prop" Component={MuiBoxWithSX} />
          <TestCase id="mui-styled" name="Styled" Component={MuiStyled} />
          <TestCase
            id="mui-styled-function"
            name="Styled function"
            Component={MuiStyledWithTheme}
          />
          <TestCase
            id="mui-styled-function-box"
            name="Styled function with Box"
            Component={MuiBoxWithStyledTheme}
          />
        </div>
      </div>

      {/* Mui Joy UI */}
      <div className="flex flex-col">
        <p className="font-bold text-lg">
          Joy UI <span className="text-sm">(Mui)</span>
        </p>

        <div className="flex gap-6 w-full">
          <TestCase
            id="joy-props"
            name="Box with prop"
            Component={JoyBoxWithProps}
          />
          <TestCase id="joy-sx" name="Box sx prop" Component={JoyBoxWithSX} />
          <TestCase id="joy-styled" name="Styled" Component={JoyStyled} />
          <TestCase
            id="joy-styled-function"
            name="Styled function"
            Component={JoyStyledWithTheme}
          />
          <TestCase
            id="joy-styled-function-box"
            name="Styled function with Box"
            Component={JoyBoxWithStyledTheme}
          />
        </div>
      </div>

      {/* Tailwindcss */}
      <div className="flex flex-col">
        <p className="font-bold text-lg">Tailwind css</p>

        <div className="flex gap-6 w-full">
          <TestCase
            id="tailwindcss"
            name="Tailwindcss"
            Component={TailwindClasses}
          />
        </div>
      </div>

      {/* Chakra UI */}
      <div className="flex flex-col">
        <p className="font-bold text-lg">Chakra UI</p>

        <div className="flex gap-6 w-full">
          <ChakraProvider>
            <TestCase
              id="chakra-props"
              name="Box with props"
              Component={ChakraBoxWithProps}
            />
            <TestCase
              id="chakra-sx"
              name="Box sx prop"
              Component={ChakraBoxWithSX}
            />
            <TestCase
              id="chakra-factory"
              name="Factory"
              Component={ChakraFactory}
            />
          </ChakraProvider>
        </div>
      </div>

      {/* Antd */}
      <div className="flex flex-col">
        <p className="font-bold text-lg">Antd</p>

        <div className="flex gap-6 w-full">
          <ConfigProvider>
            <TestCase id="antd-flex" name="Flex" Component={AntdFlex} />
          </ConfigProvider>
        </div>
      </div>

      {/* Antd */}
      <div className="flex flex-col">
        <p className="font-bold text-lg">Styled components</p>

        <div className="flex gap-6 w-full">
          <TestCase
            id="styled-components"
            name="Styled"
            Component={StyledComponents}
          />
        </div>
      </div>

      {/* Vanilla extract css */}
      <div className="flex flex-col">
        <p className="font-bold text-lg">Vanilla Extract</p>

        <div className="flex gap-6 w-full">
          <TestCase id="vanilla" name="Style" Component={VanillaExtractStyle} />
          <TestCase
            id="vanilla-dynamic"
            name="Dynamic"
            Component={VanillaExtractDynamic}
          />
          <TestCase
            id="vanilla-recipes"
            name="Recipes"
            Component={VanillaExtractRecipes}
          />
        </div>
      </div>
    </div>
  );
}

export default TestSuite;
