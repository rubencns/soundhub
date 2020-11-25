import React, { useState } from 'react';
import { HeaderStyle } from './header-style';
import { NavLink } from 'react-router-dom';
import { ReactComponent as PlayIcon } from '../../assets/icons/files/play.svg';
import { ReactComponent as UserIcon } from '../../assets/icons/files/user.svg';
import { ReactComponent as MusicIcon } from '../../assets/icons/files/music.svg';

const Header = () => {
  const [active, setActive] = useState('');

  return (
    <HeaderStyle>
      <NavLink to="/">
        <div
          className={`header-item${active === 'home' ? ' active' : ''}`}
          onClick={() => setActive('home')}
        >
          <div className="header-item-icon">
            <MusicIcon />
          </div>
        </div>
      </NavLink>
      <NavLink to={localStorage.getItem('token') ? '/profile' : '/login'}>
        <div
          className={`header-item${active === 'profile' ? ' active' : ''}`}
          onClick={() => setActive('profile')}
        >
          <div className="header-item-icon">
            <UserIcon />
          </div>
        </div>
      </NavLink>
      <NavLink to="/player">
        <div
          className={`header-item${active === 'player' ? ' active' : ''}`}
          onClick={() => setActive('player')}
        >
          <div className="header-item-icon">
            <PlayIcon />
          </div>
        </div>
      </NavLink>
    </HeaderStyle>
  );
};

export default Header;
