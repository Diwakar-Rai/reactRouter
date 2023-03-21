import React, {useState, useEffect} from 'react'

const UseEffectExample = () => {
    let [size, setSize] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener("resize", changeWindowSize);

        //!clean up
        //? Behaves like componentWillUnmount from class based component
        window.removeEventListener("resize", changeWindowSize)
    }, [size]);

    const changeWindowSize = () => {
        setSize(window.innerWidth);
        if (window.innerWidth < 600) {
            window.document.body.style.background = "green";
        } else if (window.innerWidth >= 600 && window.innerWidth <= 1000) {
            window.document.body.style.background = "orange"
        } else {
            let red = Math.floor(Math.random()*100)
            let green = Math.floor(Math.random()*100)
            let blue = Math.floor(Math.random()*100)
            window.document.body.style.background = `rgb(${red},${green},${blue})`
            window.document.body.style.color= "#fff"
        }
    }
  return (
    <div>
          <h1>{size}</h1>
    </div>
  )
}

export default UseEffectExample
