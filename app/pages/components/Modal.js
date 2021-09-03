export const Modal = ({title, show, onClose, children, status}) => {
    return (
        <div className={"modal " + (show ? "visible" : "hidden")} onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <span className="mt-0">
                        <span className={"dot" + (status ? " high-prio" : "")}/>
                        {title}</span>
                    <button className="light icon" onClick={onClose}>
                        <img className="rotate-45" alt="Close icon" src="icons/icon-close.svg" height={20} width={20}/>
                    </button>
                </div>
                {children}
            </div>

        </div>
        )
}