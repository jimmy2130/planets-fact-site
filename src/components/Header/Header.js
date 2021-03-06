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
  			<LogoLink
  				to={'/'}
  				onClick={() => {
  					setPlanet(0)
  					setContent(0)
  				}}
  			>
  				<Logo>The Planets</Logo>
  			</LogoLink>  			
  			<NavLinkGroup>
  			{
  				planets.map((nav, index) => {
  					return (
  						<NavLinkWrapper>
	  						<NavLink
	  							to={`/${nav}`}
	  							onClick={() => setPlanet(index)}
	  						>
	  						{nav}
	  						</NavLink>
	  						<NavLine
	  							style={{
	  								'--hover': `var(--color-${planets[index]})`,
	  							}}
	  						/>
	  					</NavLinkWrapper>
  					)
  				})
  			}
  			</NavLinkGroup>
  			<Icon
  				onClick={() => setShowMobileMenu(true)}
  				style={{
  					'--opacity': showMobileMenu ? '0.25' : '1',
  				}}
  				alt="A hamburger icon to toggle the mobile menu"
  				src={"/assets/icon-hamburger.svg"}
  			/>
  		</MainHeader>
  		<MobileHeader>
  			<NavListItemWrapper>
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
  			</NavListItemWrapper>
  		</MobileHeader>
      <MobileMenu
      	setPlanet={setPlanet}
        title="Menu"
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
  	</header>
  );
};

const MainHeader = styled.nav`
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
		gap: 37px;
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

const LogoLink = styled(Link)`
	text-decoration: none;
`;

const Logo = styled.h2`
	font-family: var(--font-family-title);
	font-size: calc(28 / 16 * 1rem);
	font-weight: var(--font-weight-normal);
	line-height: 36px;
	letter-spacing: -1.05px;
	color: var(--color-white);
	text-transform: uppercase;
`;

const NavLinkGroup = styled.ul`
	display: flex;
	gap: 0px;

	@media ${QUERIES.phoneAndDown} {
		display: none;
	}
`;

const NavLinkWrapper = styled.li`
	position: relative;
`;

const NavLink = styled(Link)`
	padding: 16px 16px;
	font-family: var(--font-family-text);
	font-size: calc(12 / 16 * 1rem);
	font-weight: var(--font-weight-bold);
	line-height: 25px;
	letter-spacing: 1px;
	color: var(--color-white);
	opacity: 0.75;
	text-transform: uppercase;
	text-decoration: none;

	&:hover {
		opacity: 1;
	}
`;

const NavLine = styled.div`
	position: absolute;
	top: -33px;
	left: 16px;
	right: 16px;
	height: 4px;
	background: transparent;

	${NavLink}:hover + & {
		background: var(--hover);
	}

	@media ${QUERIES.tabletAndDown} {
		display: none;
	}
`;

const Icon = styled.img`
	display: none;
	@media ${QUERIES.phoneAndDown} {
		display: block;
		padding: 25px 24px;
		opacity: var(--opacity);
	}
`;

const MobileHeader = styled.nav`
`;

const NavListItemWrapper = styled.ul`
	display: none;
	@media ${QUERIES.phoneAndDown} {
		display: flex;
		justify-content: center;
		gap: 44px;
		border-bottom: 1px solid var(--color-border);
	}
`;

const NavListItem = styled.li`
	display: block;
	padding-top: 22px;
	padding-bottom: 15px;
	border-bottom: 4px solid var(--borderBottom);

	cursor: pointer;

	font-family: var(--font-family-text);
	font-weight: var(--font-weight-bold);
	line-height: 10px;
	letter-spacing: 1.9px;
	text-transform: uppercase;
	color: var(--color-white);
	opacity: var(--opacity);
	font-size: calc(12 / 16 * 1rem);

	&:hover {
		opacity: 1;
	}

`;

export default Header;
