import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import KafkaCustomTransporter from './kafka-custom-transporter';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    strategy: new KafkaCustomTransporter({
      subscribe: {
        fromBeginning: true,
      },
      client: {
        clientId: 'apartmentDataRequest',
        brokers: [process.env.KAFKA_BROKER_URL],
      },
      consumer: {
        groupId: 'apartmentDataRequest-consumer',
        allowAutoTopicCreation: false,
      },
      run: {
        autoCommit: false,
      },
    }),
  });
  await app.listen();
}
bootstrap();
