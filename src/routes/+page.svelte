<script>
	import InlineBanner from "../lib/components/InlineBanner.svelte";
	import Button from "../lib/components/Button.svelte";
	import {
		IconArrowDownLeft,
		IconArrowNarrowRight,
		IconApi,
		IconExternalLink,
		IconBrandPhp,
		IconPackages,
		IconKeyOff,
		IconChartLine,
		IconBrandDiscord, IconStar, IconGitFork, IconHelp, IconCopy, IconInfoCircle, IconCode, IconPlus, IconHeartHandshake, IconCirclePlus, IconGitCommit
	} from "@tabler/icons-svelte";
	import BasicInfoDisplay from "../lib/components/DataDisplay/BasicInfoDisplay.svelte";
	import Chip from "../lib/components/Chip.svelte";
	import BasicInfoDisplayGrouped from "../lib/components/DataDisplay/BasicInfoDisplayGrouped.svelte";
	import ButtonGroup from "../lib/components/ButtonGroup.svelte";
	import Banner from "../lib/components/Banner.svelte";
	import Nav from "../lib/components/Nav.svelte";
	import Footer from "../lib/components/Footer.svelte";
	import Marquee from "../lib/components/Marquee.svelte";
	import RequestExamples from "../lib/components/RequestExamples.svelte";
	import features from "../data/features.js";
	import integrations from "../data/integrations.js";
	import ShowcaseBackground from "../lib/images/showcase-background.png";
	import Divider from "../lib/components/Divider.svelte";
	import InputReadOnly from "../lib/components/InputReadOnly.svelte";
	import IntegrationCard from "../lib/components/IntegrationCard.svelte";
	import {tooltip} from "@svelte-plugins/tooltips"
	import {onMount} from "svelte";

	let github = {};
	onMount(async() => {
		github.contributors = await ((await fetch('https://api.github.com/repos/1anime/V1')).json());
	});

	console.log(github)

</script>

<svelte:head>
	<title>1Anime - Your Anime and Manga Streaming App</title>

	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>1Anime - Your Anime and Manga Streaming App</title>

	<!-- SEO/OGP -->
	<meta name="author" content="@yourUsername">
	<meta name="keywords" content="1anime, anime, manga, streaming, free, watch, online, 2023, characters, episodes, series">
	<meta name="description" content="1Anime is your go-to platform for streaming anime and manga online.">
	<meta name="image" content="https://i.imgur.com/eUveNoj.png">
	<meta itemprop="name" content="1Anime - Your Anime and Manga Streaming App">
	<meta itemprop="description" content="1Anime is your go-to platform for streaming anime and manga online.">
	<meta itemprop="image" content="https://i.imgur.com/eUveNoj.png">
	<meta name="twitter:card" content="summary">
	<meta name="twitter:title" content="1Anime - Your Anime and Manga Streaming App">
	<meta name="twitter:description" content="1Anime is your go-to platform for streaming anime and manga online.">
	<meta name="twitter:creator" content="@yourUsername">
	<meta name="twitter:site" content="@yourUsername">
	<meta name="twitter:image:src" content="https://i.imgur.com/eUveNoj.png">
	<meta name="twitter:image:alt" content="1Anime brand image">
	<meta name="twitter:card" content="summary_large_image">
	<meta name="og:title" content="1Anime - Your Anime and Manga Streaming App">
	<meta name="og:description" content="1Anime is your go-to platform for streaming anime and manga online.">
	<meta name="og:image" content="https://i.imgur.com/eUveNoj.png">
	<meta name="og:url" content="https://1anime.com">
	<meta name="og:site_name" content="1Anime - Your Anime and Manga Streaming App">
	<meta name="og:locale" content="en_US">
	<meta name="og:type" content="website">

	<!-- Favicon -->
	<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png?v=2">
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png?v=2">
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png?v=2">
	<link rel="manifest" href="/favicon/site.webmanifest?v=2">
	<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg?v=2" color="#5bbad5">
	<link rel="shortcut icon" href="/favicon/favicon.ico?v=2">
	<meta name="msapplication-TileColor" content="#da532c">
	<meta name="theme-color" content="#ffffff">
</svelte:head>

<Nav />

<section class="hero">
	<main>
		<div class="left">
			<InlineBanner
					type="patreon"
					url="https://patreon.com/1anime"
			>We rely on you! Support us on Patreon</InlineBanner>

			<div class="type--group-heading-and-content">
				<h1>1Anime</h1>
				<p>1Anime is your Ad-free & free platform for streaming the latest anime and manga.</p>
			</div>

			<BasicInfoDisplayGrouped>
				<BasicInfoDisplay
					urlTarget="_blank"
					url="https://github.com/1anime/1anime"
					description="Visit the 1Anime GitHub repository."
				>
					<IconExternalLink size={20} stroke={1.5} />
					GitHub Repository
				</BasicInfoDisplay>
				<BasicInfoDisplay
					url="#integrations"
					urlTarget="_self"
					description="Explore various integrations available for 1Anime."
				>
					<IconPackages size={20} stroke={1.5} />
					Integrations
				</BasicInfoDisplay>
				<BasicInfoDisplay
					description="No account needed. Just start watching your favorite shows."
				>
					<IconKeyOff size={20} stroke={1.5} />
					No Account Required
				</BasicInfoDisplay>
				<BasicInfoDisplay
					url="https://discord.1anime.com"
					urlTarget="_blank"
					description="Join our Discord server for support and community discussions."
				>
					<IconBrandDiscord size={20} stroke={1.5} />
					Community Support
				</BasicInfoDisplay>
				<BasicInfoDisplay
					description="We serve millions of streams every week!"
				>
					<IconChartLine size={20} stroke={1.5} />
					Millions of Streams
				</BasicInfoDisplay>
			</BasicInfoDisplayGrouped>

			<ButtonGroup>
				<Button type="primary" url="#features">Learn more</Button>

				<Button type="secondary-outline" urlTarget="_blank" url="https://docs.1anime.com/">
					<IconArrowDownLeft class="external-link" size={20} stroke={1.5} />
					Get started
				</Button>
			</ButtonGroup>
		</div>
		<div class="right">
			<RequestExamples />
		</div>
	</main>

	<Marquee />
</section>


<section class="featuresWrapper" id="features">
	<div class="features">
		<div class="left">
			<div class="open-source">
				<div class="type--group-heading-and-content">
					<h2>Free & Open Source</h2>
					<h3 style="display: flex">— all under <Button type="link-heading" urlTarget="_blank" url="https://choosealicense.com/licenses/mit/"><IconArrowDownLeft class="external-link" size={32} stroke={1.5} />MIT Licensing</Button></h3>
					<p>Focus on enjoying your favorite shows while we keep the streams rolling. With nearly limitless access, you have the freedom to watch without restrictions.</p>
				</div>

				<Button type="primary" url="https://github.com/1anime" urlTarget="_blank">
					<IconArrowDownLeft class="external-link" size={20} stroke={1.5} />
					Visit GitHub organization
				</Button>
			</div>

			<div
				class="showcaseCover margin--top-64"
				style="background-image: url({ShowcaseBackground})"
			>
				<div class="overlay">
					<div class="type--group-heading-and-content">
						<h2>⚡ Powered by 1Anime</h2>
						<p>1Anime was launched in 2023 and has quickly become a favorite for anime fans. Enjoy a vast library of shows, <strong>free of cost</strong>.<br><br> A public showcase is available where you can view apps and projects using 1Anime and even <strong>add your own</strong> there!</p>
					</div>

					<ButtonGroup>
						<Button url="/showcase" type="secondary-outline" size="full-width">
							View all apps
							<IconArrowNarrowRight size={20} stroke={1.5} />
						</Button>
						<Button url="https://github.com/1anime/website/edit/master/src/data/showcase.js" type="tertiary" size="full-width">
							<IconCirclePlus size={20} stroke={1.5} />
							Add my project
						</Button>
					</ButtonGroup>
				</div>
			</div>
		</div>

		<div class="right">
			<div class="type--group-heading-and-content">
				<h2>Features</h2>
				<p>1Anime offers a wide range of anime titles with more features coming soon.</p>
			</div>

			<Banner type="info" size="small">
				1Anime supports non-authenticated streaming. This means, you can watch without creating an account.
			</Banner>

			<div>
				<h3>Available</h3>
				<BasicInfoDisplayGrouped>
					{#each features.available as feature}
						<BasicInfoDisplay
							description={feature.description}
						>
							<svelte:component this={feature.icon} size={20} stroke={1.5} />
							{#if feature.highlight}
								<Chip type="outline-gradient-light" size="small">v{feature.onVersion}</Chip>
							{:else}
								<Chip type="outline" size="small">v{feature.onVersion}</Chip>
							{/if}
							{feature.label}
						</BasicInfoDisplay>
					{/each}
				</BasicInfoDisplayGrouped>
			</div>

			<div>
				<h3>Upcoming</h3>
				<BasicInfoDisplayGrouped>
				{#each features.upcoming as feature}
					<BasicInfoDisplay
						disabled
						description={feature.description}
					>
						<svelte:component this={feature.icon} size={20} stroke={1.5} />
						<Chip type="outline" size="small">v{feature.onVersion}</Chip>
						{feature.label}
					</BasicInfoDisplay>
				{/each}
				</BasicInfoDisplayGrouped>

			</div>

			<Button urlTarget="_blank" url="https://github.com/orgs/1anime/projects/2" type="primary">
				<IconArrowDownLeft class="external-link" size={20} stroke={1.5} />
				View Roadmap
			</Button>
		</div>
	</div>
</section>


<section class="howItWorksWrapper" id="how-it-works">
	<div class="howItWorks">
		<div class="type--group-heading-and-content type--center">
			<h2>How does this work?</h2>
			<p>1Anime streams content from various sources.<br>The service consists of a user-friendly interface and a vast library of anime.</p>
		</div>

		<div class="diagram">
			<div class="diagram__flow">
				<div class="cardDiagramInfo">
					<div class="cardDiagramInfo__meta">
						<div class="type--group-heading-and-subheading">
							<h6 class="cardDiagramInfo__title">1Anime Streaming Service</h6>
							<p class="cardDiagramInfo__subtitle">— Your go-to anime platform</p>
						</div>

						{#if github.contributors}
							<div class="cardDiagramInfo__repoStats">
								<Button urlTarget="_blank" url="https://github.com/1anime/1anime" type="link">
									<IconStar size={20} stroke={1.5} />
									{github.contributors.length} contributors
								</Button>
							</div>
						{/if}
					</div>

					<Divider type="line"></Divider>

					<p class="cardDiagramInfo__about">
						1Anime provides a seamless streaming experience for anime lovers. Enjoy a wide range of titles and genres, all in one place.
					</p>

					<ButtonGroup type="stacked">
						<Button urlTarget="_blank" url="https://docs.1anime.com/" type="primary" size="full-width">
							<IconArrowDownLeft class="external-link" size={20} stroke={1.5} />
							View Documentation
						</Button>
					</ButtonGroup>
				</div>

			</div>

			<div class="diagram__contributorsWrapper">
				<div class="diagram__contributors">
					<div class="diagram__contributorsBody">
						<IconInfoCircle size={20} stroke={1.5} />
						<p>
							You can help us by contributing and reporting issues - so we can keep this platform running smoothly.
						</p>
					</div>

					{#if github.contributors}
						<div class="avatars">
							{#each github.contributors.slice(0,6) as contributor}
								<a href="{contributor.html_url}" class="avatar avatar--stacked avatar--image"><img src="{contributor.avatar_url}" alt="{contributor.login}" /></a>
							{/each}
							<a class="avatar avatar--stacked avatar--more">+{github.contributors.length - 7}</a>
						</div>
					{/if}

					<div class="diagram__contributorsBorderHighlight"></div>
				</div>
			</div>
		</div>

	</div>
</section>

<section class="integrationsWrapper" id="integrations">
	<div class="integrations">
		<div class="left">
			<div class="type--group-heading-and-content">
				<h2>Seamless integration with the platforms you use and love.</h2>
			</div>

			<div class="integrations__body margin--top-64">
				<div class="integrations__about">
					<div class="integrations__aboutIcon">
						<IconHeartHandshake size={35} stroke={1.5} />
					</div>

					<div>
						<h6>By the community, for the community</h6>
						<p>Thanks to avid contributors, there are a multitude of integrations available so you can easily use it with your favorite platforms.</p>
					</div>
				</div>

				<div class="integrations__about">
					<div class="integrations__aboutIcon">
						<IconGitCommit size={35} stroke={1.5} />
					</div>

					<div>
						<h6>Create or contribute to an integration</h6>
						<p>Get involved by writing or maintaining an integration in the platform of your choice.</p>
					</div>
				</div>

				<div class="integrations__about">
					<div class="integrations__aboutIcon">
						<IconApi size={35} stroke={1.5} />
					</div>

					<div>
						<h6>OpenAPI 3.1 Specifications</h6>
						<p>Generate integrations on the fly as our documentation is built on <Button type="link" url="https://raw.githubusercontent.com/1anime/1anime/master/storage/api-docs/api-docs.json" urlTarget="blank">OpenAPI 3.1</Button> Specs.</p>
					</div>
				</div>
			</div>

			<Divider type="line"></Divider>

			<Button url="https://github.com/1anime/website/edit/master/src/data/integrations.js" type="secondary-outline" size="full-width">
				<IconCirclePlus size={20} stroke={1.5} />
				Add your integration here
			</Button>
		</div>

		<div class="right">
			<div class="type--group-heading-and-content">
				<h6>Available Integrations ({integrations.length})</h6>
			</div>

			<div class="integrations__listing">
				<div class="integrations__fadeout integrations__fadeout--top"></div>
				{#each integrations as integration}
					<IntegrationCard
							type={integration.type}
							author={integration.author}
							title={integration.title}
							language={integration.language}
							url={integration.url}
					></IntegrationCard>
				{/each}
				<div class="integrations__fadeout integrations__fadeout--bottom"></div>
			</div>
		</div>
	</div>
</section>

<Footer />