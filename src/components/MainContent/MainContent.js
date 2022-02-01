import React, { useState } from "react";
import styled from 'styled-components/macro';

import PLANETS from '../../data';

const MainContent = ({ planet }) => {
	const planets = PLANETS.reduce((acc, cur) => {
		acc.push(cur.name.toLowerCase());
		return acc;
	}, [])
	const imageKeys = ['planet', 'internal', 'planet'];
	const contentKeys = ['overview', 'structure', 'geology'];
	const buttonText = ['Overview', 'Internal Structure', 'Surface Geology'];
	const factKeys = ['rotation', 'revolution', 'radius', 'temperature'];
	const factText = ['Rotation Time', 'Revolution Time', 'Radius', 'Average Temp.']
	const [content, setContent] = useState(0);
  return (
  	<Wrapper>  		
			<ContentWrapper>
				<HeroImageWrapper>
  				<HeroImage
  					alt=""  					
  					src={PLANETS[planet]['images'][imageKeys[content]]}
  				/>
  				<SurfaceImage
  					style={{
  						'--display': content !== 2 ? 'none' : undefined,
  					}}
  					alt=""
  					src={PLANETS[planet].images.geology}
  				/>
  			</HeroImageWrapper>
				<InfoWrapper>
					<TextWrapper>
						<Title>{PLANETS[planet].name}</Title>
						<Text>{PLANETS[planet][contentKeys[content]]['content']}</Text>
						<SourceWrapper>
							<Source>
								Source&nbsp;:&nbsp;
							</Source>
							<Link href={PLANETS[planet][contentKeys[content]]['source']} target="_blank">
								Wikipedia
								<Icon
									alt=""
									src={"/assets/icon-source.svg"}
								/>
							</Link>
						</SourceWrapper>
					</TextWrapper>
					<ButtonGroup>
					{
						buttonText.map((item, index) => {
							return (
								<Button
									key={item}
									style={{
										'--background': content === index ? `var(--color-${planets[planet]})` : 'transparent',
										'--border': content === index ? `var(--color-${planets[planet]})`: 'var(--color-border)',
										'--hover': content === index ? `var(--color-${planets[planet]})` : 'hsl(0deg 0% 85% / 0.2)',
										'--gap': index === 0 ? '28px' : '25px',
									}}
									onClick={() => setContent(index)}
								>
									<Index>0{index + 1}</Index>
									<ButtonText>{item}</ButtonText>
								</Button>
							)
						})
					}
					</ButtonGroup>
				</InfoWrapper>
			</ContentWrapper>
			<FactList>
			{
				factText.map((item, index) => {
					return (
						<ListItem
							key={factKeys[index]}
						>
							<ListTitle>{item}</ListTitle>
							<ListNum>{PLANETS[planet][factKeys[index]]}</ListNum>
						</ListItem>
					)
				})
			}
			</FactList>
  	</Wrapper>
  );
};

const Wrapper = styled.div`
	padding-left: 35px;
	padding-right: 35px;
`;

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: row;
	// border: 1px solid white;
`;

const HeroImageWrapper = styled.div`
	position: relative;
	flex: 1;
	display: grid;
	place-content: center center;
`;

const HeroImage = styled.img`
`;

const SurfaceImage = styled.img`
	display: var(--display);
	position: absolute;
	width: 163px;
	height: 199px;
	top: 50%;
	left: 50%;
	transform: translate(-50%, 81px);
`

const InfoWrapper = styled.div`
	width: 480px;
	padding-top: 106px;
	padding-right: 130px;
	padding-bottom: 87px;
`;

const TextWrapper = styled.div`
	margin-bottom: 39px;
`;

const Title = styled.h1`
	color: var(--color-white);
	font-family: var(--font-family-title);
	font-weight: var(--normal);
	font-size: 80px;
	line-height: 104px;
	text-transform: uppercase;
	margin-bottom: 24px;
`;

const Text = styled.p`
	display: block;
	height: 150px;
	margin-bottom: 24px;

	color: var(--color-white);
	font-family: var(--font-family-text);
	font-weight: var(--font-weight-normal);
	font-size: 14px;
	line-height: 25px;
`;

const SourceWrapper = styled.div`
	display: flex;
	flex-direction: row;

	color: var(--color-white);
	opacity: 0.5;
	font-family: var(--font-family-text);
	font-weight: var(--font-weight-normal);
	font-size: 14px;
	line-height: 25px;
`

const Source = styled.span`
`

const Link = styled.a`
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	gap: 8px;

	color: inherit;
	font-weight: var(--font-weight-bold);
`;

const Icon = styled.img`
	display: block;
	width: 12px;
	height: 12px;
	margin-bottom: 4px;
`

const ButtonGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

const Button = styled.button`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: var(--gap);

	height: 48px;

	margin: 0;
	padding: 12px 28px;
	border: 1px solid var(--border);
	background: var(--background);
	cursor: pointer;

	font-family: var(--font-family-text);
	font-size: 12px;
	font-weight: var(--font-weight-bold);
	line-height: 25px;
	color: var(--color-white);
	letter-spacing: 2.6px;
	text-transform: uppercase;

	&:hover {
		background: var(--hover);
		background-clip: padding-box;
		border: 1px solid var(--hover);
	}
`;

const ButtonText = styled.div`
`;

const Index = styled.div`
	opacity: 0.5;
`;

const FactList = styled.ul`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding-right: 130px;
	padding-bottom: 56px;
	padding-left: 130px;
`

const ListItem = styled.li`
	display: flex;
	flex-direction: column;
	gap: 4px;
	width: 255px;
	height: 128px;
	padding: 20px 23px;
	border: 1px solid var(--color-border);
`

const ListTitle = styled.h4`
	font-family: var(--font-family-text);
	font-weight: var(--font-weight-bold); 
	font-size: 11px;
	line-height: 25px;
	letter-spacing: 1px;
	text-transform: uppercase;
	color: var(--color-white);
	opacity: 0.5;
`;

const ListNum = styled.h2`
	font-family: var(--font-family-title);
	font-weight: var(--font-weight-normal); 
	font-size: 40px;
	line-height: 52px;
	letter-spacing: -1.5px;
	text-transform: uppercase;
	color: var(--color-white);
`;

export default MainContent;
