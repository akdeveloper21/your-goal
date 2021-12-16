import React from 'react'
import './Goals.css';
import GoalsItem from './GoalsItem'

export default function Goals(props) {
    const goalData = props.newGoalData;
    return (
        <div className="container-goals">
            {goalData.length === 0 ? <h1>No Goals Found!!!!</h1> : goalData.map((item)=>{
                return <GoalsItem key={item.id} goalData={item} onDelete={props.onDeleteItem} onEdit={props.onEditItem}/>
            })}
        </div>
    )
}
