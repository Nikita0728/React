import React, { useState } from 'react';

const Assignment = () => 
{
  
  const data = [
    
    { category: "Fruits", price: "$1", stocked: "yes", name: "Apple" },
    { category: "Fruits", price: "$1", stocked: "yes", name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: "no", name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: "yes", name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: "no", name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: "yes", name: "Peas" },
  ];
  const [show,setShow] = useState(false);
  const setter = () =>{
       setShow(!show);
  };
  
  
  return (
    <div>
      {show && (<table>
      <tr>
        <th>category</th>
        <th>price</th>
        <th>stocked</th>
        <th>name</th>
      </tr>
      {data.map((i) => 
      (
        <tr>
          <td>{i.category}</td>
          <td>{i.price}</td>
          <td>{i.stocked}</td>
          <td>{i.name}</td>
        </tr>
      ))}
     </table>)
     }
     <button  type="button" onClick={setter}>
      {
        show===true? "Hide":"Show"
      }
     </button>

    </div>
  );
};
export default Assignment;
