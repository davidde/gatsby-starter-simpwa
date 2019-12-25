import React from 'react';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { Leftside } from 'gatsby-theme-simpwa';


function Left() {
  return (
    <Leftside header='Settings' icon={faCog} >
        <br/>
        <p>
          [Implement Settings here ...]
        </p>
    </Leftside>
  );
}

export default Left;