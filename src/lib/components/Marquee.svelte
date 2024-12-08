<script>
import JetbrainsLogo from "../images/jetbrains.svg";
import Divider from "./Divider.svelte";
import {onMount} from "svelte";
import supporters from "../../data/supporters.js";

let marquee;

onMount(() => {
    const clone = marquee.innerHTML;
    const firstElement = marquee.children[0];

    let i = 0;
    marquee.insertAdjacentHTML('beforeend', clone);
    marquee.insertAdjacentHTML('beforeend', clone);

    setInterval(() => {
        firstElement.style.marginLeft = `-${i}px`;

        if (i > firstElement.clientWidth) {
            i = 0;
        }

        i += 0.2;
    }, 0);
});


</script>

<footer class="shoutouts" bind:this={marquee}>
    <div class="marquee">
        {#if supporters.sugoi_supporter.length > 0}
            <p>Sugoi Supporters</p>
        {/if}
        {#each supporters.sugoi_supporter.sort() as supporter}
            <code>{supporter}</code>
        {/each}
        <Divider type="circle"/>

        {#if supporters.supporter.length > 0}
            <p>Supporters</p>
        {/if}
        {#each supporters.supporter.sort() as supporter}
            <code>{supporter}</code>
        {/each}
        <Divider type="circle"/>

        {#if supporters.supporter.length > 0}
            <p>Donate to get here!</p>
        {/if}
        {#each supporters.powered_by as poweredBy}
            <a href={poweredBy.url} target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-tip-jar">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M14 10h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
                    <path d="M12 9v1" />
                    <path d="M12 16v1" />
                    <path d="M17 4v1.882c0 .685 .387 1.312 1 1.618s1 .933 1 1.618v8.882a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3v-8.882c0 -.685 .387 -1.312 1 -1.618s1 -.933 1 -1.618v-1.882" />
                    <path d="M6 4h12z" />
                </svg>
                <code>{poweredBy.name}</code>
            </a>
        {/each}
        <Divider type="circle"/>
    </div>
</footer>

<style lang="scss">
    .shoutouts {
      display: flex;
      overflow: hidden;
      z-index: 10;
      height: 60px;
      gap: 32px;
      background: var(--background-000);

      & > * {
        user-select: none;
        -webkit-user-drag: none;
      }

      .marquee {
        display: flex;
        align-items: center;
        gap: 32px;

        p {
          color: var(--typography-400);
          white-space: nowrap;
          overflow: visible;
        }

        a {
          display: flex;
          align-items: center;
          gap: 16px;
          white-space: nowrap;
          overflow: visible;
        }

        code {
          white-space: nowrap;
          overflow: visible;
        }
      }
    }
</style>