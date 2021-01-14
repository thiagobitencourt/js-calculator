import Button from './Button';
import './Actions.css';

export default function Actions(props) {
    return (
        <div className="actions">
            <Button action={true} id="add" label="+" click={() => props.operation('+')} />
            <Button action={true} id="subtract" label="-" click={() => props.operation('-')} />
            <Button action={true} id="multiply" label="*" click={() => props.operation('*')} />
            <Button action={true} id="divide" label="/" click={() => props.operation('/')} />
        </div>
    );
}
