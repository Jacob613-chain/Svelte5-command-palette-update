<script lang="ts">
  import type { Snippet } from 'svelte';

  type CommandPaletteRootProps = {
    children?: Snippet;
    class?: string;
    onclose?: () => void;
  };

  let { children, onclose, class: className }: CommandPaletteRootProps = $props();
  let ref: HTMLElement;

  const handleClick = (e: MouseEvent) => {
    if (onclose && ref === e.target) {
      onclose();
    }
  };
</script>

<div bind:this={ref} onclick={handleClick} role="dialog" aria-modal="true" class="modal-overlay absolute bottom-0 left-0 right-0 top-0 flex h-full w-full items-center justify-center bg-black/50 backdrop-blur-sm transition-all duration-500 {className}">
  {@render children()}
</div>
