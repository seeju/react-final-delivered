import React from 'react';

export interface IProps {
    display: string
}

function Display({display} : IProps) {
  return (
    <>
        <div id="display" className="lcd-screen">
            {display}
        </div>
    </>
  );
}

export default Display;
