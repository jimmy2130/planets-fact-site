import React from "react";
import styled from 'styled-components/macro';
import ShiftBy from '../ShiftBy';
import { QUERIES, SCALE } from '../../constants';
import PLANETS from '../../data';

const MainContent = ({ planet, content, setContent }) => {
	const planets = PLANETS.reduce((acc, cur) => {
		acc.push(cur.name.toLowerCase());
		return acc;
	}, [])
	const imageKeys = ['planet', 'internal', 'planet'];
	const contentKeys = ['overview', 'structure', 'geology'];
	const buttonText = ['Overview', 'Internal Structure', 'Surface Geology'];
	const factKeys = ['rotation', 'revolution', 'radius', 'temperature'];
	const factText = ['Rotation Time', 'Revolution Time', 'Radius', 'Average Temp.']

  return (
  	<Wrapper>  		
			<ContentWrapper>
				<HeroImageWrapper>
  				<HeroImage
  					alt={`illustration of ${PLANETS[planet]['name']}`}  					
  					src={PLANETS[planet]['images'][imageKeys[content]]}
  				/>
  				<SurfaceImage
  					style={{
  						'--display': content !== 2 ? 'none' : undefined,
  					}}
  					alt={`surface of ${PLANETS[planet]['name']}`}
  					src={PLANETS[planet].images.geology}
  				/>
  			</HeroImageWrapper>
				<InfoWrapper>
					<TextWrapper>
						<ShiftBy x={-3}>
							<Title>{PLANETS[planet].name}</Title>
						</ShiftBy>
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
					<Spacer/>
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
									<ButtonIndex>0{index + 1}</ButtonIndex>
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
	padding: 20px 35px 56px 35px;

	@media ${QUERIES.tabletAndDown} {
		padding: 16px 40px 36px 40px;
	}

	@media ${QUERIES.phoneAndDown} {
		padding: 0px 24px 47px 24px;
	}
`;

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: row;
	// border: 1px solid white;

	@media ${QUERIES.tabletAndDown} {
		flex-direction: column;
	}
`;

const HeroImageWrapper = styled.div`
	position: relative;
	flex: 1;
	display: grid;
	place-content: center center;

	@media ${QUERIES.tabletAndDown} {
		flex: revert;
		height: 444px;
	}

	@media ${QUERIES.phoneAndDown} {
		flex: revert;
		height: 304px;
	}
`;

const HeroImage = styled.img`
	@media ${QUERIES.tabletAndDown} {
		transform: scale(${SCALE.tablet});	
	}

	@media ${QUERIES.phoneAndDown} {
		transform: scale(${SCALE.phone});
	}
`;

const SurfaceImage = styled.img`
	display: var(--display);
	position: absolute;
	width: 163px;
	height: 199px;
	top: 50%;
	left: 50%;
	transform: translate(-50%, 81px);

	@media ${QUERIES.tabletAndDown} {
		width: calc(163px * ${SCALE.tablet});
		height: calc(199px * ${SCALE.tablet});
		transform: translate(-50%, calc(81px * ${SCALE.tablet}));
	}

	@media ${QUERIES.phoneAndDown} {
		width: calc(163px * ${SCALE.phone});
		height: calc(199px * ${SCALE.phone});
		transform: translate(-50%, calc(81px * ${SCALE.phone}));

	}
`

const InfoWrapper = styled.div`
	width: 480px;
	padding-top: 106px;
	padding-right: 130px;
	padding-bottom: 87px;

	@media ${QUERIES.tabletAndDown} {
		width: revert;
		padding-top: 0px;
		padding-right: 0px;
		padding-bottom: 37px;
		display: flex;
		flex-direction: row;
	}

	@media ${QUERIES.phoneAndDown} {
		padding-bottom: 28px;
		justify-content: center;
		text-align: center;
	}
`;

const TextWrapper = styled.div`
	margin-bottom: 39px;

	@media ${QUERIES.tabletAndDown} {
		margin-bottom: 0px;
		width: calc(50% - 5.5px);
	}

	@media ${QUERIES.phoneAndDown} {
		width: auto;
	}
`;

const Title = styled.h1`
	color: var(--color-white);
	font-family: var(--font-family-title);
	font-weight: var(--normal);
	font-size: calc(80 / 16 * 1rem);
	line-height: 104px;
	text-transform: uppercase;
	margin-bottom: 24px;

	@media ${QUERIES.tabletAndDown} {
		font-size: calc(48 / 16 * 1rem);
		line-height: 62px;
	}

	@media ${QUERIES.phoneAndDown} {
		font-size: calc(40 / 16 * 1rem);
		line-height: 52px;
		margin-bottom: 16px;
	}
`;

const Text = styled.p`
	height: 150px;
	margin-bottom: 24px;

	color: var(--color-white);
	font-family: var(--font-family-text);
	font-weight: var(--font-weight-normal);
	font-size: calc(14 / 16 * 1rem);
	line-height: 25px;

	@media ${QUERIES.tabletAndDown} {		
		height: 110px;
		margin-bottom: 32px;
		font-size: calc(12 / 16 * 1rem);
		line-height: 22px;
	}

	@media ${QUERIES.phoneAndDown} {
		max-width: 327px;
		height: 132px;
		margin-bottom: 10px;
	}
`;

const SourceWrapper = styled.div`
	display: flex;
	flex-direction: row;

	color: var(--color-white);
	opacity: 0.5;
	font-family: var(--font-family-text);
	font-weight: var(--font-weight-normal);
	font-size: calc(14 / 16 * 1rem);
	line-height: 25px;

	@media ${QUERIES.tabletAndDown} {
		font-size: calc(12 / 16 * 1rem);
	}

	@media ${QUERIES.phoneAndDown} {
		justify-content: center;
	}
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

	@media ${QUERIES.tabletAndDown} {
		margin-bottom: 2px;
	}
`;

const Spacer = styled.div`
	display: none;
	@media ${QUERIES.tabletAndDown} {
		display: block;
		flex: 1;
	}
	@media ${QUERIES.phoneAndDown} {
		display: none;
	}
`;

const ButtonGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;

	@media ${QUERIES.tabletAndDown} {
		padding-top: 56px;
	}

	@media ${QUERIES.phoneAndDown} {
		padding: 0px;
		display: none;
	}
`;

const Button = styled.button`
	display: flex;
	align-items: center;
	gap: var(--gap);

	height: 48px;

	margin: 0;
	padding: 12px 28px;
	border: 1px solid var(--border);
	background: var(--background);
	cursor: pointer;

	font-family: var(--font-family-text);
	font-weight: var(--font-weight-bold);
	color: var(--color-white);
	text-transform: uppercase;

	&:hover {
		background: var(--hover);
		background-clip: padding-box;
		border: 1px solid var(--hover);
	}

	@media ${QUERIES.tabletAndDown} {
		gap: calc(var(--gap) - 11px);
		height: 40px;
		width: 281px;
		padding: 8px 20px;
	}
`;

const ButtonIndex = styled.span`
	font-size: calc(12 / 16 * 1rem);
	line-height: 25px;
	letter-spacing: 2.6px;
	opacity: 0.5;

	@media ${QUERIES.tabletAndDown} {
		transform-origin: left;
		transform: scale(calc(9 / 12));
		letter-spacing: 1.9px;
	}
`;

const ButtonText = styled.span`
	font-size: calc(12 / 16 * 1rem);
	line-height: 25px;
	letter-spacing: 2.6px;

	@media ${QUERIES.tabletAndDown} {
		transform-origin: left;
		transform: scale(calc(9 / 12));
		letter-spacing: 1.9px;
	}
`;

const FactList = styled.ul`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 30px;

	padding-left: 130px;
	padding-right: 130px;

	@media ${QUERIES.tabletAndDown} {
		padding-left: 0px;
		padding-right: 0px;
		gap: 11px;
	}

	@media ${QUERIES.phoneAndDown} {
		flex-direction: column;
		justify-content: flex-start;
		gap: 8px;
	}
`

const ListItem = styled.li`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 4px;
	padding: 20px 23px;
	border: 1px solid var(--color-border);

	@media ${QUERIES.tabletAndDown} {
		padding: 16px 15px;
	}

	@media ${QUERIES.phoneAndDown} {
		padding: 8px 24px 8px 24px;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		gap: revert;
	}
`

const ListTitle = styled.div`
	font-family: var(--font-family-text);
	font-weight: var(--font-weight-bold); 
	font-size: calc(12 / 16 * 1rem);
	line-height: 25px;
	letter-spacing: 1px;
	text-transform: uppercase;
	color: var(--color-white);
	opacity: 0.5;

	transform-origin: left;
	transform: scale(calc(11 / 12));

	@media ${QUERIES.tabletAndDown} {
		transform: scale(calc(10 / 12));
		width: max-content;
		line-height: 16px;
		letter-spacing: 0.73px;
	}

	@media ${QUERIES.phoneAndDown} {
		transform: revert;
		width: auto;
		font-size: calc(12 / 16 * 1rem);
		margin-top: 2px;
	}
`;

const ListNum = styled.div`
	font-family: var(--font-family-title);
	font-weight: var(--font-weight-normal); 
	font-size: calc(40 / 16 * 1rem);
	line-height: 52px;
	letter-spacing: -1.5px;
	text-transform: uppercase;
	color: var(--color-white);

	@media ${QUERIES.tabletAndDown} {
		font-size: calc(24 / 16 * 1rem);
		line-height: 31px;
		letter-spacing: -0.9px;
	}

	@media ${QUERIES.phoneAndDown} {
		font-size: calc(20 / 16 * 1rem);
		line-height: 26px;
		letter-spacing: -0.75px;
		margin-bottom: 4px;
	}
`;

export default MainContent;
