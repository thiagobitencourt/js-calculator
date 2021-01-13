import Button from './Button';

export default function Actions(props) {
    return (
        <div>
            <Button id="add" label="+" click={() => props.operation('+')} />
            <Button id="subtract" label="-" click={() => props.operation('-')} />
            <Button id="multiply" label="*" click={() => props.operation('*')} />
            <Button id="divide" label="/" click={() => props.operation('/')} />
        </div>
    );
}
