export const CustomCheckbox = ({checked, onClick}) => {
    return(
        <button onClick={onClick} className={"cst-checkbox" + (checked ? " checked" : "")}>
            <div>&#x2714;</div>
        </button>
    )
}