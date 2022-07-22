import React, { useState } from "react"
import FaculityDash from "./components/FaculityDash";
import SetTable from "./components/SetTable";
import ShowTable from "./components/ShowTable";
import Welcome from "./components/Welcome";
import { Routes, Route, Navigate } from "react-router-dom"
function App() {
  const [login, setLogin] = useState(false);
  return (
    <>
      {/* // <div> */}
      {/* <ShowTable/> */}
      {/* <SetTable/> */}
      {/* //   <FaculityDash /> */}
      {/* // </div> */}
      {/* <Welcome/> */}
      <Routes>
        <Route path={'/'} element={<Navigate to={'/table'} />} />
        <Route path={'/table'} element={<ShowTable />} />
        <Route path={'/set-table'} element={<SetTable />} />

      </Routes>
    
    </>

  );
}

export default App;
