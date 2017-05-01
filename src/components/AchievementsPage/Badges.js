import React from 'react';

const Badges = props => {
    const badges = props.badges
        ? props.badges.map((badge, i) => {
            let src = 'img/badges/' + badge.name;
            if (badge.name === 'fast-parrot-master' || badge.name === 'ultimate-fast-parrot-demigod') src += '.gif';
            else src += '.png';
            return (
                <div key={i}>
                    <img className='badge round-icon' src={src}/>
                    <p>{badge.description}</p>
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