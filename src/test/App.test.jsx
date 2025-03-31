// if you import this line in every file can be handled by
// import it single time in setup.js file
// import "@testing-library/jest-dom";

import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import SignIn from "../pages/SignIn";
import { sum } from "./sum";


describe('Sign in page tests', () => {
    it('Should load heading in Sign in page', () => {
        // step 1. render something
        render(<SignIn />)

        //** step 2. Querying - the render component can be accessed with screen obj
        const heading = screen.getByRole("heading");

        // step 3. Asserting
        expect(heading).toBeInTheDocument();
    })

    test('Should find text in Sign in page', () => {
        render(<SignIn />);
        const text = screen.getByText('Sign in page', { exact: false });
        expect(text).toBeInTheDocument();
    })
})