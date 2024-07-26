import { readFileSync, load, Logger } from '@Environment';

export class Tokens {
    private TokensPath: string = './Config/Private/Tokens.yml';
    private TokensData: TokenData;

    constructor() {
        try {
            this.TokensData = this.TokensLoader();
        } catch (Error) {
            Logger.error(`Bilinmeyen bir hata meydana geldi:`);
            console.error(Error);
        }
    }

    private TokensLoader() {
        return load(readFileSync(this.TokensPath, { encoding: 'utf-8' })) as TokenData;
    }

    public get getGeneral(): TokenData['General'] {
        return this.TokensData.General;
    }
    
    public get getWelcome(): TokenData['Welcome'] {
        return this.TokensData.Welcome;
    }
}