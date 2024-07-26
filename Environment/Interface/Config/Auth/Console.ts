import { readFileSync, load, Logger } from '@Environment';

export class Console {
    private ConsolePath: string = './Config/Auth/Console.yml';
    private ConsoleData: ConsoleData;

    constructor() {
        try {
            this.ConsoleData = this.ConsoleLoader();
        } catch (Error) {
            Logger.error(`Bilinmeyen bir hata meydana geldi:`);
            console.error(Error);
        }
    }

    private ConsoleLoader() {
        return load(readFileSync(this.ConsolePath, { encoding: 'utf-8' })) as ConsoleData;
    }

    public get getLogger(): ConsoleData['Logger'] {
        return this.ConsoleData.Logger;
    }

    public get getConsole(): ConsoleData['Console'] {
        return this.ConsoleData.Console;
    }
}
