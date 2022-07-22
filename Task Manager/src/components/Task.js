import React, { useContext } from 'react'
import { TaskListContext } from '../contexts/TaskListContext'

const Task = ({ task }) => {
  const { removeTask, findItem,completeTask } = useContext(TaskListContext)
  return (
    <>
      <li className="list-item">
        <span>{task.title} </span>
        <div>
          <button className="btn-edit task-btn" onClick={() => completeTask(task.id)}>
            <i className="fas fa-check"></i>
          </button>

          <button
            className="btn-delete task-btn"
            onClick={() => removeTask(task.id)}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
          <button className="btn-edit task-btn" onClick={() => findItem(task.id)}>
            <i className="fas fa-pen"></i>
          </button>
        </div>

      </li>
      {/* <p>{console.log(task)}</p> */}
    </>
  )
}

export default Task
