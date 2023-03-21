import React,{useRef} from "react";
// import  Form from "./components/reducer/Form";
// import ComponentDidMount from './components/effect/ComponentDidMount'
// import UseEffect from './components/effect/UseEffect'
// import UseEffectExample from "./components/effect/UseEffectExample";
// import SpeechRecognition from "./components/effect/SpeechRecognition";
import Modal from './components/Modal/Modal';
import ReducerComponent from "./components/reducer/ReducerComponent";

const App = () => {

//! For modal using portals
// let [show, setShow] = useState(false)
//   let open = () => {
//   setShow(!show)
//   }
 
  
  return (
    <div>
      {/* <UseEffect/>
      <ComponentDidMount /> */}
      {/* <UseEffectExample /> */}
      {/* <SpeechRecognition /> */}

      {/* The following is for portals */}
      {/* {show === true ? <Modal /> : ""}
      <button id="button" onClick={open}>Show</button> */}

      {/* For useReducer */}
      <ReducerComponent />
      <Modal/>
    </div>
  );
};

export default App;
