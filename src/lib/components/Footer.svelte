<script>
import Button from "./Button.svelte";
import {IconArrowDownLeft, IconGitFork} from "@tabler/icons-svelte";
import MalHeartBeat from "./MalHeartBeat.svelte";
</script>

<footer class="footer">
    <div class="footer__body">
        <div class="footer__content">
            <div class="footer__brand">
                <a href="https://1anime.co" class="logo"><img src="https://1anime.co/logo.svg" alt="1Anime Logo" width="77" height="32"/></a>
                <p>Watch Anime and Read Manga without ads for FREE.</p>

                <MalHeartBeat />
            </div>

            <div class="footer__linksWrapper">
                <div class="footer__links">
                    <strong>General</strong>
                    <ul>
                        <li><Button url="/#features" type="link">Features</Button></li>
                        <li><Button url="/#integrations" type="link">Integrations</Button></li>
                        <li><Button url="https://1anime.info/privacy" type="link">Privacy Policy</Button></li>
                    </ul>
                </div>
                <div class="footer__links">
                    <strong>Community</strong>
                    <ul>
                        <li><Button url="http://discord.gg/1anime" urlTarget="_blank" type="link">Discord</Button></li>
                        <li><Button url="https://github.com/1Anime" urlTarget="_blank" type="link">GitHub</Button></li>
                        <li><Button url="https://1anime.info/docs/contribute" urlTarget="_blank" type="link">Donate</Button></li>
                        <li><Button url="https://www.reddit.com/r/1animeapp/" urlTarget="_blank" type="link">Reddit</Button></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>

<div class="copyright">
    <div class="copyright__content">
        <span>2024-2025 1Anime</span>
        <span>To God Be The Glory. <Button type="link" size="small" urlTarget="_blank" url="https://github.com/jikan-me/website"><IconGitFork size={16} stroke={1.5} />Website inspired from Jikan.moe</Button>.</span>
    </div>
</div>



<style lang="scss">
  .footer {
    padding: 100px 0;
    align-items: center;
    justify-content: center;
    display: flex;
    width: 100%;
    background: var(--background-100);

    &__body {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 64px;
      width: var(--content-width);
    }

    &__brand {
      p {
        color: var(--typography-300);
      }
    }

    &__content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
    }

    &__linksWrapper {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      gap: 64px;
    }

    &__links {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 32px;

      ul {
        margin: 0; padding: 0;
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      li {
        list-style: none;
        margin: 0; padding: 0;
      }
    }
  }

  .copyright {
    box-sizing: border-box;
    padding: 32px;
    align-items: center;
    justify-content: center;
    display: flex;
    width: 100%;
    background: var(--background-000);

    &__content {
      font-size: 12px;
      display: flex;
      justify-content: space-between;
      color: var(--typography-300);
      align-items: center;
      gap: 64px;
      width: var(--page-width);

      span {
        display: flex;
        align-items: center;
      }
    }
  }


  @media screen and (max-width: 1000px) {
    .footer {
      padding: 100px 16px;
      box-sizing: border-box;

      &__content {
        flex-direction: column;
        gap: 64px;
      }

      &__linksWrapper {
        flex-direction: column;
      }

      &__links {

      }
    }

    .copyright {
      flex-direction: column;
      padding: 16px;

      &__content {
        flex-direction: column;
        gap: 32px;
        width: 90vw;

        span {
          display: inline;
        }
      }
    }
  }
</style>