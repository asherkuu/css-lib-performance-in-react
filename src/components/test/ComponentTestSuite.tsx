import { ChakraProvider } from "@chakra-ui/react";
import { ConfigProvider } from "antd";
import {
  MuiBoxWithProps,
  MuiBoxWithStyledTheme,
  MuiBoxWithSX,
  MuiStyled,
  MuiStyledWithTheme,
} from "@/components/mui";
import {
  JoyBoxWithProps,
  JoyBoxWithStyledTheme,
  JoyBoxWithSX,
  JoyStyled,
  JoyStyledWithTheme,
} from "@/components/mui-joy";
import {
  ChakraBoxWithProps,
  ChakraBoxWithSX,
  ChakraFactory,
} from "@/components/chakra";
import { AntdFlex } from "@/components/antd";
import TestCase from "@/components/test/TestCase";

function ComponentTestSuite() {
  return (
    <div className="flex flex-col max-w-screen-xl text-left gap-8">
      {/* Mui */}
      <div className="flex flex-col">
        <p className="font-bold text-lg">Material UI</p>

        <div className="flex gap-6 w-full">
          <TestCase
            type="component"
            id="mui-props"
            name="Box with prop"
            Component={MuiBoxWithProps}
          />
          <TestCase
            type="component"
            id="mui-sx"
            name="Box sx prop"
            Component={MuiBoxWithSX}
          />
          <TestCase
            type="component"
            id="mui-styled"
            name="Styled"
            Component={MuiStyled}
          />
          <TestCase
            type="component"
            id="mui-styled-function"
            name="Styled function"
            Component={MuiStyledWithTheme}
          />
          <TestCase
            type="component"
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
            type="component"
            id="joy-props"
            name="Box with prop"
            Component={JoyBoxWithProps}
          />
          <TestCase
            type="component"
            id="joy-sx"
            name="Box sx prop"
            Component={JoyBoxWithSX}
          />
          <TestCase
            type="component"
            id="joy-styled"
            name="Styled"
            Component={JoyStyled}
          />
          <TestCase
            type="component"
            id="joy-styled-function"
            name="Styled function"
            Component={JoyStyledWithTheme}
          />
          <TestCase
            type="component"
            id="joy-styled-function-box"
            name="Styled function with Box"
            Component={JoyBoxWithStyledTheme}
          />
        </div>
      </div>

      {/* Chakra UI */}
      <div className="flex flex-col">
        <p className="font-bold text-lg">Chakra UI</p>

        <div className="flex gap-6 w-full">
          <ChakraProvider>
            <TestCase
              type="component"
              id="chakra-props"
              name="Box with props"
              Component={ChakraBoxWithProps}
            />
            <TestCase
              type="component"
              id="chakra-sx"
              name="Box sx prop"
              Component={ChakraBoxWithSX}
            />
            <TestCase
              type="component"
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
            <TestCase
              type="component"
              id="antd-flex"
              name="Flex"
              Component={AntdFlex}
            />
          </ConfigProvider>
        </div>
      </div>

      {/* React-bootstrap */}
      <div className="flex flex-col">
        <p className="font-bold text-lg">React Bootstrap</p>

        <div className="flex gap-6 w-full">
          <p className="text-gray-400 font-semibold">Horrible &#58;&#40;</p>
        </div>
      </div>
    </div>
  );
}

export default ComponentTestSuite;
