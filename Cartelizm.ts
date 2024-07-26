import { ClientManager, CLI } from '@ClientManager'

const ClientsManager = new ClientManager();

ClientsManager.addClient('Voucher', './Clients/Voucher/Cartelizm.ts');
ClientsManager.addClient('Supervisor', './Clients/Supervisor/Cartelizm.ts');
ClientsManager.addClient('Protective I', './Clients/Protective/I/Cartelizm.ts');
ClientsManager.addClient('Protective II', './Clients/Protective/II/Cartelizm.ts');
ClientsManager.addClient('Protective III', './Clients/Protective/III/Cartelizm.ts');

const CLIInstance = new CLI(ClientsManager);
CLIInstance.start();