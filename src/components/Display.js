import './Display.css';

export default function Display(props) {
    return (
        <div className="display">
            <div id="display" className="value">{props.current}</div>
        </div>
    );
}
