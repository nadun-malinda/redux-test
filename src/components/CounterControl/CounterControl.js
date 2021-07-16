const CounterControl = ({ handleCounterChange }) => {
    return (
        <>
            <button onClick={() => handleCounterChange('INC')}>Increment</button>
            <button onClick={() => handleCounterChange('DEC')}>Decrement</button>
            <button onClick={() => handleCounterChange('ADD', 10)}>Add</button>
            <button onClick={() => handleCounterChange('SUB', 5)}>Substract</button>
        </>
    )
}

export default CounterControl