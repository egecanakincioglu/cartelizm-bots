import { CommandHandler, EventGenerator, Events, ChatInputCommandInteraction } from '@Environment';

class InteractionCreate {
    private interaction: ChatInputCommandInteraction;

    constructor(cartelizm: ChatInputCommandInteraction) {
        if (!cartelizm.isChatInputCommand()) {
            return;
        }
        this.interaction = cartelizm;
    }

    public async execute() {
        const CartelizmCommands = CommandHandler.getCommands().find((Cartel) =>
            Cartel.SlashCommandBuilder.name === this.interaction.commandName
        );

        if (CartelizmCommands) {
            return CartelizmCommands.Execute(this.interaction);
        }
    }
}

export default new EventGenerator({
    Category: Events.InteractionCreate,
    Execute(cartelizm: ChatInputCommandInteraction) {
        const interactionEvent = new InteractionCreate(cartelizm);
        interactionEvent.execute();
    }
});