const React = require('react');
const Statistics = require('./Statistics');
const Badges = require('./Badges');


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

module.exports = AchievementsPage;