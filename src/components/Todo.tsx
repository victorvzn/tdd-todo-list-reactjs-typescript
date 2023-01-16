import React, { useState } from "react"

import { v4 as uuid } from 'uuid'

export interface TodoItem {
  id: string
  content: string
}

export const Todo = ({ items }: { items: TodoItem[] }) => {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<TodoItem[]>(items)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value)
  }

  const handleKeyDown =  (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const id = uuid()
      setTodos([...todos, { id, content: todo }])
    }
  }

  return (
    <div>
      <input
        type="text"
        data-testid='todo-input'
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />

      {todos.map(item => (
        <span key={item.id}>{item.content}</span>
      ))}
    </div>
  )
}