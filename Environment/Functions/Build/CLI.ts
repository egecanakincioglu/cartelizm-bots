import { ClientManager, readline }  from '@ClientManager';

export class CLI {
    private clientManager: ClientManager;
    private reader: readline.Interface; 

    constructor(clientManager: ClientManager) {
        this.clientManager = clientManager;
        const options: readline.ReadLineOptions = {
            input: process.stdin as unknown as NodeJS.ReadableStream,
            output: process.stdout as unknown as NodeJS.WritableStream
        }
        this.reader = readline.createInterface(options);
    }

    public start(): void {
        this.showMenu();
    }

    private showMenu(): void {
        console.log('\nBot Yönetim Sistemi');
        console.log('1. Belirli bir bot başlat');
        console.log('2. Belirli bir botu durdur');
        console.log('3. Tüm botları başlat');
        console.log('4. Tüm botları durdur');
        console.log('5. Bot durumunu göster');
        console.log('6. Çıkış');
        this.reader.question('Lütfen bir seçenek seçin: ', (input) => this.handleUserInput(input));
    }

    private handleUserInput(input: string): void {
        switch (input.trim()) {
            case '1':
                this.reader.question('Başlamak için botun adını girin: ', (cartel) => {
                    this.clientManager.startClient(cartel);
                    this.showMenu();
                });
                break;
            case '2':
                this.reader.question('Durdurulacak botun adını girin: ', (cartel) => {
                    this.clientManager.stopClient(cartel);
                    this.showMenu();
                });
                break;
            case '3':
                this.clientManager.startAllClients();
                this.showMenu();
                break;
            case '4':
                this.clientManager.stopAllClients();
                this.showMenu();
                break;
            case '5':
                this.clientManager.getClientStatus();
                this.showMenu();
                break;
            case '6':
                this.reader.close();
                break;
            default:
                console.log('Geçersiz seçenek. Lütfen tekrar deneyin.');
                this.showMenu();
                break;
        }
    }
}