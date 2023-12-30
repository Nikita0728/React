import React, { useState } from 'react';

const ClickCounter = (props) => {
  // console.log(props)
  const [count, setCount] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(false);

  const increment = (e) => {
    setCount(count + e);
    setButtonClicked(true);

  };

  const decrement = (e) => {
   if(count>=1)
    {setCount(count - e)};
    setButtonClicked(true);

  };

  return (
    <div>
      <h2>{props.title}</h2>


      <p>Count: {count}</p>
      <button   onClick={()=>{increment(4)}}> 
      Increment
      </button>
      <button onClick={()=>{decrement(2)}}>
        Decrement
        </button>

      {buttonClicked? <p>Button Clicked!</p>:<p></p>}

    </div>
  );
};

export default ClickCounter;
