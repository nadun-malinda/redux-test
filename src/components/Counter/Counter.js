import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions'
import CounterDisplay from "../CounterDisplay/CounterDisplay"

const Counter = (props) => {
    return (
        <>
            <CounterDisplay count={props.ctr} />
            <button onClick={props.onIncrementCounter}>Increment</button>
            <button onClick={props.onDecrementCounter}>Decrement</button>
            <button onClick={props.onAddCounter}>Add</button>
            <button onClick={props.onSubstractCounter}>Substract</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        ctr: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch({ type: actionTypes.INC }),
        onDecrementCounter: () => dispatch({ type: actionTypes.DEC }),
        onAddCounter: () => dispatch({ type: actionTypes.ADD, value: 10 }),
        onSubstractCounter: () => dispatch({ type: actionTypes.SUB, value: 5 })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)