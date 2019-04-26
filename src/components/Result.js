import React from 'react';

const Result = (props) => {
  const { city, information, likeCity, visited } = props.obj;

  // handleClick = () => {
  //   props.returnForm();
  // }

  return (
    <div className='result'>
      <h3>Information</h3>
      <p><span>City:</span> {city}</p>
      <p><span>Note:</span> {information}</p>
      <p><span>Nice city:</span> {likeCity ? 'Yes' : 'No'}</p>
      <p><span>Times of visits:</span> {visited}</p>

      <button
        onClick={() => props.returnForm()}
      >New Form</button>
    </div>
  );
}

export default Result;