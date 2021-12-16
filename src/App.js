import React,{useState,useEffect} from 'react';
import './App.css';
import Goals from './Component/Goals/Goals';
import NewGoal from './Component/NewGoal/NewGoal';

function App() {

  const [goals, setGoals] = useState(() => {
    const savedGoals = localStorage.getItem("goals");
    // if there are todos stored
    if (savedGoals) {
      // return the parsed JSON object back to a javascript object
      return JSON.parse(savedGoals);
      // otherwise
    } else {
      // return an empty array
      return [];
    }
  });

  const onSaveGoalHandler = (enterGoal) =>{
    setGoals((preGoals)=>{
      const updatedGoals = [...preGoals];
      updatedGoals.unshift({goal: enterGoal, id: Math.random().toString()});
      return updatedGoals;
    });
  };

  useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [goals]);

  
  const deleteItemHandler = (goalId) => {
    setGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  const [editGoalId,setEditGoalId] = useState('');
  const editItemHandler = (goalId) => {
    setEditGoalId(goalId);
    console.log(editGoalId);
  }
  return (
    <div className="App">
      <div className="container">
        <NewGoal onSaveGoal={onSaveGoalHandler}/>
        <Goals newGoalData={goals} onDeleteItem={deleteItemHandler} onEditItem={editItemHandler}/>
      </div>  
    </div>
  );
}

export default App;
