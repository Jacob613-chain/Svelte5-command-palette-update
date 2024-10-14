<script lang="ts">
  import type { Snippet } from 'svelte';

  type Props = {
    children?: Snippet;
    onclick?: () => void;
  };

  let { children, onclick }: Props = $props();
</script>

{#if onclick}
  <div on:click={onclick}>
    {@render children()}
  </div>
{:else}
  {@render children()}
{/if}
