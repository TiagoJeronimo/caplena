import React from 'react';
import Button from '../../components/Button';
import Text from '../../components/Text';

import scss from './styles.module.scss';

const TextAnalyzer = ({ textData, onReview }) => {
  const handleReviewText = (rating) => {
    onReview({ ...textData, rating });
  };

  return (
    <div className={scss['o-textAnalyzer']}>
      <Text text={textData.text} sentiment={textData.sentiment} />
      <div className={scss['o-textAnalyzer__buttons']}>
        <Button type="Correct" onReview={() => handleReviewText('Correct')} />
        <Button type="Incorrect" onReview={() => handleReviewText('Incorrect')} />
      </div>
    </div>
  );
};

export default TextAnalyzer;
