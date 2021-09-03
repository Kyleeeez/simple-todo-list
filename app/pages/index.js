import {TaskCard} from "./components/TaskCard";
import {NewTaskContainer} from "./components/new-task/NewTaskContainer";
import {useState} from "react";
import {Menu} from "./components/Menu";
import {Modal} from "./components/Modal";

export default function Home() {

    const [tasks, setTasks] = useState([]);
    const [taskDetail, setTaskDetail] = useState();
    const [showModal, setShowModal] = useState();

    const inProgressTasks = !!tasks.length ? tasks.filter(({completed}) => !completed) : [];
    const doneTasks = !!tasks.length ? tasks.filter(({completed}) => completed) : [];

    const handleAddTask = (title, isHighPrio) => {
        setTasks(currTasks => [{title, isHighPrio, completed: false, id: new Date().getTime()}, ...currTasks].sort((a,b) =>  (b.isHighPrio-a.isHighPrio)));
    }

    const handleTaskClick = (taskIndex, statusToApply) => {

        if(window.innerWidth > 414){
            updateTaskStatus(taskIndex, statusToApply);
        } else {
            setTaskDetail({taskIndex, data: tasks[taskIndex]});
            setShowModal(tasks[taskIndex]);
        }

    }

    const updateTaskStatus = (taskIndex, statusToApply) => {
        const tasksCopy = [...tasks];
        tasksCopy[taskIndex].completed = statusToApply;
        setTasks(tasksCopy);
    }

    const deleteTask = (taskIndex) => {
        const tasksCopy = [...tasks];
        tasksCopy.splice(taskIndex, 1);
        setTasks(tasksCopy);
    }

    return (
        <div className="h-100 d-flex desktop">


            <Menu dashboardLabel={!!tasks.length && (doneTasks.length + "/" + tasks.length)} />

            <div className="container">

                <h2 className="hide-desktop">MyTrack</h2>

                <NewTaskContainer handleAddTask={handleAddTask}/>

                {
                    !!tasks.length ?

                        <>

                            <>
                                <h3 className="mb-1">
                                    In progress&nbsp;&nbsp;
                                    <span className="number-label">{inProgressTasks.length}</span>
                                </h3>

                                {
                                    tasks.map((taskData, i) => (
                                            !taskData.completed &&
                                            <TaskCard key={taskData.id} {...taskData}
                                                handleTaskDelete={() => deleteTask(i)}
                                                      onCheckboxClick={() => updateTaskStatus(i, !taskData.completed)}
                                                      onClick={() => handleTaskClick(i, !taskData.completed)}
                                            />
                                        )
                                    )
                                }
                            </>

                            <>
                                <h3 className="mb-1">
                                    Done&nbsp;&nbsp;
                                    <span className="number-label">{doneTasks.length}</span>
                                </h3>

                                {
                                    tasks.map((taskData, i) => (
                                            taskData.completed &&
                                            <TaskCard key={taskData.id} {...taskData}
                                                handleTaskDelete={() => deleteTask(i)}
                                                      onCheckboxClick={() => updateTaskStatus(i, !taskData.completed)}
                                                      onClick={() => handleTaskClick(i, !taskData.completed)}
                                            />
                                        )
                                    )
                                }
                            </>

                        </>


                        :
                        <p className="op-5">No tasks added yet.</p>
                }
            </div>


            <Modal status={taskDetail?.data.isHighPrio} title={"Task"} show={showModal && taskDetail} onClose={() => setShowModal(false)}>
                <span>{taskDetail?.data.title}</span>
                <div className="flex-between mt-2">

                    <button className="light delete icon" onClick={e => {
                        deleteTask(taskDetail.taskIndex);
                        setShowModal(false);
                    }}>
                        <img alt="Trash-bin icon" src="icons/icon-trash.svg" height={20}/>
                    </button>


                    <button onClick={() => {
                        updateTaskStatus(taskDetail.taskIndex, !taskDetail.data.completed)
                        setShowModal(false);
                    }} className={taskDetail?.data.completed ? "success" : ""}>
                        {

                            taskDetail?.data.completed ?
                                "Set to do"
                                :
                                "Complete"
                        }
                    </button>


                </div>
            </Modal>

        </div>
    )
}
