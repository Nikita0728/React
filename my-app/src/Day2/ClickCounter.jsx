import React, { useState } from 'react';

const ClickCounter = (props) => {
  // console.log(props)
  const [count, setCount] = useState(1);
  const [buttonClicked, setButtonClicked] = useState(false);

  
  const change = (e) => {
   if(count>=1)
     {setCount(count + e)};
     setButtonClicked(true);
 
   };

  return (
    <div>
      <h2>{props.title}</h2>


      <p>Count: {count}</p>
      <button   onClick={()=>{change(1)}}> 
      Increment
      </button>
      <button onClick={()=>{change(-2)}}>
        Decrement
        </button>

      {buttonClicked? <p>Button Clicked!</p>:<p></p>}

    </div>
  );
};

export default ClickCounter;
