import React from 'react';

const Badges = props => {
    const badges = props.badges
        ? props.badges.map((badge, i) => {
            return (
                <div key={i}>
                    <div className='badge round-icon'></div>
                    <p>{'Badge' + i}</p>
                </div>
              );
            })
        : <p/>;
    return (
        <div className='Badges'>
            {badges}
        </div>
    );
};

export default Badges;