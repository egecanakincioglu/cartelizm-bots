interface FileData {
    ClientManager: {
        VoucherPath: string;
        SupervisorPath: string;
        ProtectivesPath: {
            I: string;
            II: string;
            III: string;
        }
    }

    HandlerPaths: {
        Event: {
            Voucher: string;
            Supervisor: string;
            Protectives: {
                I: string;
                II: string;
                III: string;
            }

        }
        Command: {
            Voucher: string;
            Supervisor: string;
            Protectives: {
                I: string;
                II: string;
                III: string;
            }
        }
    }

    GlobalClientNames: {
        Voucher: string;
        Supervisor: string;
        Protectives : {
            I: string;
            II: string;
            III: string;
        }
    }
}

