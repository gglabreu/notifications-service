import { DatabaseModule } from './infra/database/database.module';
import { HttpModule } from './infra/http/http.module';
import { Module } from '@nestjs/common';
import { MessagingModule } from './infra/messaging/kafka/messaging.module';
@Module({
  imports: [HttpModule, DatabaseModule, MessagingModule],
})
export class AppModule {}
