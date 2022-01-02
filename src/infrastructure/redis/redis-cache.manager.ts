import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { RedisCache } from './redis-config.interface';
import { RedisClient } from './redis.type';

@Injectable()
export class RedisCacheManager {
  constructor(
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: RedisCache,
  ) {}

  public getClient(): RedisClient {
    console.log(this.cacheManager.store.getClient());
    return this.cacheManager.store.getClient();
  }
}
