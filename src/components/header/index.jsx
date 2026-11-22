import React, { useEffect, useRef, useState } from 'react';
import { Stack } from '@mui/material';
import messages from 'assets/messages';
import NavIcons from 'components/navicons';
import theme from 'assets/variables.module.scss';
import './index.scss';

function Header() {
  const headerRef = useRef(null);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const height = headerRef.current?.offsetHeight || 72;
      setOpacity(Math.min(window.scrollY / height, 1));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="app-header"
      id="header-transform"
      ref={headerRef}
      style={{
        backgroundColor: `rgba(${theme.primaryColourR}, ${theme.primaryColourG}, ${theme.primaryColourB}, ${opacity * 0.94})`,
        borderBottomColor: `rgba(${theme.accentColourR}, ${theme.accentColourG}, ${theme.accentColourB}, ${opacity * 0.2})`,
        '--header-content-opacity': opacity,
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-start"
        className="app-title"
      >
        <a href="#top" aria-label={`${messages.fullName} home`}>
          <span>{messages.fullName}</span>
          <span className="app-title-divider" aria-hidden="true">/</span>
          <span className="app-title-role">{messages.title}</span>
        </a>
      </Stack>
      <NavIcons iconSize="large" />
    </header>
  );
}

export default Header;
