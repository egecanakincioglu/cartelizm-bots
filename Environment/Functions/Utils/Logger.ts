import { BotUtils, Console, Time } from '@Environment';

export class Logger {
    private static Log = new Console().getLogger;

    public static info(Cartelizm: string): void {
        Logger.log(Logger.Log.Info, Cartelizm);
    }

    public static warn(Cartelizm: string): void {
        Logger.log(Logger.Log.Warn, Cartelizm);
    }

    public static error(Cartelizm: string): void {
        Logger.log(Logger.Log.Error, Cartelizm);
    }

    private static log(LogType: string, CartelizmLog: string): void {
        const setTime = Time.instant();
        const botName = BotUtils.getBotName();
        let Message: string;

        switch (LogType) {
            case this.Log.Info:
                Message = `[${setTime}] [${botName}] [${this.Log.Info}] ${CartelizmLog}`;
                break;
            case this.Log.Warn:
                Message = `[${setTime}] [${botName}] [${this.Log.Warn}] ${CartelizmLog}`;
                break;
            case this.Log.Error:
                Message = `[${setTime}] [${botName}] [${this.Log.Error}] ${CartelizmLog}`;
                break;
            default:
                Message = `[${setTime}] [${botName}] [${LogType}] ${CartelizmLog}`;
                break;
        }
        console.log(Message);
    }
}
