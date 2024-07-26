import { ClientEvents } from "@Environment";

export class EventGenerator<Category extends keyof ClientEvents = keyof ClientEvents> {
    public Category: Category;
    public Execute: (...Cartel: ClientEvents[Category]) => unknown | Promise<unknown>;
    public Once = false;
  
    constructor(Options: EventGeneratorOptions<Category>) {
        this.Execute = Options.Execute;
        this.Category = Options.Category;
  
        if (Options.Once) {
            this.Once = true;
        }
    }
}