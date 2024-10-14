
function handleKeyDown(event: KeyboardEvent) {
  if (event.key === "Escape") {
  }
};

function handleCtrlK(event: KeyboardEvent) {
  if (event.ctrlKey && event.key === "k") {
    console.log("Ctrl + K pressed");
    // Add your desired functionality here
  }
}

export const listenForCommandPalette = () => {
  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("keydown", handleCtrlK);
}

// CommandPaletteConfig.ts
export class CommandPaletteConfig {
  header?: any;
  body?: any;
  footer?: any;
  searchFunction?: (value: string) => any[];

  constructor({
    header = null,
    body = null,
    footer = null,
    searchFunction = null,
  }: {
    header?: any;
    body?: any;
    footer?: any;
    searchFunction?: (value: string) => any[];
  } = {}) {
    this.header = header;
    this.body = body;
    this.footer = footer;
    this.searchFunction = searchFunction;
  }
}

// CommandPaletteInstance.ts
export class CommandPaletteInstance {
  private config: CommandPaletteConfig;
  private isOpen: boolean;

  constructor(config: CommandPaletteConfig) {
    this.config = config;
    this.isOpen = false;
  }

  open(): void {
    this.isOpen = true;
    // Logic to open modal and render components (header, body, footer)
    console.log('Command palette opened');
  }

  close(): void {
    this.isOpen = false;
    // Logic to close the modal
    console.log('Command palette closed');
  }

  search(value: string): any[] | null {
    if (this.config.searchFunction) {
      return this.config.searchFunction(value);
    }
    return null;
  }
}

export function openCommandPalette(config: CommandPaletteConfig): CommandPaletteInstance {
  const instance = new CommandPaletteInstance(config);
  instance.open();
  return instance;
}