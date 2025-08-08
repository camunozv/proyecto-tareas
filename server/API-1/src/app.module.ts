import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { TaskModule } from './task/task.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    UsersModule, 
    DatabaseModule, 
    TaskModule,
    ThrottlerModule.forRoot([{
      name : "short",
      ttl: 1000, // time to live 60000 ms
      limit: 3, // Only three requests allowed in 1 minute / 60000 ms from the same client
    }, {
      // Both of the time limits apply, even they are different rates
      name : "long", 
      ttl: 60000,
      limit : 100
    }
  ])
  ],
  controllers: [AppController],
  providers: [AppService , {
    provide : APP_GUARD,
    useClass : ThrottlerGuard
  }],
})
export class AppModule {}
