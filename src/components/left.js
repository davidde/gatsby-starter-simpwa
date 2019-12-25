import React from 'react';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { Leftside, DayNightToggle, Button, ThemeSwitcher, SidestripSwitcher } from 'gatsby-theme-simpwa';


function Left() {
  return (
    <Leftside header='Settings' icon={faCog} >
        <br/>
        <p>
          These settings use this theme's custom components:
        </p><br/>

        <DayNightToggle /><br/><br/>
        <Button>Button</Button><br/>
        <ThemeSwitcher select='custom' />
        <SidestripSwitcher select='custom' />
    </Leftside>
  );
}

export default Left;