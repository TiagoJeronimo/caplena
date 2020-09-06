import React, { useState } from 'react';
import TextAnalyzer from './TextAnalyzer';
import TextList from './TextList/TextList';
import texts from '../assets/texts';
import scss from './styles.module.scss';

const TextReviewer = () => {
  const [reviewedTexts, setReviewedTexts] = useState([]);
  const [textIndex, setTextIndex] = useState(0);

  const handleTextReview = (newReviewedText) => {
    setReviewedTexts([...reviewedTexts, newReviewedText]);
    if (textIndex < texts.length) {
      setTextIndex(textIndex + 1);
    }
  };

  return (
    <div className={scss['p-textReviewer']}>
      <TextAnalyzer textData={texts[textIndex]} onReview={handleTextReview} />
      <TextList reviewedTexts={reviewedTexts} />
    </div>
  );
};

export default TextReviewer;
