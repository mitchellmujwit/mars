import React, { useState, useEffect } from 'react';
import { RiMenuLine, RiMenu5Line } from 'react-icons/ri';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  Hamburger,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLink,
  NavBtnLink
} from './Navbar.elements';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/' onClick={closeMobileMenu}>
              <NavIcon />
              Trip To Mars
            </NavLogo>
            <Hamburger onClick={handleClick}>
              {click ? <RiMenu5Line /> : <RiMenuLine />}
            </Hamburger>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLink to='/' onClick={closeMobileMenu}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/services' onClick={closeMobileMenu}>
                  Services
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/pricing' onClick={closeMobileMenu}>
                  Pricing
                </NavLink>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/book-a-trip'>
                    <Button primary>Book A Trip</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/book-a-trip'>
                    <Button onClick={closeMobileMenu} fontBig primary>
                      Book A Trip
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
