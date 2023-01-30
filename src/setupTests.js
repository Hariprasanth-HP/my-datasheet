// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import Enzyme from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import * as ResizeObserverModule from "resize-observer-polyfill";

global.ResizeObserver = ResizeObserverModule.default;

Enzyme.configure({ adapter: new Adapter() });
