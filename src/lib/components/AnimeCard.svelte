<script>
    import Chip from "./Chip.svelte";
    import {IconStar, IconHash} from "@tabler/icons-svelte";
    import Divider from "./Divider.svelte";
    import string from "../helpers/string.js";
    import {onMount} from "svelte";
    import tilt from "./tilt.js";
    export let mal_id = 0;
    export let imageUrl = "";
    export let rating = "";
    export let score = 0;
    export let scoredBy = 0;
    export let title = "";
    export let season = 0;
    export let year = 0;
    export let genres = [];
    export let status = "";
    export let episodes = 0;
    export let rank = 0;
    export let skeleton = false;
    export let cardExit = false;

    $: statusClass = status;
    $: isCardTransitioning = cardExit ? 'cardAnime--exit' : '';

    onMount(() => {
        switch (status) {
            case "Finished Airing":
                statusClass = "animeStatus-finished";
                break;
            case "Not yet aired":
                statusClass = "animeStatus-upcoming";
                break;
            case "Currently Airing":
                statusClass = "animeStatus-airing";
                break;
        }
    });
</script>

{#if skeleton}
    <div class="cardAnime cardAnime--skeleton {isCardTransitioning}"></div>
{:else}
    <a
        href="https://1anime.one/mal/{mal_id}"
        class="cardAnime {isCardTransitioning}"
        target="_blank"
        use:tilt={{scale:1, reverse:true}}
    >
        <div class="cardAnime__cover">
            <img src="{imageUrl}" alt="{title}" />
            <div class="cardAnime__overlay">
                <div class="cardAnime__rated">
                    <small>{rating === null ? "" : string.ratedToSmall(rating)}</small>
                </div>
            </div>
        </div>
        <div class="cardAnime__body">
            <Chip size="small" type="{statusClass}">
                {string.capitalize(status)}
            </Chip>
            <div class="cardAnime__meta">
                {#if season !== null}
                    <small>{string.capitalize(season)} {year}</small>
                {/if}
                {#if season !== null && episodes !== null }
                    <Divider type="circle" />
                {/if}
                {#if episodes !== null}
                    <small>{episodes} episodes</small>
                {/if}
            </div>
            <p class="cardAnime__title">{title}</p>
            <div class="cardAnime__rating">
                {#if score !== null}
                <div class="cardAnime__score">
                    <div>
                        <IconStar stroke={1.5} size={20} />
                        {score}
                    </div>
                    <small>{scoredBy} users</small>
                </div>
                {/if}
                <div class="cardAnime__rank">
                    <div>
                        {#if rank !== null}
                            <IconHash stroke={1.5} size={20} />
                            {rank}
                        {:else}
                            Unranked
                        {/if}
                    </div>
                    <small>Ranking</small>
                </div>
            </div>
            <div class="cardAnime__genres">
                {#if genres.length > 2}
                    {#each genres.slice(0,2) as genre}
                        <Chip size="small" length="small" type="flat">{genre.name}</Chip>
                    {/each}
                    <Chip size="small" type="flat">+{genres.length - genres.slice(0,2).length}</Chip>
                {:else}
                    {#each genres as genre}
                        <Chip size="small" length="small" type="flat">{genre.name}</Chip>
                    {/each}
                {/if}
            </div>
        </div>
    </a>
{/if}

<style lang="scss">
    .cardAnime {
        position: relative;
        display: flex;
        flex-direction: column;
        padding: 16px;
        align-items: center;
        gap: 12px;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.1)),
                    var(--background-200);
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius-large);
        user-select: none;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        overflow: hidden;
        height: 240px;
        min-width: 320px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

        &:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
        }

        &--skeleton {
            border-radius: 12px;
            background: linear-gradient(108deg, #1F2635 2.12%, rgba(31, 38, 53, 0.00) 100%);
            border: 1px solid var(--background-600);
            height: 240px;
            width: 320px;
            overflow: hidden;
        }

        &--exit {
            filter: blur(10px) grayscale(1);
            transform: scale(0.95, 0.95);
            opacity: 0;
        }

        &__cover {
            height: 220px;
            width: 160px;
            overflow: hidden;
            position: relative;
            border-radius: var(--border-radius-small);

            img {
                height: inherit;
                width: inherit;
                object-fit: cover;
                border-radius: var(--border-radius-small);
                user-select: none;
            }
        }

        &__meta {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 0.9em;
            color: var(--typography-400);
        }

        &__body {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
        }

        &__title {
            font-size: 1.1em;
            font-weight: bold;
            color: var(--typography-200);
            text-align: center;
            margin: 8px 0;
            max-width: 200px;
            line-height: 1.3;
        }

        &__rating {
            display: flex;
            align-items: center;
            gap: 20px;
            align-self: stretch;
        }

        &__score, &__rank {
            small {
                color: var(--typography-400);
            }

            >div {
                display: flex;
                align-items: center;
                gap: 6px;
            }
        }

        &__rank {
            >div {
                gap: unset;
            }
        }

        &__genres {
            overflow: hidden;
            display: flex;
            align-items: center;
            gap: 10px;
            align-self: stretch;
        }

        &__overlay {
            display: flex;
            width: 100%;
            padding: 16px;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-start;
            position: absolute;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            border-radius: 0 0 var(--border-radius-large) var(--border-radius-large);
        }

        &__rated {
            color: var(--typography-200);
            padding-left: 12px;
            display: flex;
            align-items: center;
        }
    }
</style>