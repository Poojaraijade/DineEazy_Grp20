import React from 'react';

const Spinner = (props)=>{
    return(
        <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-border text-primary" style={{width:3, height:3}} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
};
  
export default Spinner;
  