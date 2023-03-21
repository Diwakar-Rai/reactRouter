import React, { useState, useEffect, useRef } from "react";

const SpeechRecognition = () => {
    let [state, setState] = useState("text");
    let bodyRef = useRef();
  useEffect(() => {
    window.SpeechRecognition =
      window.webkitSpeechRecognition || window.SpeechRecognition;

    let recognition = new window.SpeechRecognition();
    recognition.addEventListener("result", e => {
      console.log(e);
      let transcript = e.results[0][0].transcript;
        setState(transcript);
        // bodyRef.current.style.background = `${transcript}`
      window.document.body.style.background = `${transcript}`;
    //   window.open(`http://www.${transcript}.com`);
    });
      recognition.start();

  });
  return <div ref={bodyRef}>{state}</div>;
};

export default SpeechRecognition;
