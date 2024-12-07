<script>
import Button from "./Button.svelte";
import {IconArrowDownLeft, IconBrandDiscord, IconBrandGithub, IconTipJar, IconMenu, IconX} from "@tabler/icons-svelte";
import Chip from "./Chip.svelte";

let scrollY;
let mobileNavToggled = false;
$: isMinimized = scrollY > 50 ? 'navWrapper--minimize' : '';
function toggleMobileNav() {
    mobileNavToggled = !mobileNavToggled;
    document.getElementById("nav").classList.toggle('active');
}

</script>

<svelte:window bind:scrollY />

<div id="nav" class="navWrapper {isMinimized}">
    <nav class="nav">
        <div class="nav__top">
            <a href="/" class="logo"><img src="https://1anime.info/logo.svg" alt="1Anime Logo" width="77" height="32"/></a>
            <div id="mobile-nav">
                <Button type="nav-trigger" size="small"
                    callback={toggleMobileNav}
                >
                    {#if mobileNavToggled}
                        <IconX size={25} stroke={1.5} />
                    {:else}
                        <IconMenu size={25} stroke={1.5} />
                    {/if}
                </Button>
            </div>
        </div>
        <div class="nav__bodyWrapper">
            <div class="nav__body">
                <div class="main">
                    <Button
                        type="nav-link"
                        urlTarget="_blank"
                        url="https://1anime.one"
                    >
                        <IconArrowDownLeft class="external-link" size={20} stroke={1.5} />
                        Watch Now
                        <Chip type="outline" size="small">v2.0</Chip>
                    </Button>
                    <Button type="nav-link" url="/#features">Features</Button>
                    <Button type="nav-link" url="/#integrations">Integrations</Button>
                </div>

                <div class="links">
                    <Button type="nav-icon-link" size="small" urlTarget="_blank" url="https://1anime.info/docs/contribute">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-tip-jar">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M14 10h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
                            <path d="M12 9v1" />
                            <path d="M12 16v1" />
                            <path d="M17 4v1.882c0 .685 .387 1.312 1 1.618s1 .933 1 1.618v8.882a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3v-8.882c0 -.685 .387 -1.312 1 -1.618s1 -.933 1 -1.618v-1.882" />
                            <path d="M6 4h12z" />
                        </svg>
                    </Button>
                    <Button type="nav-icon-link" size="small" urlTarget="_blank" url="http://discord.gg/1anime"><IconBrandDiscord size={20} stroke={1.5} /></Button>
                    <Button type="nav-icon-link" size="small" urlTarget="_blank" url="https://github.com/1Anime"><IconBrandGithub size={20} stroke={1.5} /></Button>
                </div>
            </div>
        </div>
    </nav>
</div>

<style lang="scss">
    .navWrapper {
      display: flex;
      height: 100px;
      position: fixed;
      top: 0;
      z-index: 99999;
      justify-content: center;
      align-items: center;
      width: 100vw;
      backdrop-filter: blur(25px);
      transition: all 0.25s ease;


      &--minimize {
        height: 60px;
      }
    }

    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      align-self: stretch;
      width: var(--page-width);
      padding: 0 32px;
      gap: 32px;

      .nav__body {
        display: flex;
        justify-content: space-between;
        width: 100%;

        .main {
          display: flex;
          gap: 16px;
        }

        .links {
          display: flex;
          gap: 8px;
        }
      }
    }

    @media screen and (max-width: 1200px) {
      nav {
        padding: 0 16px;
        display: grid;
        grid-template-columns: 100px 1fr auto;

        .main {
          gap: 8px;
        }

        .links {
          gap: 8px
        }
      }
    }


    @media screen and (max-width: 1000px) {
      #mobile-nav {
        display: block;
      }

      .navWrapper {

        nav {
          display: flex;
          flex-direction: row;
          width: 100%;
          justify-content: space-between;

          .nav__top {
            display: flex;
            flex-direction: row;
            width: 100%;
            justify-content: space-between;

            .logo {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }

          .nav__bodyWrapper {
            //transform: translateY(-100vh);
            //filter: blur(25px);
            visibility: hidden;
            display: none;
          }
        }

        &.active {
          display: flex;
          height: 100vh;
          backdrop-filter: blur(35px);

          nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            width: 100vw;
            padding: 0;
            gap: unset;

            .nav__bodyWrapper {
              height: 100%;
              width: 100%;
              visibility: visible;
              display: block;
            }

            .nav__top {
              padding: 32px;
              box-sizing: border-box;
            }

            .nav__body {
              height: 100%;
              width: 100%;
              flex-direction: column;
              gap: 32px;

              justify-content: center;
              align-items: center;
              transform: unset;
              filter: unset;

              .main {
                display: flex;
                flex-direction: column;
                align-items: center;
              }
            }
          }
        }

      }
    }
</style>