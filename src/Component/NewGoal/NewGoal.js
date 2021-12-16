import React, { useState } from "react";
import "./NewGoal.css";

export default function NewGoal(props) {
  const [item, setItem] = useState("");
 // const [isEditing, setIsEditing] = useState(false);

  /*if(props.editGoalId !== null){
      setIsEditing(true);
  }*/
  const goalChangeHandler = (event) => {
    setItem(event.target.value);
  };
  const submitAddHandeler = (event) => {
    event.preventDefault();
    if (item.trim().length === 0) {
      return alert("Please enter a value");
    } else {
      props.onSaveGoal(item);
      setItem("");
    }
  };

 /* const submitEditHandeler = (event) => {
    setItem({ ...item, goal: event.target.value });
    console.log(item);
  };

  const cancelEditHandler = () => {
    setIsEditing(false);
  };*/

  //const enabled = item.length > 0; use for disabel button

  return (
    <>
        <form onSubmit={submitAddHandeler}>
          <div className="container-newgoal">
            <div className="item">
              <h2>Your Goal</h2>
            </div>
            <div className="item">
              <input
                type="text"
                value={item}
                onChange={goalChangeHandler}
                placeholder="Add a new goal"
              ></input>
            </div>
            <div className="item">
              <button type="submit" className="btn btn-warning">
                Add Goal
              </button>
            </div>
          </div>
        </form>
      
    </>
  );
}
