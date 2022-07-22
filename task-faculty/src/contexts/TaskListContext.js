import React, { createContext, useState, useEffect } from 'react'
import uuid from 'uuid'
import { toast } from 'react-toastify'


export const TaskListContext = createContext()

const TaskListContextProvider = props => {
  const initialState = JSON.parse(localStorage.getItem('tasks')) || []

  const [tasks, setTasks] = useState(initialState)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
    //console.log(tasks.length);
  }, [tasks])

  const [editItem, setEditItem] = useState(null)

  // Add tasks
  const addTask = title => {
    setTasks([...tasks, { title, id: uuid(),}])
    toast.success(`Task Added Successfully`);
  }

  // Remove tasks
  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id))
    toast.warning(`Task Removed Successfully`);
  }

  // Clear tasks
  const clearList = () => {
    setTasks([])
    toast.dark(`All Task Removed`);
  }

  // Find task
  const findItem = id => {
    const item = tasks.find(task => task.id === id)

    setEditItem(item)
  }

  // Edit task
  const editTask = (title, id) => {
    const newTasks = tasks.map(task => (task.id === id ? { title, id } : task))

    console.log(newTasks)

    setTasks(newTasks)
    setEditItem(null)
  }

  //complete task
   const completeTask = ( id) => {
    let selectedTask = tasks.map((task) => {
     
      return task.id === id
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
  setEditItem(selectedTask)
  //console.log(selectedTask);
  
   }

  return (
    <>
    <TaskListContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        clearList,
        findItem,
        editTask,
        editItem,
        completeTask
      }}
    >
      {props.children}
    </TaskListContext.Provider>
    </>
  )
}

export default TaskListContextProvider
