import { useState } from "react"
import { useTodos } from "../hooks/useTodos"

import { TodoInput } from "./TodoInput"

export interface TodoItem {
  id: string
  content: string
}

export const Todo = ({ items }: { items: TodoItem[] }) => {
  const { todos, addTodoItem, markItemAsDone } = useTodos(items)
  
  return (
    <div>
      <TodoInput onItemAdded={addTodoItem} />

      {todos.map(item => (
        <span key={item.id} onClick={() => markItemAsDone(item)}>{item.content}</span>
      ))}
    </div>
  )
}