// import React, {Component} from "react";
// import ProductData from "./components/CustomHooks/ProductData";
// import UseBooleanExample from "./components/CustomHooks/UseBooleanExample";
// import {useRef} from "react"
// import  Form from "./components/reducer/Form";
// import ComponentDidMount from './components/effect/ComponentDidMount'
// import UseEffect from './components/effect/UseEffect'
// import UseEffectExample from "./components/effect/UseEffectExample";
// import SpeechRecognition from "./components/effect/SpeechRecognition";
// import Modal from './components/Modal/Modal';
// import ReducerComponent from "./components/reducer/ReducerComponent";

// import useFetch from "./components/CustomHooks/useFetch";

// const App = () => {
//! For modal using portals
// let [show, setShow] = useState(false)
//   let open = () => {
//   setShow(!show)
//   }

// let value = useFetch("https://api.github.com/users");
// console.log(value);
// let product = useFetch("https://fakestoreapi.com/products");
// console.log(product);
// return (
//   <div>
// {/* <UseEffect/>
// <ComponentDidMount /> */}
// {/* <UseEffectExample /> */}
// {/* <SpeechRecognition /> */}

// {/* The following is for portals */}
// {/* {show === true ? <Modal /> : ""}
// <button id="button" onClick={open}>Show</button> */}

// {/* For useReducer */}
// {/* <ReducerComponent />
// <Modal/> */}
// {/* <ProductData /> */}
// {/* <UseBooleanExample/> */}

//     {/* </div>
//   );
// }; */}

//!===========Error Boundary =====================

// import React, { Component } from 'react'
// import Users from './components/ErrorBoundary/Users';
// import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <ErrorBoundary>
//           <Users username="Chombu" />
//           <Users username="Dhoni" />
//           <Users username="Rohit" />
//         </ErrorBoundary>
//       </div>
//     );
//   }
// }

//!=================Lazy Loading==============

// import React, { Component, Suspense } from 'react'
// const ErrorBoundary = React.lazy(() => import("./components/ErrorBoundary/ErrorBoundary"));
// const Users = React.lazy(()=>import("./components/ErrorBoundary/Users"))

// export default class App extends Component {
//   render() {
//     return (
//       <Suspense fallback={<h1>Loading...</h1>}>
//         <ErrorBoundary>
//           <Users username="Virat" />
//           <Users username="Dhoni" />
//           <Users username="Rohit" />
//         </ErrorBoundary>
//       </Suspense>

//     )
//   }
// }

//! ================Pure Component =================

// import React, { Component } from 'react'
// import Users from './components/users/Users';

// export default class App extends Component {
//   state = {
//     count : 0
//   }
//   render() {
//     console.log("Pratanu")
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <Users />
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Click
//         </button>
//       </div>
//     )
//   }
// }

//! ======================refs=================
import React, { useEffect, useRef } from "react";
import Forwarding from "./components/ForwardingRefs/Forwarding";
const App = () => {
  let usernameRef = useRef();
  let passwordRef = useRef();

  useEffect(() => {
    let username = (usernameRef.current.value = "Spiderman");
    let password = (passwordRef.current.value = "123456");
    console.log(username, password);
  }, []);
  return (
    <div>
      <form>
        <Forwarding ref={usernameRef} type="text" placeholder="enter username"/>
        <Forwarding ref={passwordRef} type="password" placeholder="Enter password" />
        <button>submit</button>
      </form>
    </div>
  );
};

export default App;
