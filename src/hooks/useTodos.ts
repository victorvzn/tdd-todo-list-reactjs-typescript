import { useState } from "react"
import { TodoItem } from "../components/Todo"

export const useTodos = (items: TodoItem[]) => {
  const [todos, setTodos] = useState<TodoItem[]>(items)

  const addTodoItem = (item: TodoItem) => {
    setTodos([...todos, item])
  }

  const markItemAsDone = (item: TodoItem) => {
    const newTodos = todos.filter(todo => todo.id !== item.id)
    setTodos(newTodos)
  }

  return {
    todos,
    addTodoItem,
    markItemAsDone
  }
}