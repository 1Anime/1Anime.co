<script>
import Chip from "./Chip.svelte";
import AnimeCard from "./AnimeCard.svelte";
import {onMount} from "svelte";
import math from "../helpers/math.js";
import funcs from "../helpers/funcs.js";
import ui from "../helpers/ui.js";
import {fly} from "svelte/transition";

let requests = [
    "https://api.jikan.moe/v4/anime?q=bleach&sfw",
    "https://api.jikan.moe/v4/top/anime?sfw",
    "https://api.jikan.moe/v4/seasons/upcoming",
    "https://api.jikan.moe/v4/top/anime?type=movie",
    "https://api.jikan.moe/v4/top/anime?type=ova",
    "https://api.jikan.moe/v4/top/anime?type=ona",
    "https://api.jikan.moe/v4/top/anime?type=ona",
];
$: requestUrl = requests[0];
$: requestIndex = 0;
$: requestInterval = null;
$: pauseInterval = null;
$: intervalLock = false;
$: showCards = false;
$: isCardTransitioning = false;
$: requestDuration = 0;
$: showDuration = false;

let entries = [];

onMount(() => {
    for (let i = 0; i <= math.randomInteger(2,4); i++) {
        let randomYear = math.randomInteger(2005, (new Date().getFullYear()-1))
        let randomSeason = ['spring', 'summer', 'winter', 'fall'][math.randomInteger(0, 3)]
        requests.push("https://api.jikan.moe/v4/seasons/"+randomYear+"/"+randomSeason+"?sfw")
    }

    requests = funcs.shuffle(requests);
    apiCall(); // Call the API when the component mounts
})

async function apiCall() {
    if (intervalLock) {
        return;
    }

    isCardTransitioning = true;
    await ui.sleep(100)
    showCards = false;
    await ui.sleep(100)
    isCardTransitioning = false;

    let startTime = performance.now();
    entries = await ((await fetch(requestUrl)).json())
    requestDuration = Math.ceil(performance.now() - startTime);
    showDuration = true;
    entries = entries.data.slice(0, 6)

    isCardTransitioning = true;
    await ui.sleep(100)
    showCards = true;
    await ui.sleep(100)
    isCardTransitioning = false;

    intervalLock = true;
    requestInterval = setInterval(() => {
        showDuration = false;
        updateRequestUrl()
        intervalLock = false;
        clearInterval(requestInterval)
    }, 10000);
}

function updateRequestUrl() {
    requestIndex++;
    requestIndex = requestIndex >= requests.length ? 0 : requestIndex;
    requestUrl = requests[requestIndex];
}

function getFakeUrl(url) {
    const urlParts = new URL(url);
    const pathWithoutV4 = urlParts.pathname.replace('/v4', '');
    return `1anime.one${pathWithoutV4}`;
}
</script>

<div class="cards">
    {#if !showCards}
        {#each {length: 6} as _, i}
            <AnimeCard skeleton cardExit={isCardTransitioning} />
        {/each}
    {/if}
    {#if showCards}
        {#each entries as entry}
            <AnimeCard
                cardExit={isCardTransitioning}
                mal_id={entry.mal_id}
                status={entry.status}
                title={entry.title}
                imageUrl={entry.images.jpg.large_image_url}
                rating={entry.rating}
                score={entry.score}
                scoredBy={entry.scored_by}
                season={entry.season}
                year={entry.year}
                episodes={entry.episodes}
                rank={entry.rank}
                genres={entry.genres}
            />
        {/each}
    {/if}
</div>