<script lang="ts">
  import { onMount } from 'svelte';

  type Props = {
    onsearch: (value: string) => void;
  };

  let inputRef: HTMLInputElement;
  let { onsearch }: Props = $props();

  const onChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    onsearch(target.value);
  };

  onMount(() => {
    inputRef.focus();
  });
</script>

<div class="relative">
  <svg class="pointer-events-none absolute left-4 top-3.5 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>
  <input bind:this={inputRef} onkeyup={onChange} type="text" class="h-12 bg-inherit outline-none pl-11 pr-4 text-green-500 sm:text-sm w-full" placeholder="Search..." />
</div>
