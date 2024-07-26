import { Client, ActivityType, UserSizes } from '@Environment';

export class PresenceHandler {
    private static Cartelizm: Client;

    public static Initialize(Cartel: Client): void {
        PresenceHandler.Cartelizm = Cartel;
    }

    private static async CartelizmPresence(message: string) {
        const StatusType = 'idle'
        const Users = await new UserSizes(this.Cartelizm).getUserSizes();
        PresenceHandler.Cartelizm.user.setPresence({
            activities: [
                {
                    name: message.replace('%Users%', Users.toString()),
                    type: ActivityType.Listening
                }
            ],
            status: StatusType
        });
    }

    public static async LoadPresence() {
        const PresenceUsers = 'Kullanıcı';
        let PresenceQueue = 0;

        const UpdatePresence = async () => {
            const PresenceMessages = ["Deneme", "Kitap", "Allah"];
            const StartMessage = `Emoji | %Users% ${PresenceUsers}`;
            const AllMessages: string[] = [StartMessage, ...PresenceMessages];
            const MainMessage = AllMessages[PresenceQueue];
            await this.CartelizmPresence(MainMessage);
            PresenceQueue = (PresenceQueue + 1) % AllMessages.length;
        };
+
        await UpdatePresence();
        setInterval(UpdatePresence, 8000);
    }
}