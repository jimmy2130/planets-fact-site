import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components/macro';
import PLANETS from '../../data';

const Header = ({ setPlanet }) => {
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
  		</MainHeader>
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
`;

const Logo = styled.h2`
	font-family: var(--font-family-title);
	font-size: 28px;
	font-weight: var(--font-weight-normal);
	line-height: 36px;
	letter-spacing: -1.5px;
	color: var(--color-white);
	text-transform: uppercase;
`;

const NavLinkGroup = styled.nav`
	display: flex;
	flex-direction: row;
	gap: 33px;
`;

const NavLink = styled(Link)`
	font-family: var(--font-family-text);
	font-size: 11px;
	font-weight: var(--font-weight-bold);
	line-height: 25px;
	letter-spacing: 1px;
	color: var(--color-white);
	opacity: 0.75;
	text-transform: uppercase;
	text-decoration: none;
`;

export default Header;
