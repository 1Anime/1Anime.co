<script>
	import InlineBanner from "../lib/components/InlineBanner.svelte";
	import Button from "../lib/components/Button.svelte";
	import {
		IconArrowDownLeft,
		IconArrowNarrowRight,
		IconPackages,
		IconBrandDiscord, IconHeartHandshake, IconCirclePlus
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
	import {onMount} from "svelte";

	let github = {};
	onMount(async() => {
		// Removed GitHub API calls as per the new instructions
	});

</script>

<svelte:head>
	<title>1Anime - Your Gateway to Anime</title>

	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">

	<!-- SEO/OGP -->
	<meta name="author" content="@irfanDahir">
	<meta name="keywords" content="1Anime, anime, manga, community, free, no ads">
	<meta name="description" content="1Anime is your go-to platform for anime and manga data, completely free and ad-free.">
	<meta name="image" content="https://i.imgur.com/eUveNoj.png">
	<meta itemprop="name" content="1Anime - Your Gateway to Anime">
	<meta itemprop="description" content="1Anime is your go-to platform for anime and manga data, completely free and ad-free.">
	<meta itemprop="image" content="https://i.imgur.com/eUveNoj.png">
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:title" content="1Anime - Your Gateway to Anime">
	<meta name="twitter:description" content="1Anime is your go-to platform for anime and manga data, completely free and ad-free.">
	<meta name="twitter:creator" content="@irfanDahir">
	<meta name="twitter:site" content="@irfanDahir">
	<meta name="twitter:image:src" content="https://i.imgur.com/eUveNoj.png">
	<meta name="twitter:image:alt" content="1Anime brand image">
	<meta name="og:title" content="1Anime - Your Gateway to Anime">
	<meta name="og:description" content="1Anime is your go-to platform for anime and manga data, completely free and ad-free.">
	<meta name="og:image" content="https://i.imgur.com/eUveNoj.png">
	<meta name="og:url" content="https://1anime.info">
	<meta name="og:site_name" content="1Anime - Your Gateway to Anime">
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
					url="https://1anime.info/docs/contribute"
			>Support us to keep 1Anime running!</InlineBanner>

			<div class="type--group-heading-and-content">
				<h1>1Anime</h1>
				<p>1Anime is a free platform providing access to a vast collection of anime and manga data, with no ads to interrupt your experience.</p>
			</div>

			<BasicInfoDisplayGrouped>
				<BasicInfoDisplay
					url="#features"
					description="Explore the features that make 1Anime the best choice for anime lovers."
				>
					<IconPackages size={20} stroke={1.5} />
					Features
				</BasicInfoDisplay>
				<BasicInfoDisplay
					url="https://discord.1anime.info"
					urlTarget="_blank"
					description="Join our Discord server for support and community interaction."
				>
					<IconBrandDiscord size={20} stroke={1.5} />
					Community Support
				</BasicInfoDisplay>
				<BasicInfoDisplay
					description="Enjoy a seamless experience with no ads."
				>
					<IconHeartHandshake size={20} stroke={1.5} />
					Ad-Free
				</BasicInfoDisplay>
				<BasicInfoDisplay
					description="Access a wide range of anime and manga data."
				>
					<IconCirclePlus size={20} stroke={1.5} />
					Vast Database
				</BasicInfoDisplay>
			</BasicInfoDisplayGrouped>

			<ButtonGroup>
				<Button type="primary" url="#features">Learn more</Button>

				<Button type="secondary-outline" urlTarget="_blank" url="https://1anime.info/docs/getting-started">
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
			<div class="type--group-heading-and-content">
				<h2>Why Choose 1Anime?</h2>
				<p>1Anime is designed for anime lovers who want a free and ad-free experience.</p>
			</div>

			<Banner type="info" size="small">
				1Anime is completely free to use, with no ads to disrupt your enjoyment.
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

			<Button urlTarget="_blank" url="https://1anime.info/docs/features" type="primary">
				<IconArrowDownLeft class="external-link" size={20} stroke={1.5} />
				Explore All Features
			</Button>
		</div>

		<div class="right">
			<div class="type--group-heading-and-content">
				<h2>Community Integrations</h2>
				<p>1Anime supports various integrations to enhance your experience.</p>
			</div>

			<div class="integrations__listing">
				{#each integrations as integration}
					<IntegrationCard
							type={integration.type}
							author={integration.author}
							title={integration.title}
							language={integration.language}
							url={integration.url}
					></IntegrationCard>
				{/each}
			</div>
		</div>
	</div>
</section>

<Footer />