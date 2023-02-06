import React from 'react';
import loader from '../loader.gif';

function Spinner() {
  return (
    <div className="text-center my-3">
      <img src={loader} alt="loader" width={100} height={100} />
    </div>
  )
}

export default Spinner
