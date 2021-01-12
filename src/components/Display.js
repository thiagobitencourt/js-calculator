import './Display.css';

export default function Display(props) {
    return (
        <div className="display">
            <span className="last-value">{props.last}</span>
            <span className="current-value">{props.current}</span>
        </div>
    );
}
