import React,{useReducer} from 'react'

const ReducerComponent = () => {

    //! the reducer function accepts two arguments
    //! First is the state
    //! Second is the action which is an object
    //! Here we have destructured the type from action object
    let reducer = (state, { type }) => {
        switch (type) {
            case "Increment":
                return { count: state.count + 1 };
            case "Decrement":
                return { count: state.count - 1 };
            case "Reset":
                return { count: 0 }
            default:
                throw new Error()
        }
    }
    
    
    let [state, dispatch] = useReducer(reducer, { count: 0 })
    //! the use reducer accepts two arguments
    //! first is the reducer function
    //! second is the initial state
  return (
    <div>
          <h1>{state.count}</h1>
          <button onClick={()=>{dispatch({type: "Increment"})}}>Increment</button>
          <button onClick={()=>{dispatch({type: "Decrement"})}}>Decrement</button>
          <button onClick={()=>{dispatch({type: "Reset"})}}>Reset</button>
    </div>
  )
}

export default ReducerComponent
