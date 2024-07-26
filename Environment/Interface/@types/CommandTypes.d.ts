type SlashCommandBuilders =
    | Omit<import("discord.js").SlashCommandBuilder, 'addSubcommand' | 'addSubcommandGroup'>
    | import("discord.js").SlashCommandBuilder
    | import("discord.js").SlashCommandOptionsOnlyBuilder
    | import("discord.js").SlashCommandSubcommandBuilder
    | import("discord.js").SlashCommandSubcommandGroupBuilder
    | import("discord.js").SlashCommandSubcommandsOnlyBuilder;

interface CommandGeneratorOptions {
    Execute(Interaction: import("discord.js").ChatInputCommandInteraction): unknown | Promise<unknown>;
    SlashCommandBuilder: SlashCommandBuilders;
}