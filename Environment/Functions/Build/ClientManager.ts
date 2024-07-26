import { Clients } from '@ClientManager';

export class ClientManager {
    private Clients: Clients[];

    constructor() {
        this.Clients = [];
    }

    addClient(name: string, path: string): void {
        const client = new Clients(name, path);
        this.Clients.push(client);
    }

    startClient(name: string): void {
        const client = this.Clients.find(cartel => cartel.getName() === name);
        if (client) {
            client.start();
        } else {
            console.log(`Bot with name ${name} not found.`);
        }
    }

    stopClient(name: string): void {
        const client = this.Clients.find(cartel => cartel.getName() === name);
        if (client) {
            client.stop();
        } else {
            console.log(`Bot with name ${name} not found.`);
        }
    }

    startAllClients(): void {
        this.Clients.forEach(bot => bot.start());
    }

    stopAllClients(): void {
        this.Clients.forEach(bot => bot.stop());
    }

    getClientStatus(): void {
        this.Clients.forEach(client => {
            console.log(`${client.getName()} is ${client.isRunning() ? 'Çalışıyor' : 'Durduruldu'}.`);
        });
    }
}
