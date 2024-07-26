import { CallerFile, Console, FileRedirector }  from '@Environment';

export class BotUtils {
    public static pathReducer(Cartelizm: string | Record<string, string>): string | string[] {
        return typeof Cartelizm === "string"
            ? Cartelizm.replace(" ", "/")
            : Object.values(Cartelizm).flatMap(BotUtils.pathReducer);
    }

    public static getBotName(): string | undefined {
        const Path = CallerFile.getCallerFile();
        const ClientNameMap = Object.values<string | Record<string, string>>(
            new FileRedirector().getGlobalClientNames
        ).flatMap(BotUtils.pathReducer);
        const foundName = ClientNameMap.find((Cartel) => 
            Path.includes(Cartel));
        return foundName
            ? foundName.replace("/", " ")
            : new Console().getConsole.Prefix;
    }

    public static getEventHandlerPath(): string | undefined {
        const Path = CallerFile.getCallerFile();
        const ClientHandlerMap = Object.values<string | Record<string, string>>(
            new FileRedirector().getHandlerPaths.Event
        ).flatMap(BotUtils.pathReducer);
        const foundName = ClientHandlerMap.find((Cartel) => 
            Path.includes(Cartel));
        return foundName 
            ?? new Console().getConsole.Prefix;
    }

    public static getCommandHandlerPath(): string | undefined {
        const Path = CallerFile.getCallerFile();
        const ClientHandlerMap = Object.values<string | Record<string, string>>(
        new FileRedirector().getHandlerPaths.Command
        ).flatMap(BotUtils.pathReducer);
        const foundName = ClientHandlerMap.find((Cartel) => 
            Path.includes(Cartel));
        return foundName 
            ?? new Console().getConsole.Prefix;
    }
}