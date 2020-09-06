import React from 'react';
import scss from './styles.module.scss';

const Text = ({ text, sentiment }) => (
  <>
    <h2>{text}</h2>
    <h3 className={scss['m-text__sentiment']}>{sentiment.toUpperCase()}</h3>
  </>
);

export default Text;
