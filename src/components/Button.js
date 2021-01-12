export default function Button(props) {
    return (
        <button id={props.id} type="button" onClick={(e) => props.click(e)}>{props.label}</button>
    );
}
