import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedisModule } from './infrastructure/redis/redis.module';

@Module({
  imports: [ConfigModule.forRoot(), RedisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
