import React from 'react';
import PropTypes from 'prop-types';

const Badges = props => {
    let badges;
    if (!props.badges.length) badges = (<h2>You don't have any badges yet...</h2>);
    else badges = props.badges
        ? props.badges.map((badge, i) => {
            let src = 'img/badges/' + badge.name;
            if (badge.name === 'fast-parrot-master' || badge.name === 'ultimate-fast-parrot-demigod') src += '.gif';
            else src += '.png';
            return (
                <div key={i}>
                    <img className='badge round-icon-static' src={src}/>
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

Badges.propTypes = {
  badges: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Badges;
