import { ChatInputCommandInteraction, CommandGenerator, SlashCommandBuilder } from "@Environment";

export default new CommandGenerator({
    SlashCommandBuilder: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('allah yok'),
    Execute: async (interaction: ChatInputCommandInteraction) => {
        interaction.reply('pong');
    }
})