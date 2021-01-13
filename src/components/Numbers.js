import Button from './Button';

export default function Number(props) {
    return (
        <div>
            {
                [
                    { value: '9', id: 'nine' },
                    { value: '8', id: 'eight' },
                    { value: '7', id: 'seven' },
                    { value: '6', id: 'six' },
                    { value: '5', id: 'five' },
                    { value: '4', id: 'four' },
                    { value: '3', id: 'three' },
                    { value: '2', id: 'two' },
                    { value: '1', id: 'one' },
                    { value: '.', id: 'decimal' },
                    { value: '0', id: 'zero' }
                ].map(({ value, id }) => 
                        <Button key={id} id={id} click={() => props.newValue(value)} label={value}/>
                    )
            }
            <Button id="clear" click={() => props.clear()} label="c"/>
        </div>
    );
}
