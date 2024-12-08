<script>
    import {tooltip} from "@svelte-plugins/tooltips"
    import {IconArrowDownLeft, IconHelp, IconInfoCircle} from '@tabler/icons-svelte';
    import Divider from "./Divider.svelte";
    import {onMount} from "svelte";

    $: health = "healthy"
    $: lastEvent = null;

    onMount(() => {
        fetch('https://1anime.one/api/v2/etc/status', {
            method: 'GET',
            mode: 'no-cors' // Disable CORS
        }) 
            .then(response => response.json()) // Parse the JSON response
            .then(data => {
                if (data.status === "ok") {
                    health = "healthy"; // Set health to healthy if status is "ok"
                } else {
                    health = "down"; // Set health to error for any other status
                }
                lastEvent = null; // No last event since no data is available
            })
            .catch(() => {
                health = "error"; // Set health to error if fetch fails
            });
    })
</script>

<div class="heartbeat">
    <p>
        <span use:tooltip={{
            content: "Heartbeat monitors connections between the 1Anime site and our API. Requests that fail contribute towards a negative health event.",
            animation: 'slide'
        }}><IconHelp size={20} stroke={1.5} style="margin-top: 6px;"/></span>
        <strong>1Anime HeartBeat</strong>
    </p>

    <small>Heartbeat is <span class="heartbeat__health heartbeat__health--{health}">{health}</span></small>
<!--    <small>Last event occurred-->
<!--        <span class="heartbeat__event">{formatRelative(subDays(new Date(), new Date(lastEvent*1000)), new Date())}</span>-->
<!--    </small>-->
</div>

<style lang="scss">
.heartbeat {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  gap: 8px;

  width: 230px;
  min-width: 200px;
  max-width: 250px;

  background: var(--background-200);
  border: 1px solid var(--background-400);
  border-radius: var(--border-radius-large);

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    gap: 8px;
    color: var(--typography-100);
  }

  &__health {
    text-transform: capitalize;

    &--healthy {
      color: rgba(0, 255, 41, 1);
    }
    &--down {
      color: rgba(255, 0, 0, 1);
    }
    &--error {
      color: rgba(255, 165, 0, 1);
    }
  }
}
</style>
