import { ContextItem } from "../llm/types";

export interface ContextProviderDescription {
  title: string;
  displayTitle: string;
  description: string;
  dynamic: boolean;
  requiresQuery: boolean;
}

export abstract class ContextProvider {
  options: Object;
  constructor(options: Object) {
    this.options = options;
  }

  static description: ContextProviderDescription;

  // Maybe just include the chat message in here. Should never have to go back to the context provider once you have the information.
  abstract getContextItem(query: string): Promise<ContextItem[]>;

  abstract load(): Promise<void>;
}
