import React from "react";
import styled from 'styled-components/macro';
import { Link } from "react-router-dom";
import { DialogOverlay, DialogContent } from '@reach/dialog';
import PLANETS from '../../data';

const MobileMenu = ({ setPlanet, isOpen, onDismiss, title }) => {
	const planets = PLANETS.reduce((acc, cur) => {
		acc.push(cur.name);
		return acc;
	}, [])

	if(!isOpen) {
		return null;
	}

  return (
  	<Overlay
      isOpen={isOpen}
      onDismiss={onDismiss}
  	>
  		<Content>
	  		<NavLinkWrapper>
					{
						planets.map((planet, index) => {
							return (
								<NavLink
									key={planet}
									to={`/${planet}`}
									onClick={() => {
										setPlanet(index)
										onDismiss()
									}}
								>
									<ColorBall
										style={{
											'--color': `var(--color-${planet.toLowerCase()})`
										}}
									/>
									{planet}
									<Spacer></Spacer>
									<Icon
										alt=""
										src={"/assets/icon-chevron.svg"}
									/>
								</NavLink>
							)
						})
					}
				</NavLinkWrapper>
  		</Content>
  	</Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  display: flex;
  flex-direction: column;
`;

const Content = styled(DialogContent)`
	position: absolute;
	top: 68px;
	left: 0;
	right: 0;
	bottom: 0;
	padding: 24px 24px 47px 24px;
	background: var(--color-offblack)
`;

const NavLinkWrapper = styled.nav`
`;

const NavLink = styled(Link)`
	display: flex;
	align-items: center;
	padding-top: 20px;
	padding-bottom: 20px;
	border-bottom: 1px solid hsl(0deg 0% 100% / 0.1);

	font-family: var(--font-family-text);
	font-weight: var(--font-weight-bold);
	font-size: calc(15 / 16 * 1rem);
	line-height: 25px;
	letter-spacing: 1.36px;
	text-transform: uppercase;
	text-decoration: none;
	color: var(--color-white);

	&:last-child {
		border-bottom: unset;
	}
`;

const ColorBall = styled.div`
	margin-top: -3px;
	margin-right: 25px;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background: var(--color);
`;

const Spacer = styled.div`
	flex: 1;
`;

const Icon = styled.img`
`;

export default MobileMenu;
