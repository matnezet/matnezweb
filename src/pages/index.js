import React from "react";
import theme from "theme";
import { Theme, Link, Image, Structure, Text, Box, Icon, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
import { MdArrowDownward } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Structure cells-number-total="2" cells-number-group="2">
			<Override slot="Content" grid-template-columns="repeat(2, 6fr)" sm-grid-template-columns="12fr">
				<Override slot="cell-1">
					<Components.QuarklycommunityKitMenu filterMode="include" filterPages="/bio,/cabecera,/index" exact-active-match={false} depth="3">
						<Override slot="link-index" text-decoration-line="initial">
							menu
						</Override>
					</Components.QuarklycommunityKitMenu>
				</Override>
				<Override
					slot="Cell 1st"
					align-self="center"
					justify-self="end"
					order="0"
					display="block"
				/>
				<Override slot="cell-0">
					<Image src="https://uploads.quarkly.io/642610338d8a1a002089e7da/images/Logo-Matnez-Sketch.png?v=2023-03-30T23:03:31.217Z" display="block" width="50px" height="50px" />
				</Override>
			</Override>
		</Structure>
		<Section
			background="linear-gradient(0deg,rgba(4, 8, 12, 0.6) 0%,rgba(4, 8, 12, 0.6) 100%),--color-darkL2 url(https://images.unsplash.com/photo-1510125594188-5afc74c8cc43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80) center/cover"
			padding="60px 0"
			sm-padding="40px 0"
			color="--light"
			font="--base"
			quarkly-title="cabecera"
		>
			<Box margin="-16px -16px -16px -16px" display="flex">
				<Box display="flex" padding="16px 16px 16px 16px" width="75%" md-width="100%">
					<Box display="flex" flex-direction="column">
						<Text color="--lightD2" letter-spacing="1px" text-transform="uppercase" margin="0">
							Excellence in everything
						</Text>
						<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0">
							Striving for perfection in everything we do. Unparalleled service for everyone.
						</Text>
					</Box>
				</Box>
			</Box>
			<Box text-align="center" margin="96px 0 0 0">
				<Text margin="8px 0" text-transform="uppercase">
					Who we are
				</Text>
				<Icon category="md" margin="0 auto" icon={MdArrowDownward} />
			</Box>
		</Section>
		<Section padding="140px 0" sm-padding="40px 0 40px 0" background="url(https://images.unsplash.com/photo-1515600051222-a3c338ff16f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80) center/cover" quarkly-title="bio">
			<Override slot="SectionContent" sm-align-items="center" />
			<Box max-width="360px" padding="50px 80px 80px 50px" background="--color-light" color="--dark">
				<Text
					as="h4"
					font="--base"
					color="--grey"
					letter-spacing="1px"
					text-transform="uppercase"
					margin="6px 0"
				>
					About me
				</Text>
				<Text as="h2" font="--headline2" margin="0 0 12px 0">
					Hey I’m David
				</Text>
				<Text font="--base">
					My name is David R. Moore, born and raised in France, worked as a professional photographer and videographer for more than 10 years, awarded the CDS Documentary Essay Prize in 2018 and Best Photographer of The Year 2019 by Sony World Photography Awards.
				</Text>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"642610338d8a1a002089e7d8"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});