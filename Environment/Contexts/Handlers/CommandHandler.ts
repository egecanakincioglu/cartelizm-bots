import { Client, CommandGenerator, Events, Logger, SlashCommandBuilder, join, readdir } from "@Environment";

export class CommandHandler {
    private static Commands: CommandGenerator[] = [];
    private static CommandPath = './Clients/Voucher/Commands';
        
    private static async CommandReader(CommandPath = join(process.cwd(), this.CommandPath )) {
        const CartelizmFiles = await readdir(CommandPath, {withFileTypes: true });
        const GrantedCommands: CommandGenerator[] = [];

        for (const CartelFiles of CartelizmFiles) {
            try {
                if (CartelFiles.isDirectory()) {
                    const DirectoryCommands = await this.CommandReader(join(CommandPath, CartelFiles.name));
                    GrantedCommands.push(...DirectoryCommands);
                    continue;
                }

                const CartelizmCommands = await import(`file://${CommandPath}/${CartelFiles.name}`);

                if (!CartelizmCommands || !('default' in CartelizmCommands) || !(CartelizmCommands.default instanceof CommandGenerator)) {
                    Logger.warn(`[Command Loader] ${CartelFiles.name} komutunda eksik veri bulundu!`);
                    continue;
                }

                GrantedCommands.push(CartelizmCommands.default);
                Logger.info(`[Command Loader] ${CartelFiles.name} başarıyla yüklendi!`);
            } catch (error) {
                Logger.error(`Bir hata meydana geldi: ${error.name}`);
                console.error(error);
            }
        }
        return GrantedCommands;
    }

    private static async CommandLoader() {
        this.Commands = await this.CommandReader();
    }

    private static async setCommands(client: Client) {
        const CartelsData = this.Commands.map((CommandSender) => CommandSender.SlashCommandBuilder as SlashCommandBuilder);
        const API = client.application;

        if (!API) return Logger.error(`API Bağlantısı kurulamadı lütfen sistemi yeniden başlatın.`);
        await API.commands.set(CartelsData);
    }

    public static async CommandManager(client: Client) {
        await this.CommandLoader();
        client.once(Events.ClientReady, async (Cartel) => {
            await this.setCommands(Cartel);
        });
    }

    public static getCommands() {
        return this.Commands;
    }
}