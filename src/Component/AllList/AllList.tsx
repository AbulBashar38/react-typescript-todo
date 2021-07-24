import React from 'react';
import { useState } from 'react';
import './AllList.css'
interface IProps {
    task: string
}
const AllList = ({ task }: IProps) => {
    const [isComplete, setIsComplete] = useState(false)

    const handleCompleteBtn = () => {
        setIsComplete(true)
        
    }
    return (
        <div className='list-container'>
            <p style={isComplete?{textDecoration:'line-through'}:{}}>{task}</p>
            <button id='completeBtn'  onClick={handleCompleteBtn} className='customBtn addBtn'>Complete</button>
        </div>
    );
};

export default AllList;