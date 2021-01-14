import './Button.css';

export default function Button(props) {
    return (
        <button
            className={`button ${props.action ? 'action-button' : ''} ${props.primary ? 'primary-button' : ''}`}
            id={props.id}
            type="button"
            onClick={(e) => props.click(e)}
        >{props.label}
        </button>
    );
}
