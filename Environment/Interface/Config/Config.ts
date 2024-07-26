import { Logger, load, readFileSync } from '@Environment';

export class Config {
    private ConfigPath: string = './Config/Config.yml';
    private ConfigData: ConfigData;

    constructor() {
        try {
            this.ConfigData = this.ConfigurationLoader();
        } catch (Error) {
            Logger.error(`Bilinmeyen bir hata meydana geldi:`);
            console.error(Error);
        }
    }

    private ConfigurationLoader() {
        return load(readFileSync(this.ConfigPath, { encoding: 'utf-8' })) as ConfigData;
    }

    public get getSystem(): ConfigData['System'] {
        return this.ConfigData.System;
    }

    public get getDeveloper(): ConfigData['Developer'] {
        return this.ConfigData.Developer;
    }

    public get getGuild(): ConfigData['Guild'] {
        return this.ConfigData.Guild;
    }

    public get getSignature(): ConfigData['Signature'] {
        return this.ConfigData.Signature;
    }

    public get getPresence(): ConfigData['Presence'] {
        return this.ConfigData.Presence;
    }
}