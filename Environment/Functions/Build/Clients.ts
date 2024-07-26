import { ChildProcess, exec } from '@ClientManager';

export class Clients {
    private name: string;
    private path: string;
    private process: ChildProcess | null;

    constructor(name: string, path: string) {
        this.name = name;
        this.path = path;
        this.process = null;
    }

    start(): void {
        if (this.process) {
            console.log(`${this.name} bot is already running.`);
            return;
        }

        console.log(`\n${this.name} is starting...`);

        this.process = exec(`npx tsx ${this.path}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error starting ${this.name} bot:`, error);
                return;
            }
            if (stderr) {
                console.error(`${this.name} bot stderr:`, stderr);
                return;
            }
            console.log(`${this.name} bot stdout:`, stdout);
        });

        this.process.stdout?.on('data', (data) => {
            console.log(`${this.name} bot output: ${data}`);
        });

        this.process.stderr?.on('data', (data) => {
            console.error(`${this.name} bot error: ${data}`);
        });

        console.log(`${this.name} bot started.`);
    }

    stop(): void {
        if (this.process) {
            this.process.kill();
            console.log(`${this.name} bot stopped.`);
            this.process = null;
        } else {
            console.log(`${this.name} bot is not running.`);
        }
    }

    getName(): string {
        return this.name;
    }

    isRunning(): boolean {
        return this.process !== null;
    }
}