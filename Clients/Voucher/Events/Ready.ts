import { PresenceHandler, EventGenerator, Logger, UserSizes, Events, Client, Time } from "@Environment";

class Ready {
    private cartelizm: Client;

    constructor(cartelizm: Client) {
        this.cartelizm = cartelizm;
    }

    public async execute() {

        const presenceListener = async () => {
            this.cartelizm.user.setPresence({ activities: [{ name: '🔥 Developed by CARTELIZM'}], status: 'dnd' });
            await Time.Countdown(8000);
            await PresenceHandler.LoadPresence();
        };

        this.cartelizm.on('startPresence', presenceListener);

        const TotalUsers = await new UserSizes(this.cartelizm).getUserSizes();
        Logger.info(`Bot aktif! ${TotalUsers} kullanıcıya hizmet ediyorum!`);

        this.cartelizm.emit('startPresence');
    }
}

export default new EventGenerator({
    Category: Events.ClientReady,
    Once: true,
    async Execute(cartelizm) {
      const readyEvent = new Ready(cartelizm);
      await readyEvent.execute();
    }
});