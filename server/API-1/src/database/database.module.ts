import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Module({
  providers: [DatabaseService],
  exports : [DatabaseService] // Make available to other files
})
export class DatabaseModule {}
