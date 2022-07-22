import React, { useContext } from "react";
import { TaskListContext } from "../contexts/TaskListContext";
import Task from "./Task";

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);

  return (
    <>
    <div  className={tasks.complete ? "todo strike" : "tasks"}>

    {/* here i am trying for the strike on task unable to achieve but able to get in console */}
     
      {tasks.length ? (
        <ul className="list">
          {tasks.map(task => {
            return <Task task={task} key={task.id} />;
          })}
        </ul>
      ) : (
        <div className="no-tasks">No Tasks</div>
      )}
    </div>
    </>
  );
};

export default TaskList;
