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

	let titles = ["1Anime", "Ad-free", "Unlimited Anime"];
	let currentIndex = 0;
	let currentTitle = titles[currentIndex];

	function changeTitle() {
		currentIndex = (currentIndex + 1) % titles.length;
		currentTitle = titles[currentIndex];
	}

	setInterval(changeTitle, 3000); // Change title every 3 seconds

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
	<meta name="image" content="https://i.imgur.com/eUveNoj.png">
	<meta itemprop="name" content="1Anime - Your Ultimate Anime and Manga Streaming Platform">
	<meta itemprop="description" content="1Anime is your ultimate platform for streaming anime and manga online without ads.">
	<meta itemprop="image" content="https://i.imgur.com/eUveNoj.png">
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:title" content="1Anime - Your Ultimate Anime and Manga Streaming Platform">
	<meta name="twitter:description" content="1Anime is your ultimate platform for streaming anime and manga online without ads.">
	<meta name="twitter:creator" content="@1AnimeApp">
	<meta name="twitter:site" content="@1AnimeApp">
	<meta name="twitter:image:src" content="https://i.imgur.com/eUveNoj.png">
	<meta name="twitter:image:alt" content="1Anime brand image">
	<meta name="og:title" content="1Anime - Your Ultimate Anime and Manga Streaming Platform">
	<meta name="og:description" content="1Anime is your ultimate platform for streaming anime and manga online without ads.">
	<meta name="og:image" content="https://i.imgur.com/eUveNoj.png">
	<meta name="og:url" content="https://1anime.com">
	<meta name="og:site_name" content="1Anime - Your Ultimate Anime and Manga Streaming Platform">
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
			>Support us by Donating to keep 1Anime ad-free!</InlineBanner>

			<div class="type--group-heading-and-content">
				<h1 style="background: linear-gradient(90deg, #ff0080, #ff8c00, #ff0080); -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: typing 2s steps(10, end) infinite;">{currentTitle}</h1>
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
					Start Watching Now
				</Button>
			</ButtonGroup>
		</div>
		<div class="right">
			<RequestExamples />
		</div>
	</main>

	<Marquee />
</section>
