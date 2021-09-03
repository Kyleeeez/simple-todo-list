export const IosSwitch = ({checked, onClick}) => {
    return(
        <button onClick={onClick} className={"ios-switch" + (checked ? " checked" : "")}>
            <div />
        </button>
    )
}