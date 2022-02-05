import React, {useContext} from 'react';
import { ThemeContext } from '../themeContext';

const Calc = ({children}) => {
  const {theme} = useContext(ThemeContext);

  return(
    <div id="calc-body" className={theme}>
      <div id="calc-els" className={theme}>
        {children}
      </div>
    </div>
  );
}

export default Calc;