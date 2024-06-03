import { FaBars, FaTimes } from 'react-icons/fa';
import {
  MobileIcon,
  Nav,
  NavBtnLink,
  NavIcon,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavLogo,
  NavMenu,
  NavbarContainer,
} from './Navbar.elements';
import { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { Button } from '../../GlobalStyles';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };

  useEffect(() => {
    const showButton = () => {
      setButton(window.innerWidth <= 960);
    };

    window.addEventListener('resize', showButton);

    return () => window.removeEventListener('resize', showButton);
  }, []);

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            <NavIcon />
            ULTRA
          </NavLogo>
          <MobileIcon onClick={handleClick}>{click ? <FaTimes /> : <FaBars />}</MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to='/'>Home</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to='/services'>Services</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to='/products'>Products</NavLinks>
            </NavItem>

            <NavItemBtn>
              {button ? (
                <NavBtnLink to='/sign-up'>
                  <Button primary>SIGN UP</Button>
                </NavBtnLink>
              ) : (
                <NavBtnLink to='/sign-up'>
                  <Button fontBig primary>
                    SIGN UP
                  </Button>
                </NavBtnLink>
              )}
            </NavItemBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
}

export default Navbar;
