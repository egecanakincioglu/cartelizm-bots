import { load, Logger, readFileSync } from '@Environment';

export class FileRedirector {
    private FileRedirectorPath: string = './Config/Auth/FileRedirector.yml';
    private FileRedirectorData: FileData;

    constructor() {
        try {
            this.FileRedirectorData = this.FileSystemLoader();
        } catch (Error) {
            Logger.error(`Bilinmeyen bir hata meydana geldi:`);
            console.error(Error);
        }
    }

    private FileSystemLoader() {
        return load(readFileSync(this.FileRedirectorPath, { encoding: 'utf-8' })) as FileData;
    }

    public get getClientManager(): FileData['ClientManager'] {
        return this.FileRedirectorData.ClientManager;
    }

    public get getHandlerPaths(): FileData['HandlerPaths'] {
        return this.FileRedirectorData.HandlerPaths;
    }

    public get getGlobalClientNames(): FileData['GlobalClientNames'] {
        return this.FileRedirectorData.GlobalClientNames;
    }
}