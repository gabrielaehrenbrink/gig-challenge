import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Favourite from "./Favourite";

test("renders with initial value of false", () => {
  render(<Favourite />);

  expect(screen.getByRole("button")).toHaveTextContent("Like");
});

// test("renders with a new value of '⭐'", async () => {
//     render(<Favourite />);
    
//     // Action: Click the "Like" button
//     userEvent.click(screen.getByText("Like"));
  
//     // Assert: Check if the star emoji is present after clicking the button
//     await waitFor(() => {
//         expect(screen.getByRole("button")).toHaveTextContent("⭐");
//     });
// });

