import {CustomCheckbox} from "./CustomCheckbox";

export const TaskCard = ({title, isHighPrio, completed, handleTaskDelete, onClick, onCheckboxClick}) => {


    return (
        <div className="hover-scale" title="Alternate task status" onClick={onClick}>

            <div className={"task-card flex-between" + (completed ? " done" : " progress")}>
                <div>
                    <CustomCheckbox checked={completed} onClick={e => {
                        e.stopPropagation();
                        onCheckboxClick();
                    }}/>
                    <span className={"dot" + (isHighPrio ? " high-prio" : "")}/>
                    <span className={completed ? "done-text" : ""}>
                        {title}
                    </span>
                </div>

                <button className="light icon delete" onClick={e => {
                    handleTaskDelete();
                    e.stopPropagation();
                }}>
                    <img alt="Trash-bin icon" src="icons/icon-trash.svg" height={20}/>
                </button>

            </div>
        </div>
    )
}