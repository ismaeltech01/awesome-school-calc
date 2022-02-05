import React, { useContext } from "react";
import { Container } from ".";
import { ThemeContext } from "./themeContext";

export default function Footer() {
  const {theme} = useContext(ThemeContext);
 
  return (
    <footer className={theme}>
      <h2 id="author-txt" className={theme}>Made by <a href="https://github.com/ismaeltovar">Ismael Tovar</a></h2>
      <h3 id="license-txt" className={theme}>Licensed under the <a href="https://github.com/ismaeltovar/awesome-school-calc/blob/main/LICENSE">GPL-3.0</a></h3>
      <p id="notice-txt" className={theme}>NOTE: This calculator is JUST AN ESTIMATOR. Some figures provided by this tool MAY not be 100% accurate. I am not liable for any damages caused by actions taken because of or on the basis of the calculator's output.</p>
    </footer>
  );
}