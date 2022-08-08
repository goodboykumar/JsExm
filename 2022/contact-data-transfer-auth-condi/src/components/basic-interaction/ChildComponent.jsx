import React, { useState } from "react";

const ChildComponent = (props) => {
  //recieve the data from parent as (props) and show it

  //create state for childComp
  const [state, setState] = useState({
    author: "child data"
  });

  let clickBtn = () => {
    //send data to parent
    // console.log(props.sendData)   //it returns that function
    props.sendData(state.author); //passing child data as param to parent
  };

  return (
    <>
      <div className="container ">
        {/* to make all the items in center like name,mail etc */}
        <div className="row ">
          <div className="col-md-8 ">
            <div className="card shadow-lg mt-2">
              <div className="card-body bg-warning text-dark">
                <h4>Child Data </h4>
                <p> {props.data}</p>

                <button onClick={clickBtn} className="btn btn-dark btn-sm">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChildComponent;

/*
to send data from child to parent we need an event here above
we defined the state that data need to be transferred.

-create extra field in parent as author inside state and write in <p>
-then write a function that recieve the data from parent
-we have written a function in parent as recieveData and now passing
that particular function as props to child component.

-providing the child state data to parent->parent will recieve the data->
then it will go through the function and update the obj->then it willbe
getting the updated state data and render it

NOTE- the parent comp should have the function which will update the child data
and pass the function as a prop to child there call the function
update the state . and it's done
*/
