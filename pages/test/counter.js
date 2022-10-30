import React, {useState} from 'react';

function Counter() {
    const [number, setNumber] = useState([[2, 5]]);

    const onIncrease = () => {
        setNumber(number[0][0] + 1);
    }

    const onDecrease = () => {
        setNumber(number[0][0] - 1);
    }

    return (
        <div>
            <h1>{number[0][0]}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;