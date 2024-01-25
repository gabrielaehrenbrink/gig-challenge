import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Gig from "./Gig";


test("renders with the correct props", () => {
    const props = {
        id: 1,
        event: 'The Eras Tour',
        date: '21-06-2024',
        location: 'London',
        favorited: false,
    };
    render(<Gig gig={props} />);

    expect(screen.getByText(props.event)).toHaveTextContent(props.event);
    expect(screen.getByText(props.date)).toHaveTextContent(props.date);
    expect(screen.getByText(props.location)).toHaveTextContent(props.location);
});