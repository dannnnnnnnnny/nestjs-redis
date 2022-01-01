import { CacheModule, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as redisStore from 'cache-manager-redis-store';

const cacheModule = CacheModule.registerAsync({
  useFactory: (configs: ConfigService) => ({
    store: redisStore,
    host: configs.get<string>('REDIS_HOST'),
    port: configs.get<number>('REDIS_PORT'),
  }),
  inject: [ConfigService],
});

@Module({
  imports: [cacheModule],
  exports: [cacheModule],
})
export class RedisModule {}
