import { useState } from "react"

import { TodoInput } from "./TodoInput"

export interface TodoItem {
  id: string
  content: string
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