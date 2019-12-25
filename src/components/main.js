import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { MainView, SEO, ThemeSwitcher, SidestripSwitcher, StyledSelect } from 'gatsby-theme-simpwa';


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

      <ul>
        <li>
          <p>
            On top of the PWA/sidebar functionality, gatsby-theme-simpwa also provides a few custom components
            to improve on the bland native HTML components: you can check them out in the left sidebar.
          </p>
          <p>Their native equivalents are visible in the right sidebar for comparison.</p>
        </li>

        <li>
          <p>
            On top of that, there is also a styled native select component that looks like this:
          </p>
          <ThemeSwitcher select='styled' />
          <SidestripSwitcher select='styled' />
        </li>

        <li>
          <p>
            To create your own select components, you can use either of this theme's StyledSelect or CustomSelect.
            Both of them have the same API as the HTML native select tag, e.g.:
          </p>

          <blockquote>
            import &#123; StyledSelect &#125; from 'gatsby-theme-simpwa';<br/><br/>

            &lt;StyledSelect&gt;<br/>
            &nbsp; &lt;option value='1'&gt; 1 &lt;/option&gt;<br/>
            &nbsp; &lt;option value='2'&gt; 2 &lt;/option&gt;<br/>
            &nbsp; &lt;option value='3'&gt; 3 &lt;/option&gt;<br/>
            &lt;/StyledSelect&gt;
          </blockquote>

          Which will render as: &nbsp; &nbsp;
          <StyledSelect>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
          </StyledSelect>
        </li>
      </ul>
    </MainView>
  );
}

export default Main;