import React from 'react'

export default function GoalsItem(props) {
    const goal = props.goalData.goal;
    const id = props.goalData.id;
    const deleteItemHandler = () => {
        alert('Are you sure?');
        props.onDelete(id);
    };

    const editItemHandler = () => {
        props.onEdit(id);
    };

    return (
        <div className="p-3 mb-2 bg-warning text-dark text-start" style={{
            borderRadius: ' 12px',
            boxShadow: '0 1px 8px rgba(0, 0, 0, 0.25)'
        }}>
            <h1 name={id} style={{ fontSize: '20px' }}>{goal} 
                <i className="fas fa-trash-alt" onClick={deleteItemHandler} style={{ color: 'red', float: 'right', fontSize: '25px', cursor: 'pointer' }}></i>
                <i className="far fa-edit" onClick={editItemHandler} style={{ color: 'blue', float: 'right', fontSize: '25px', cursor: 'pointer', marginRight: '15px' }}></i>
            </h1>
        </div>
    )
}
