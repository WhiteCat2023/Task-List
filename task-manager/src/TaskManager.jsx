import { useState } from "react";
import TaskItem from "./TaskItem";
import CV from "./CV";

export default function TaskManager({tasks}) {
    const [isClicked, setIsClicked] = useState(false);
    const [key, setKey] = useState('');

    const selected = tasks.find(task => task.id == key);

    function clicked(key){
        setKey(key);
        setIsClicked(true);
    }
    function onClose(){
        setIsClicked(false);
    }
    return (
        <>
            <div className="w-full" style={{display: isClicked ? 'none': 'block'}}>
                <ul className="flex flex-wrap gap-2 lg:gap-4 justify-center">
                    {tasks.map(task => (
                        <li onClick={() => clicked(task.id)} key={task.id} >
                            <TaskItem task={task}/>
                        </li>
                    ))}
                </ul>
            </div>
            {isClicked && <CV isOpen={isClicked} onClose={onClose} task={selected}/>}
        </>
    )
}
