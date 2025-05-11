import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/searchResCard.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should load search button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchbtn = screen.getByRole("button", { name: "Search" });
  expect(searchbtn).toBeInTheDocument();
});

it("Should load search results", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeSearch = screen.getAllByTestId("rescards");
  expect(cardsBeforeSearch.length).toBe(20);

  const searchbtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, {
    target: { value: "cream" }
  });

  fireEvent.click(searchbtn);

  const cardsAfterSearch = screen.getAllByTestId("rescards");
  expect(cardsAfterSearch.length).toBe(3);
});

it("Should load filtered results", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
    const cardsBeforeFilter = screen.getAllByTestId("rescards");
    expect(cardsBeforeFilter.length).toBe(20);
  
    const filterbtn = screen.getByRole("button", { name: "Top Rated Restaurants" });
  
    fireEvent.click(filterbtn);
  
    const cardsAfterFilter = screen.getAllByTestId("rescards");
    expect(cardsAfterFilter.length).toBeGreaterThan(5);
  });