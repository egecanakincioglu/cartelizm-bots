export class CommandGenerator {
    public Execute: CommandGeneratorOptions['Execute'];
    public SlashCommandBuilder: CommandGeneratorOptions['SlashCommandBuilder'];

    constructor(Options: CommandGeneratorOptions) {
        this.Execute = Options.Execute;
        this.SlashCommandBuilder = Options.SlashCommandBuilder;
    }
}