import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [state, setState] = useState({
    data: "Parent to Child",
    author: ""
  });

  //trying to get the child data
  let recieveData = (data) => {
    setState((state) => ({
      ...state,
      author: data
    }));
  };

  return (
    <>
      <div className="container ">
        {/* to make all the items in center like name,mail etc */}
        <div className="row ">
          <div className="col-md-8 ">
            <div className="card shadow-lg mt-2">
              <div className="card-body bg-success text-white">
                <h4>Parent Data </h4>
                <p>Recieved child data:{state.author} </p>
                <ChildComponent data={state.data} sendData={recieveData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParentComponent;
