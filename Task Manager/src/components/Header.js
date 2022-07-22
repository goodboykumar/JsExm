
import React,{ useContext } from 'react'
import { TaskListContext } from '../contexts/TaskListContext'

const Header = () => {
  const { tasks } =useContext(TaskListContext)
  return (
    <>
    <div className='header'>
      <h1>Todo List -Your tasks are : <span>{tasks.length}</span></h1>
     
    </div>
    </>
  )
}

export default Header
