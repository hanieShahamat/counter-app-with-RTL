import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import App from "./App";

test("Initial count value to be 0", () => {
  render( <App/>)
  const counterH1Element = screen.getByTestId("counter");
  expect(counterH1Element).toHaveTextContent("0");
});

test("click button to increase counter", ()=>{
  render( <App/>)
  const increaseBtnnElement = screen.getByTestId("increase")
  expect(increaseBtnnElement).toBeDefined()
  fireEvent.click(increaseBtnnElement)
  expect(screen.getByTestId("counter")).toHaveTextContent("1")
})

test("click button to decrease counter", ()=>{
  render( <App/>)
  const decreaseBtnnElement = screen.getByTestId("decrease")
  expect(decreaseBtnnElement).toBeDefined()
  fireEvent.click(decreaseBtnnElement)
  expect(screen.getByTestId("counter")).toHaveTextContent("0")
})

test("click button to reset counter", ()=>{
  render( <App/>)
  const resetIconElement = screen.getByTestId("reset")
  expect(resetIconElement).toBeDefined()
  fireEvent.click(resetIconElement)
  expect(screen.getByTestId("counter")).toHaveTextContent("0")
})