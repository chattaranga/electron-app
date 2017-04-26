import React from 'react';
import Statistics from './Statistics';
import Badges from './Badges';


const AchievementsPage = () => {
  return (
    <div className='achievements'>
        <h1>Statistics</h1>
        <Statistics/>
        <h1>Badges</h1>
        <Badges/>
    </div>
  );
};

export default AchievementsPage;