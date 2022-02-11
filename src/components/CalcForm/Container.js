import React, {useContext} from 'react';
import { ThemeContext } from '../themeContext';

const Container = ({id = 'undefined', altId = null, children}) => {
  const {theme} = useContext(ThemeContext);

  return(
    <div id={id} className={theme}>
      {altId != null
      ? <div id={altId} className={theme}>
        {children}
      </div>
      : children
      }
    </div>
  );
}

export default Container;