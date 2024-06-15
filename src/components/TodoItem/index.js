// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, onDelete} = props
  const {id, title} = todoDetails

  const onClickItem = () => {
    onDelete(id)
  }

  return (
    <li>
      <p>{title}</p>
      <button type="button" onClick={onClickItem} className="button">
        Delete
      </button>
    </li>
  )
}
export default TodoItem
