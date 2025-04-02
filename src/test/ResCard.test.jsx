import { render, screen } from "@testing-library/react"
import ResCard, { PromotedResCard } from "../components/home/resCard"

import mockData from './mocks/resCarMock.json';
import { expect } from "vitest";
import { BrowserRouter } from "react-router-dom";

it("Should render the Name of the restaurant", () => {
    render(
    <BrowserRouter>
        <ResCard resInfo={mockData}/>
    </BrowserRouter>
    )
    const NameElem = screen.getByText(mockData.info.name);

    expect(NameElem).toBeInTheDocument();
})
it("Should render the Promoted card of the restaurant", () => {
    const EnhancedCard = PromotedResCard(ResCard);
    render(
    <BrowserRouter>
        <EnhancedCard resInfo={mockData}/>
    </BrowserRouter>
    )
    const promotedLabel = screen.getByText(/Promoted/i);

    expect(promotedLabel).toBeInTheDocument();
})