import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';
import PLANETS from '../../data';
import MobileMenu from '../MobileMenu';

const Header = ({ planet, setPlanet, content, setContent }) => {
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const navList = ['overview', 'structure', 'surface'];
	const planets = PLANETS.reduce((acc, cur) => {
		acc.push(cur.name.toLowerCase());
		return acc;
	}, [])
  return (
  	<header>
  		<MainHeader>
  			<Logo>The Planets</Logo>
  			<NavLinkGroup>
  			{
  				planets.map((planet, index) => {
  					return (
  						<NavLink
  							to={`/${planet}`}
  							onClick={() => setPlanet(index)}
  						>
  						{planet}
  						</NavLink>
  					)
  				})
  			}
  			</NavLinkGroup>
  			<Icon
  				onClick={() => setShowMobileMenu(true)}
  				style={{
  					'--opacity': showMobileMenu ? '0.25' : '1',
  				}}
  				alt=""
  				src={"/assets/icon-hamburger.svg"}
  			/>
  		</MainHeader>
  		<SecondaryHeader>
  			{
  				navList.map((item, index) => {
  					return (
  						<NavListItem
  							style={{
  								'--borderBottom': content === index ? `var(--color-${planets[planet]})` : 'transparent',
  								'--opacity': content === index ? `1` : `0.5`,
  							}}
  							onClick={() => setContent(index)}
  						>{item}</NavListItem>
  					)
  				})
  			}
  		</SecondaryHeader>
      <MobileMenu
      	setPlanet={setPlanet}
        title="Menu"
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
  	</header>
  );
};

const MainHeader = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-end;
	padding: 22px 40px 27px 32px;
	border-bottom: 1px solid var(--color-border);

	@media ${QUERIES.tabletAndDown} {
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		gap: 39px;
		padding: 32px 52px 27px 52px;
	}

	@media ${QUERIES.phoneAndDown} {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0px;
		padding-left: 24px;
	}
`;

const Logo = styled.h2`
	font-family: var(--font-family-title);
	font-size: 28px;
	font-weight: var(--font-weight-normal);
	line-height: 36px;
	letter-spacing: -1.05px;
	color: var(--color-white);
	text-transform: uppercase;
`;

const NavLinkGroup = styled.nav`
	display: flex;
	flex-direction: row;
	// gap: 33px;

	@media ${QUERIES.phoneAndDown} {
		display: none;
	}
`;

const NavLink = styled(Link)`
	padding: 8px 16px 8px 17px;
	font-family: var(--font-family-text);
	font-size: 12px;
	font-weight: var(--font-weight-bold);
	line-height: 25px;
	letter-spacing: 1px;
	color: var(--color-white);
	opacity: 0.75;
	text-transform: uppercase;
	text-decoration: none;
`;

const Icon = styled.img`
	display: none;
	@media ${QUERIES.phoneAndDown} {
		display: block;
		padding: 25px 24px;
		opacity: var(--opacity);
	}
`;

const SecondaryHeader = styled.li`
	display: none;
	@media ${QUERIES.phoneAndDown} {
		display: flex;
		flex-direction: row;
		padding-left: 24px;
		gap: 44px;

		border-bottom: 1px solid var(--color-border);
	}
`;

const NavListItem = styled.ul`
	display: block;
	padding-top: 22px;
	padding-bottom: 15px;
	border-bottom: 3px solid var(--borderBottom);

	cursor: pointer;

	font-family: var(--font-family-text);
	font-weight: var(--font-weight-bold);
	line-height: 10px;
	letter-spacing: 1.9px;
	text-transform: uppercase;
	color: var(--color-white);
	opacity: var(--opacity);
	font-size: 12px;

	&:hover {
		opacity: 1;
	}

`;

export default Header;
