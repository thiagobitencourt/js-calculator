import Button from './Button';

export default function Actions(props) {
    return (
        <div>
            <Button id="sum" label="+" click={() => props.operation('+')} />
            <Button id="sub" label="-" click={() => props.operation('-')} />
            <Button id="mult" label="*" click={() => props.operation('*')} />
            <Button id="div" label="/" click={() => props.operation('/')} />
        </div>
    );
}
