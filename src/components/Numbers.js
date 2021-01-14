import Button from './Button';
import './Numbers.css';

export default function Number(props) {
    return (
        <div className="numbers">
            {
                [
                    { value: '7', id: 'seven' },
                    { value: '8', id: 'eight' },
                    { value: '9', id: 'nine' },
                    { value: '4', id: 'four' },
                    { value: '5', id: 'five' },
                    { value: '6', id: 'six' },
                    { value: '1', id: 'one' },
                    { value: '2', id: 'two' },
                    { value: '3', id: 'three' },
                    { value: '.', id: 'decimal' },
                    { value: '0', id: 'zero' }
                ].map(({ value, id }) => 
                        <Button key={id} id={id} click={() => props.newValue(value)} label={value}/>
                    )
            }
            <Button id="clear" action={true} click={() => props.clear()} label="c"/>
        </div>
    );
}
