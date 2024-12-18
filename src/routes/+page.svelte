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

	let titles = ["1Anime", "Ad-free", "Unlimited Anime", "Read Manga", "All for FREE"];
	let currentIndex = 0;

	function changeTitle() {
		currentIndex = (currentIndex + 1) % titles.length;
	}

	setInterval(changeTitle, 5000); // Change title every 5 seconds

</script>

<svelte:head>
	<title>1Anime - Your Ultimate Anime and Manga Streaming Platform</title>

	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">

	<!-- SEO/OGP -->
	<meta name="author" content="@1AnimeApp">
	<meta name="keywords" content="1anime, anime, manga, streaming, free, watch, online, 2024, 2025, characters, episodes, series, anime streaming, manga streaming">
	<meta name="description" content="1Anime is your ultimate platform for streaming anime and manga online without ads.">
	<meta name="image" content="https://1anime.info/banner.jpg">
	<meta itemprop="name" content="1Anime - Your Ultimate Anime and Manga Streaming Platform">
	<meta itemprop="description" content="1Anime is your ultimate platform for streaming anime and manga online without ads.">
	<meta itemprop="image" content="https://1anime.info/banner.jpg">
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:title" content="1Anime - Your Ultimate Anime and Manga Streaming Platform">
	<meta name="twitter:description" content="1Anime is your ultimate platform for streaming anime and manga online without ads.">
	<meta name="twitter:creator" content="@1AnimeApp">
	<meta name="twitter:site" content="@1AnimeApp">
	<meta name="twitter:image:src" content="https://1anime.info/banner.jpg">
	<meta name="twitter:image:alt" content="1Anime brand image">
	<meta name="og:title" content="1Anime - Your Ultimate Anime and Manga Streaming Platform">
	<meta name="og:description" content="1Anime is your ultimate platform for streaming anime and manga online without ads.">
	<meta name="og:image" content="https://1anime.info/banner.jpg">
	<meta name="og:url" content="https://1anime.com">
	<meta name="og:site_name" content="1Anime - Your Ultimate Anime and Manga Streaming Platform">
	<meta name="og:locale" content="en_US">
	<meta name="og:type" content="website">

	<!-- Favicon -->
	<link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
	<link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
	<link rel="shortcut icon" href="/favicon/favicon.ico" />
	<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
	<meta name="apple-mobile-web-app-title" content="1Anime" />
	<link rel="manifest" href="/favicon/site.webmanifest" />
	<meta name="msapplication-TileColor" content="#da532c">
	<meta name="theme-color" content="#ffffff">
</svelte:head>

<Nav />

<section class="hero">
	<main>
		<div class="left">
			<InlineBanner
					type="patreon"
					url="https://1anime.info/docs/contribute"
			>Support us by Donating to keep 1Anime ad-free!</InlineBanner>

			<div class="type--group-heading-and-content">
				<h1 class="title-animation">{titles[currentIndex]}</h1>
				<p>Your ad-free platform for streaming the latest anime and manga, completely free of charge.</p>
			</div>

			<BasicInfoDisplayGrouped>
				<BasicInfoDisplay
					description="Enjoy uninterrupted viewing."
				>
					<IconStar size={20} stroke={1.5} />
					Ad-Free
				</BasicInfoDisplay>
				<BasicInfoDisplay
					url="#integrations"
					urlTarget="_self"
					description="Discover various integrations available for 1Anime."
				>
					<IconPackages size={20} stroke={1.5} />
					Integrations
				</BasicInfoDisplay>
				<BasicInfoDisplay
					description="No account needed. Start watching your favorite shows instantly."
				>
					<IconKeyOff size={20} stroke={1.5} />
					No Account Required
				</BasicInfoDisplay>
				<BasicInfoDisplay
					url="https://discord.gg/1anime"
					urlTarget="_blank"
					description="Join our Discord server for support and community discussions."
				>
					<IconBrandDiscord size={20} stroke={1.5} />
					Community Support
				</BasicInfoDisplay>
				<BasicInfoDisplay
					description="A vast library of anime and manga awaits you!"
				>
					<IconChartLine size={20} stroke={1.5} />
					Extensive Library
				</BasicInfoDisplay>
			</BasicInfoDisplayGrouped>

			<ButtonGroup>
				<Button type="primary" urlTarget="_blank" url="https://1anime.one/">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="20" height="20">
					  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
					</svg>
Watch Now
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
					<h2>Free & Ad-Free</h2>
					<h3 style="display: flex">— all thanks to your support and our <Button type="link-heading" urlTarget="_blank" url="https://1anime.info/community/"><IconArrowDownLeft class="external-link" size={20} stroke={1.5} /> Community</Button></h3>
					<p>Our platform thrives on community support. We value your suggestions, and without your help, we wouldn't be here today. Consider donating or contributing!</p>
				</div>
			</div>

			<div
				class="showcaseCover margin--top-64"
				style="background-image: url({ShowcaseBackground})"
			>
				<div class="overlay">
					<div class="type--group-heading-and-content">
						<h2>Crafted with 💖 by the 1Anime Community</h2>
						<p>Launched in March 2024, 1Anime has quickly become a favorite among anime fans. Enjoy a vast library of shows, <strong>completely free</strong>.</p>
					</div>
				</div>
			</div>
		</div>

		<div class="right">
			<div class="type--group-heading-and-content">
				<h2>Features</h2>
				<p>1Anime offers a diverse range of anime titles, with more features on the way.</p>
			</div>

			<Banner type="info" size="small">
				1Anime is ad-free and community-driven. Enjoy your experience with us!
			</Banner>

			<div>
				<h3>Available Features</h3>
				<BasicInfoDisplayGrouped>
					{#each features.available as feature}
						<BasicInfoDisplay
							description={feature.description}
						>
							<svelte:component this={feature.icon} size={20} stroke={1.5} />
							{feature.label}
						</BasicInfoDisplay>
					{/each}
				</BasicInfoDisplayGrouped>
			</div>

			<div>
				<h3>Upcoming Features</h3>
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
		</div>
	</div>
</section>
<section class="integrationsWrapper" id="integrations">
	<div class="integrations">
		<div class="left">
			<div class="type--group-heading-and-content">
				<h2>Seamless Integrations with Your Favorite Platforms</h2>
			</div>

			<div class="integrations__body margin--top-64">
				<div class="integrations__about">
					<div class="integrations__aboutIcon">
						<IconHeartHandshake size={35} stroke={1.5} />
					</div>

					<div>
						<h6>By the Community, For the Community</h6>
						<p>Thanks to our dedicated contributors, we offer a multitude of integrations to enhance your experience with your favorite platforms.</p>
					</div>
				</div>
			</div>

			<Divider type="line"></Divider>

			<Button url="#" type="secondary-outline" size="full-width">
				<IconCirclePlus size={20} stroke={1.5} />
				Request a New Integration
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

<style>
	.title-animation {
		background: linear-gradient(90deg, #0000ff, #800080);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		animation: fadeInOut 5s ease-in-out infinite;
	}
	@keyframes fadeInOut {
		0%, 20% {
			opacity: 0;
		}
		25%, 75% {
			opacity: 1;
		}
		80%, 100% {
			opacity: 0;
		}
	}
</style>
