import React from "react";
import TaskListContextProvider from "../contexts/TaskListContext";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import "../App.css";
import Header from "./Header";
import { Link } from "react-router-dom"

const SetTable = () => {
  return (
    <TaskListContextProvider>
    <ToastContainer />
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <div className="main">
            <TaskForm />
            <TaskList />
          </div>
          <div className='mb-2'>
                  
                  <Link to={'/table'} className="btn btn-danger ms-2">Back</Link>
                </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
};

export default SetTable;
