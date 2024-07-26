import { Config, Logger, load, readFileSync } from '@Environment';

export class Reader {
    private Locale: string = new Config().getSystem.Locale;
    private ReaderPath: string = `./Config/Langs/Lang-${this.Locale.toUpperCase()}.yml`;
    private ReaderData: LanguageData;

    constructor() {
        try {
            this.ReaderData = this.ReaderLanguageLoader();
        } catch (Error) {
            Logger.error(`Bilinmeyen bir hata meydana geldi:`);
            console.error(Error);
        }
    }

    private ReaderLanguageLoader() {
        return load(readFileSync(this.ReaderPath, { encoding: 'utf-8' })) as LanguageData;
    }

    public get getCommon(): LanguageData['Common'] {
        return this.ReaderData.Common;
    }
}