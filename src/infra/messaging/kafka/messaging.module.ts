import { DatabaseModule } from './../../database/database.module';
import { SendNotification } from './../../../app/use-cases/send-notification';
import { KafkaConsumerService } from './kafka-consumer.service';
import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [DatabaseModule],
  providers: [SendNotification, KafkaConsumerService],
  controllers: [NotificationsController],
})
export class MessagingModule {}
