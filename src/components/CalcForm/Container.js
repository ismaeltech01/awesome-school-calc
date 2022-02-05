import React, {useContext} from 'react';
import { ThemeContext } from '../themeContext';

const Container = ({id = 'undefined', children}) => {
  const {theme} = useContext(ThemeContext);

  return(
    <div id={id} className={theme}>
      {children}
    </div>
  );
}

export default Container;