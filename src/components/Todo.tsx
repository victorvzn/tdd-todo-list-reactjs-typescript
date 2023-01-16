import { useTodos } from "../hooks/useTodos"

import { TodoInput } from "./TodoInput"

export interface TodoItem {
  id: string
  content: string
}

const TodoList = ({ todos, markItemAsDone }: { todos: TodoItem[], markItemAsDone: (todo: TodoItem) => void }) => {
  return (
    <ol>
      {todos.map(item => (
        <span key={item.id} onClick={() => markItemAsDone(item)}>{item.content}</span>
      ))}
    </ol>
  )
}

export const Todo = ({ items }: { items: TodoItem[] }) => {
  const { todos, addTodoItem, markItemAsDone } = useTodos(items)
  
  return (
    <div>
      <TodoInput onItemAdded={addTodoItem} />

      <TodoList todos={todos} markItemAsDone={markItemAsDone} />
    </div>
  )
}