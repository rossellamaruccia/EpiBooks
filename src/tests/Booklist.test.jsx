import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import BookList from "../components/BookList"
import fantasy from "../../public/data/fantasy.json"

describe('compares numbers of cards and elements in the mapped json', () => {
  it("counts the number of cards in the component", async () => {
    render(<BookList />)
    render(fantasy)
    const cards = await screen.findAllByTestId("cardElement")
    expect(cards).toEqual(fantasy.length)
  })
})  