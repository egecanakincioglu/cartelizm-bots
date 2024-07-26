import { readdir, Client, EventGenerator, join, Logger } from "@Environment";

export class EventHandler {
    private static Events: EventGenerator[] = [];
    private static Path = './Clients/Voucher/Events';

    private static async Loader() {
        const Path = join(process.cwd(), this.Path);

        const GrantedEvents: EventGenerator[] = [];

        const CartelsEventCategory = async <EventClass>(eventArrray: EventClass[], eventClass: new (...args: unknown[]) => EventClass) => {
            const CartelFolder = join(Path);
            const CartelizmFiles = (await readdir(CartelFolder)).filter((Cartelizm) => Cartelizm.endsWith('.ts') && !Cartelizm.endsWith('.d.ts'));

            for (const CartelFile of CartelizmFiles) {
                try {
                    const CartelizmEvents = await import(`file://${join(CartelFolder, CartelFile)}`);

                    if (!CartelizmEvents || !('default' in CartelizmEvents) || !(CartelizmEvents.default instanceof eventClass)) {
                        Logger.info(`[Event Loader] ${CartelFile} dosyasının verisi eksik.`);
                        continue;
                    }

                    eventArrray.push(CartelizmEvents.default);
                    Logger.info(`[Event Loader] ${CartelFile} başarıyla yüklendi.`)
                } catch (Error) {
                    Logger.error(`Bir hata meydana geldi:`);
                    console.error(Error);
                }
            }
        };

        await CartelsEventCategory(GrantedEvents, EventGenerator);

        this.Events = GrantedEvents;
    }

    private static setEvents(client: Client) {
        for (const MainEvent of this.Events) {
            const CartelRegister = (MainEvent.Once ? client.once : client.on).bind(client);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            CartelRegister(MainEvent.Category, (...Cartelizm: any) => void MainEvent.Execute(...Cartelizm));
        }
    }

    public static async EventManager(client: Client) {
        await this.Loader();
        this.setEvents(client);
    }

    public static getEvents() {
        return this.Events
    }
}