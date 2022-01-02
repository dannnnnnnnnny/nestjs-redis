import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as redisStore from 'cache-manager-redis-store';
import { RedisCacheManager } from './redis-cache.manager';
import { RedisServiceImpl } from './redis.service.impl';
import { RedisProviderToken } from './redis.type';

const cacheModule = CacheModule.registerAsync({
  imports: [ConfigModule],
  useFactory: (configs: ConfigService) => ({
    store: redisStore,
    host: configs.get<string>('REDIS_HOST'),
    port: configs.get<number>('REDIS_PORT'),
  }),
  inject: [ConfigService],
});

@Module({
  imports: [cacheModule],
  providers: [
    RedisServiceImpl,
    RedisCacheManager,
    {
      provide: RedisProviderToken.REDIS_CLIENT,
      useFactory: (redisCacheManager: RedisCacheManager) =>
        redisCacheManager.getClient(),
      inject: [RedisCacheManager],
    },
  ],
  exports: [cacheModule],
})
export class RedisModule {}
