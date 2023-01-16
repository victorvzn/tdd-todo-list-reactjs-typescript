import React, { useState } from "react"

import { v4 as uuid } from 'uuid'

export interface TodoItem {
  id: string
  content: string
}

const TodoInput = ({ onItemAdded }: { onItemAdded: (item: TodoItem) => void}) => {
  const [todo, setTodo] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value)
  }

  const handleKeyDown =  (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const id = uuid()
      onItemAdded({ id, content: todo })
    }
  }

  return (
    <input type="text" data-testid='todo-input' onChange={handleChange} onKeyDown={handleKeyDown} />
  )
}

export const Todo = ({ items }: { items: TodoItem[] }) => {
  const [todos, setTodos] = useState<TodoItem[]>(items)

  const onItemAdded = (item: TodoItem) => {
    setTodos([...todos, item])
  }
   
  return (
    <div>
      <TodoInput onItemAdded={onItemAdded} />

      {todos.map(item => (
        <span key={item.id}>{item.content}</span>
      ))}
    </div>
  )
}