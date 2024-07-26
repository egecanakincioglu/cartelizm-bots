interface EventGeneratorOptions<Category extends keyof ClientEvents> {
    Execute(...Cartelizm: import("discord.js").ClientEvents[Category]): unknown | Promise<unknown>;
    Category: Category;
    Once?: boolean;
}