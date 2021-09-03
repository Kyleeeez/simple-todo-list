import {useState} from "react";
import {IosSwitch} from "./IosSwitch";

export const NewTaskForm = ({handleAddTask}) => {


    const [taskTitle, setTaskTitle] = useState("");
    const [isHighPrio, setIsHighPrio] = useState(false);

    const addTask = async (e) => {
        e.preventDefault();
        try{
            await handleAddTask(taskTitle, isHighPrio);
            setTaskTitle("");
            setIsHighPrio(false);
        } catch (e){
            alert(e);
        }
    }


    return(
            <form className="new-task-form" onSubmit={addTask}>
                <textarea value={taskTitle} onChange={e => setTaskTitle(e.target.value)} type="text" placeholder="Insert task title..."/>
                <div className="form-btns">
                    <label className="d-flex align-center mx-auto">
                        <span className="pe-1">High priority</span>
                        <IosSwitch checked={isHighPrio} onClick={e => {
                            e.preventDefault();
                            setIsHighPrio(currPrio => !currPrio)
                        }}/>

                    </label>
                    <button disabled={!taskTitle}>Add</button>
                </div>
            </form>
    )
}