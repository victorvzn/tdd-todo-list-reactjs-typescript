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

  const markItemAsDone = (item: TodoItem) => {
    const newTodos = todos.filter(todo => todo.id !== item.id)
    setTodos(newTodos)
  }
   
  return (
    <div>
      <TodoInput onItemAdded={onItemAdded} />

      {todos.map(item => (
        <span key={item.id} onClick={() => markItemAsDone(item)}>{item.content}</span>
      ))}
    </div>
  )
}