import {NewTaskForm} from "../NewTaskForm";
import {useState} from "react";
import {Modal} from "../Modal";

export const NewTaskContainer = ({handleAddTask}) => {

    const [show, setShow] = useState(false);


    return(

        <>
            <h3 className="hide-mobile">New Task</h3>


            <button className="mobile-variant" onClick={() => setShow(show => !show)}>
                <span className="flex-centered text-capitalize">
                    New task
                    <img className="ms-1" alt="Close icon" src="icons/icon-close.svg" height={20} width={20}/>
                </span>
            </button>


            <Modal title={"New task"} show={show} onClose={() => setShow(false)}>
                <div className="mobile-form">
                    <NewTaskForm handleAddTask={(taskTitle, isHighPrio) => {
                        setShow(false);
                        handleAddTask(taskTitle, isHighPrio);
                    }}/>
                </div>
            </Modal>


            <div className="task-card hide-mobile">
                <NewTaskForm handleAddTask={handleAddTask}/>
            </div>
        </>
    )
}