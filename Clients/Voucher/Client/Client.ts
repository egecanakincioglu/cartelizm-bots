import { Cartelizm, GatewayIntentBits } from "@Clients";
import { CommandHandler, EventHandler, Logger, Tokens, PresenceHandler, Reader } from "@Environment";

export class Client extends Cartelizm {
    private Common = new Reader().getCommon;
    private static readonly Secret = new Tokens().getGeneral.Voucher;
    
    constructor() {
        super({
            intents: Object.keys(GatewayIntentBits).map((Cartelizm) => GatewayIntentBits[Cartelizm]),
        });
    }

    public async VoucherManager() {
        Logger.warn(this.Common.LoadPresence);
        PresenceHandler.Initialize(this);

        Logger.warn(this.Common.LoadEvents);
        await EventHandler.EventManager(this);

        Logger.warn(this.Common.LoadCommands);
        await CommandHandler.CommandManager(this);

        Logger.warn(this.Common.TokenConnected);
        this.login(Client.Secret);
    }
}