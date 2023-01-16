import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'

// 1. Render an item
// 2. Render multiple items
// 3. Add new item to the list
// 4. Mark an item as done

const Todo = ({ items }: { items: string[] }) => {
  return <div>{items[0]}</div>
}

describe('Todo list app', () => {
  it('renders an item', () => {
    const todos = ['buy some milk']

    render(<Todo items={todos} />)

    expect(screen.getByText('buy some milk')).toBeInTheDocument()
  })

  it('renders another item', () => {
    const todos = ['buy some apples']

    render(<Todo items={todos} />)

    expect(screen.getByText('buy some apples')).toBeInTheDocument()
  })

  it('renders multiple items', () => {
    const todos = ['buy some milk', 'buy some apples']

    render(<Todo items={todos} />)

    expect(screen.getByText('buy some milk')).toBeInTheDocument()
    expect(screen.getByText('buy some apples')).toBeInTheDocument()
  })
})