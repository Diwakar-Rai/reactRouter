import React, { useReducer } from "react";

const Form = () => {
    let initialState = {
        username: "",
        password:"",
    }

    let reducer = (state, { type, value }) => {
      switch (type) {
        case "username":
          return {...state, username:value};
        case "password":
          return {...state, password:value} ;
        
        default:
          throw new Error();
      }
    };

    let [state, dispatch] = useReducer(reducer, initialState)

    let handleSubmit = (e) => {
        e.preventDefault()
        console.log(state)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={e => {
              dispatch({ type: "username", value: e.target.value });
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Username</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={e => {
              dispatch({ type: "password", value: e.target.value });
            }}
          />
        </div>
        <div className="form-group">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
