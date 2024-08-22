import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("Parent", () => {
  afterEach(() => {
    cleanup();
  });
  test("Initial count value to be 0", () => {
    render(<App />);
    const counterH1Element = screen.getByTestId("counter");
    expect(counterH1Element).toHaveTextContent("0");
  });

  describe("increase button actions", () => {
    test("click button to increase counter", () => {
      render(<App />);
      const increaseBtnnElement = screen.getByTestId("increase");
      expect(increaseBtnnElement).toBeDefined();
      fireEvent.click(increaseBtnnElement);
      expect(screen.getByTestId("counter")).toHaveTextContent("1");
    });
    test("not to be action when double click", () => {
      render(<App />);
      const increaseBtnnElement = screen.getByTestId("increase");
      expect(increaseBtnnElement).toBeDefined();
      userEvent.dblClick(increaseBtnnElement);
      expect(screen.getByTestId("counter")).toHaveTextContent("0");
    });
  });

  describe("decrease button actions", () => {
    test("click button to decrease counter", () => {
      render(<App />);
      const decreaseBtnnElement = screen.getByTestId("decrease");
      expect(decreaseBtnnElement).toBeDefined();
      fireEvent.click(decreaseBtnnElement);
      expect(screen.getByTestId("counter")).toHaveTextContent("0");
    });
    test("when counter is 0, stay zero after 100 times click decrease button", () => {
      render(<App />);
      const decreaseBtnnElement = screen.getByTestId("decrease");
      expect(decreaseBtnnElement).toBeDefined();
      const i = 0;
      while (i == 100) {
        fireEvent.click(decreaseBtnnElement);
      }
      expect(screen.getByTestId("counter")).toHaveTextContent("0");
    });
  });

  describe("reset button actions", () => {
    test("click button to reset counter", () => {
      render(<App />);
      const resetIconElement = screen.getByTestId("reset");
      expect(resetIconElement).toBeDefined();
      fireEvent.click(resetIconElement);
      expect(screen.getByTestId("counter")).toHaveTextContent("0");
    });

    test("reset counter after count increment", () => {
      render(<App />);
      const resetIconElement = screen.getByTestId("reset");
      expect(resetIconElement).toBeDefined();

      const increaseBtnnElement = screen.getByTestId("increase");
      expect(increaseBtnnElement).toBeDefined();
      fireEvent.click(increaseBtnnElement);
      fireEvent.click(increaseBtnnElement);
      fireEvent.click(increaseBtnnElement);
      fireEvent.click(increaseBtnnElement);

      fireEvent.click(resetIconElement);
      expect(screen.getByTestId("counter")).toHaveTextContent("0");
    });

    test("reset counter after coun decrement", () => {
      render(<App />);
      const resetIconElement = screen.getByTestId("reset");
      expect(resetIconElement).toBeDefined();

      const decreaseBtnnElement = screen.getByTestId("decrease");
      expect(decreaseBtnnElement).toBeDefined();
      fireEvent.click(decreaseBtnnElement);
      fireEvent.click(decreaseBtnnElement);
      fireEvent.click(decreaseBtnnElement);
      fireEvent.click(decreaseBtnnElement);

      fireEvent.click(resetIconElement);
      expect(screen.getByTestId("counter")).toHaveTextContent("0");
    });
  });
});