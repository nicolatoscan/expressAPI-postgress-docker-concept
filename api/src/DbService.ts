import { Pool } from 'pg';

class DbService {
    private pool: Pool;

    constructor() {
        this.pool = new Pool({
            user: 'utente',
            host: 'host.docker.internal',
            database: 'main',
            password: 'password',
            port: 5432,
        })
    }

    public getPool(): Pool {
        return this.pool;
    }
}

const dbService = new DbService();
export default dbService;
