import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma'

// This is were we create our database connection
@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit{

    async onModuleInit() {
        await this.$connect()
    }

}
