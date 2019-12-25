import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { MainView, SEO, DayNightToggle, ThemeSwitcher, SidestripSwitcher } from 'gatsby-theme-simpwa';


function Main() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <MainView header={data.site.siteMetadata.title} >
        <SEO />
        <br/>

        <DayNightToggle /><br/><br/>
        <ThemeSwitcher select='custom' />
        <SidestripSwitcher select='custom' />
    </MainView>
  );
}

export default Main;