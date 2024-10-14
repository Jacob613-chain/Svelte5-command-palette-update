<script lang="ts">
  import * as CommandPalette from '../../../../src/lib';
  import { CommandPaletteConfig, CommandPaletteInstance, openCommandPalette } from '../../../../src/lib/command-palette'
  let commandPaletteInstance: any;
  const config = new CommandPaletteConfig({
    header: 'Command Palette Header',
    body: ['Item 1', 'Item 2', 'Item 3'],
    footer: 'Command Palette Footer',
    searchFunction: (value: string) => {
      return ['Item 1', 'Item 2', 'Item 3'].filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
    },
  });

  function openPalette() {
    commandPaletteInstance = openCommandPalette(config);
  }

  function closePalette() {
    if (commandPaletteInstance) {
      commandPaletteInstance.close();
    }
  }
</script>

<CommandPalette.Root onclose={() => console.log('close')} class="w-[600px]">
  <CommandPalette.Content onsearch={(terms: string) => console.log('search', terms)}>
    <CommandPalette.Section title="Recent searches">
      <CommandPalette.Item onclick={() => console.log('selected')}>
        <div class="text-sm text-slate-400">
          <div class="group flex cursor-default select-none items-center rounded-md px-3 py-2">
            <svg class="h-6 w-6 flex-none text-gray-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
            </svg>
            <span class="ml-3 flex-auto truncate">Add new folder...</span>
            <span class="ml-3 flex-none text-xs font-semibold text-gray-400"><kbd class="font-sans">⌘</kbd><kbd class="font-sans">F</kbd></span>
          </div>
        </div>
      </CommandPalette.Item>
      <CommandPalette.Item>
        <div class="text-sm text-slate-400">
          <div class="group flex cursor-default select-none items-center rounded-md px-3 py-2">
            <svg class="h-6 w-6 flex-none text-gray-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
            </svg>
            <span class="ml-3 flex-auto truncate">Add new folder...</span>
            <span class="ml-3 flex-none text-xs font-semibold text-gray-400"><kbd class="font-sans">⌘</kbd><kbd class="font-sans">F</kbd></span>
          </div>
        </div>
      </CommandPalette.Item>
      <CommandPalette.Item>
        <div class="text-sm text-slate-400">
          <div class="group flex cursor-default select-none items-center rounded-md px-3 py-2">
            <svg class="h-6 w-6 flex-none text-gray-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
            </svg>
            <span class="ml-3 flex-auto truncate">Add new folder...</span>
            <span class="ml-3 flex-none text-xs font-semibold text-gray-400"><kbd class="font-sans">⌘</kbd><kbd class="font-sans">F</kbd></span>
          </div>
        </div>
      </CommandPalette.Item><CommandPalette.Item>
        <div class="text-sm text-slate-400">
          <div class="group flex cursor-default select-none items-center rounded-md px-3 py-2">
            <svg class="h-6 w-6 flex-none text-gray-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
            </svg>
            <span class="ml-3 flex-auto truncate">Add new folder...</span>
            <span class="ml-3 flex-none text-xs font-semibold text-gray-400"><kbd class="font-sans">⌘</kbd><kbd class="font-sans">F</kbd></span>
          </div>
        </div>
      </CommandPalette.Item>
      <CommandPalette.Item>
        <div class="text-sm text-slate-400">
          <div class="group flex cursor-default select-none items-center rounded-md px-3 py-2">
            <svg class="h-6 w-6 flex-none text-gray-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
            </svg>
            <span class="ml-3 flex-auto truncate">Add new folder...</span>
            <span class="ml-3 flex-none text-xs font-semibold text-gray-400"><kbd class="font-sans">⌘</kbd><kbd class="font-sans">F</kbd></span>
          </div>
        </div>
      </CommandPalette.Item>
      <CommandPalette.Item>
        <div class="text-sm text-slate-400">
          <div class="group flex cursor-default select-none items-center rounded-md px-3 py-2">
            <svg class="h-6 w-6 flex-none text-gray-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
            </svg>
            <span class="ml-3 flex-auto truncate">Add new folder...</span>
            <span class="ml-3 flex-none text-xs font-semibold text-gray-400"><kbd class="font-sans">⌘</kbd><kbd class="font-sans">F</kbd></span>
          </div>
        </div>
      </CommandPalette.Item>
    </CommandPalette.Section>
    <CommandPalette.Footer class="flex h-12 items-center justify-end gap-4 p-4">
      <div class="flex justify-between">
        <button class="">Select</button>
        <button class="text-slate-600">Cancel</button>
      </div>
      <button on:click={openPalette}>Open Command Palette</button>
      <button on:click={closePalette}>Close Command Palette</button>
    </CommandPalette.Footer>
  </CommandPalette.Content>
</CommandPalette.Root>
