import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService extends ServerKafka implements OnModuleDestroy {
    constructor() {
        super({
            client: {
                clientId: 'notifications',
                brokers: ['endless-hare-6792-us1-kafka.upstash.io:9092'],
                sasl: {
                  mechanism: 'scram-sha-256',
                  username: 'ZW5kbGVzcy1oYXJlLTY3OTIkM9_07hUYX2EaU1frS-pPDAyed8Q1yhSoqDnTW6M',
                  password: '52ab94581498434eaa8aef94e97cece6',
                },
                ssl: true,
            }
        })
    }
    async onModuleDestroy() {
        await this.close()
    }
}
