import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'

// 1. Render an item
// 2. Render multiple items
// 3. Add new item to the list
// 4. Mark an item as done

describe('Todo list app', () => {
  it('renders an item', () => {
    const todos = ['buy some milk']

    render(<Todo items={todos} />)

    expect(screen.getByText('buy some milk')).toBeInTheDocument()
  })
})