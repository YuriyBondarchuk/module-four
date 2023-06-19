import { useReducer } from "react";

enum counterActions {
    increment = "increment",
    decrement = "decrement",
    changeName = "changeName",
}

interface stateCounter {
    count: number;
    userName: string;
}

// reducer - function which gets state and action and returns state
const reducer = (
    state: stateCounter,
    action: { type: counterActions; payload: any }
): stateCounter => {
    switch (action.type) {
        case counterActions.increment:
            return { ...state, count: state.count + action.payload };
        case counterActions.decrement:
            return { ...state, count: state.count - action.payload };
        case counterActions.changeName:
            return { ...state, userName: action.payload };
        default:
            return { ...state };
    }
};

const initialState: stateCounter = {
    count: 0,
    userName: "No name",
};

function Counter(): JSX.Element {
    const [state, dispatch] = useReducer(reducer, initialState, () => ({...initialState, userName: 'Zajupa'}));

    const increment = (): void => {
        dispatch({ type: counterActions.increment, payload: 1 });
    };

    const decrement = (): void => {
        dispatch({ type: counterActions.decrement, payload: 1 });
    };

    const changeName = (): void => {
        dispatch({ type: counterActions.changeName, payload: "Yurii" });
    };

    return (
        <>
            <div>Counter: {state.count}</div>
            <div>User Name: {state.userName}</div>
            <button onClick={increment} className="btn btn-dark">
                increment
            </button>
            <button onClick={decrement} className="btn btn-warning">
                decrement
            </button>
            <button onClick={changeName} className="btn btn-success">
                change user name
            </button>
        </>
    );
}

export default Counter;
