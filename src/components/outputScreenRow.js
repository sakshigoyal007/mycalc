import React from 'react'; 
  
 
// to show input, answer 
const OutputScreenRow = (props) => { 
  return ( 
    <div className="screen-row"> 
      <input type="text" readOnly value={props.value}/> 
     </div>
  )
} 
   
export default OutputScreenRow;