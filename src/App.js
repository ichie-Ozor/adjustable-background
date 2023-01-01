import './App.css';
import { useEffect, useRef, useState } from 'react'




function App() {
  const countRef = useRef()
const [count, setCount] = useState({
  left:50,
  right: 50
})
 const leftHandler = () => {
    setCount({
      left:count.left + 1,
      right:count.right - 1
  })
 }

const rightHandler = () => {
  setCount({
    left:count.left - 1,
    right:count.right +1
  })
}

 useEffect(() => {
  console.log("see useEffect");
    console.log(typeof count.left);
    countRef.current.style.width = count.left + "%"
}, [count]);




  return (
    <div ref={countRef} className="App">
      <div className="container">
        <div className="left" onClick={leftHandler}>{count.left}%</div>
        <div className="right" onClick={rightHandler}>{count.right}%</div>
      </div>
    </div>
  );
}

export default App;
