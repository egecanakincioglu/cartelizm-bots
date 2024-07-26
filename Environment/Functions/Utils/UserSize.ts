import { Client } from "@Environment";

export class UserSizes {
    private Cartelizm: Client;

    constructor(Cartelizm: Client) {
        this.Cartelizm = Cartelizm;
    }

    public async getUserSizes() {
        let CartelizmUsers = 0;
        this.Cartelizm.guilds.cache.forEach(Cartel => {
            CartelizmUsers += Cartel.memberCount;
        });
        return CartelizmUsers;
    }
}