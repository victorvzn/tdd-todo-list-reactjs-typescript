export interface TodoItem {
  id: string,
  content: string
}

export const Todo = ({ items }: { items: TodoItem[] }) => {
  return <div>{items.map(item => <span>{item.content}</span>)}</div>
}