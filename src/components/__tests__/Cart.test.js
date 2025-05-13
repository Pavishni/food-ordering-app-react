import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import { act } from "react";
import MOCK_DATA from "../mocks/resMenuMock.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should add item to cart", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const resMenuText = screen.getByText("Korean Range & New Offerings (26)");
  fireEvent.click(resMenuText);

  const addbtn = screen.getAllByRole("button", { name: "Add" });
  fireEvent.click(addbtn[0]);

  const cartItemCount = screen.getByText("1")
  expect(cartItemCount).toBeInTheDocument();
});

it("Should clear cart", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const resMenuText = screen.getByText("Korean Range & New Offerings (26)");
  fireEvent.click(resMenuText);

  const addbtn = screen.getAllByRole("button", { name: "Add" });
  fireEvent.click(addbtn[0]);

  const cartItemCount = screen.getByText("1")
  expect(cartItemCount).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", {name: "Clear cart"}));

  expect(
    screen.getByText("Cart is empty. Please add items to cart")
  ).toBeInTheDocument();
});
