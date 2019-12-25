import React from 'react';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { Rightside, ThemeSwitcher, SidestripSwitcher } from 'gatsby-theme-simpwa';


function Right() {
  return (
    <Rightside header='Settings' icon={faCog} >
        <br/>
        <p>
          These settings use the html native components:
        </p><br/>
        <button>Button</button><br/>
        <ThemeSwitcher select='native' />
        <SidestripSwitcher select='native' />
    </Rightside>
  );
}

export default Right;