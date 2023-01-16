import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'

// 1. Render an item
// 2. Render multiple items
// 3. Add new item to the list
// 4. Mark an item as done

import { Todo } from './Todo'

describe('Todo list app', () => {
  it('renders an item', () => {
    const todos = [{
      id:'item-1',
      content: 'buy some milk'
    }]

    render(<Todo items={todos} />)

    expect(screen.getByText('buy some milk')).toBeInTheDocument()
  })

  it('renders another item', () => {
    const todos = [{
      id:'item-1',
      content: 'buy some apples'
    }]

    render(<Todo items={todos} />)

    expect(screen.getByText('buy some apples')).toBeInTheDocument()
  })

  it('renders multiple items', () => {
    const todos = [{
      id:'item-1',
      content: 'buy some milk'
    }, {
      id: 'item-2',
      content: 'buy some apples'
    }]

    render(<Todo items={todos} />)

    expect(screen.getByText('buy some milk')).toBeInTheDocument()
    expect(screen.getByText('buy some apples')).toBeInTheDocument()
  })
})