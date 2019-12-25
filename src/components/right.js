import React from 'react';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { Rightside } from 'gatsby-theme-simpwa';


function Right() {
  return (
    <Rightside header='Chat' icon={faComments} >
        <br/>
        <p>
          [Implement chatbot here ...]
        </p>
    </Rightside>
  );
}

export default Right;