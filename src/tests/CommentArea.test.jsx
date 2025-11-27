import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import AddComment from "../Components/AddComment"

describe("Testing initial mounting", () => {
  it("checks if component is mounted correctly", () => {
    render(<AddComment />)

    const component = screen.getByDisplayValue()
    expect(component).toBeInTheDocument()
  })
})
