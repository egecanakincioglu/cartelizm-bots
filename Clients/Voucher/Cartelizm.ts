import { Client } from "@Voucher";
import { Logger } from "@Environment";

export class Cartelizm {
    constructor() {
        const Cartel = new Client();
        Cartel.VoucherManager();

        process.on('unhandledRejection', (error: Error) => {
            Logger.error(`${error.name}:`);
            console.error(error);
        });

        process.on('uncaughtException', (error: Error) => {
            Logger.error(`${error.name}:`);
            console.error(error);
        });
    }
}

new Cartelizm();