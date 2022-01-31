import React from "react";
import styled from 'styled-components/macro';

const Header = () => {
  return (
  	<header>
  		<MainHeader>
  			<Logo>The Planets</Logo>
  			<NavLinkGroup>
  				<NavLink href="/">Mercury</NavLink>
  				<NavLink href="/">Venus</NavLink>
  				<NavLink href="/">Earth</NavLink>
  				<NavLink href="/">Mars</NavLink>
  				<NavLink href="/">Jupiter</NavLink>
  				<NavLink href="/">Saturn</NavLink>
  				<NavLink href="/">Uranus</NavLink>
  				<NavLink href="/">Neptune</NavLink>
  			</NavLinkGroup>
  		</MainHeader>
  	</header>
  );
};

const MainHeader = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 33px 40px 32px 27px;
	border-bottom: 1px solid var(--color-border);
`;

const Logo = styled.h2`
	font-family: var(--font-family-title);
	font-size: 28px;
	font-weight: var(--font-weight-regular);
	color: var(--color-white);
	text-transform: uppercase;
	line-height: 52px;
	letter-spacing: -1.5px;
`;

const NavLinkGroup = styled.nav`
	display: flex;
	flex-direction: row;
	gap: 33px;
`;

const NavLink = styled.a`
	font-family: var(--font-family-text);
	font-size: 11px;
	font-weight: var(--font-weight-bold);
	color: var(--color-white);
	text-transform: uppercase;
	text-decoration: none;
	line-height: 25px;
	letter-spacing: 1px;
`;

export default Header;
