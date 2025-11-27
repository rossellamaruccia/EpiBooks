import {render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import Welcome from "../Components/Welcome"

describe("Testing initial mounting", () => {
  it("checks if component is mounted correctly", () => {
    render(<Welcome />)

    const title = screen.getByText("Benvenuti in EpiBooks!")
    expect(title).toBeInTheDocument()
  })
})
